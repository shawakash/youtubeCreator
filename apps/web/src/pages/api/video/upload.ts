import { google } from 'googleapis';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import tokenValidator from '../auth/tokenValidator';
import fs from 'fs';
import middle from '../auth/middle';
import { Creator } from 'db';
import { uploadVideoType } from 'zodTypes';

const { BASEURL } = process.env;




async function main(oauth2Client, refresh_Token) {

    oauth2Client.setCredentials({
        'refresh_token': refresh_Token
    })
    const token = await oauth2Client.getAccessToken();
    return token.token;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(400).json({ message: 'Its  POST request' });
    }
    try {

        const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;
        if (!CLIENT_ID || CLIENT_ID.length == 0 ||
            !REDIRECT_URI || REDIRECT_URI.length == 0 ||
            !CLIENT_SECRET || CLIENT_SECRET.length == 0) {
            throw new Error('Please define the CREATOR_SECRET, CLIENT_SECRET, REDIRECT_URI environment variable');
        }

        

        middle(req, res, async () => {
            const { _id } = req.headers;
            const creator = await Creator.findById(_id);

            let { accessToken, refreshToken } = creator;
            if (!accessToken || !refreshToken || accessToken.length === 0 || refreshToken.length === 0) {
                return res.status(400).json({ message: 'Please Get Auth First' });
            }
            // const { accessToken, refreshToken } = req.headers; // Get the tokens from the request body


            const parsedInput = uploadVideoType.safeParse(req.body);
            if(!parsedInput.success) {
                return res.status(400).json({ message: 'Validation Error', err: parsedInput });
            } 


            const { 
                title,
                description,
                privacy,
                publishAt,
                category,
                videoKey,
                bucketName,
                thumbnail,
                tags
            } = parsedInput.data;



            const oauth2Client = new google.auth.OAuth2(
                CLIENT_ID,
                CLIENT_SECRET,
                REDIRECT_URI
            );
            oauth2Client.setCredentials({
                access_token: accessToken as string,
                refresh_token: refreshToken as string,

            });
            // const generatedToken = main(oauth2Client, refreshToken);

            const youtube = google.youtube('v3');

            const videoDetails = {
                snippet: {
                    title: title,
                    description: description,
                    tags,
                    category: parseInt(category)
                },
                status: {
                    privacyStatus: privacy, // Set to 'public' for a public video
                    publishAt
                },
            };

            try {
                const response = await axios({
                    baseURL: BASEURL,
                    url: '/video/getSignedUrl',
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': req.headers.authorization,
                        'videofilekey': videoKey,
                        'bucketName': bucketName,
                        'expiresin': 3600 * 24
                    }
                });

                
                if (response.status == 200) {
                    console.log(response.data.signedUrl)

                    const videoFilePath = response.data.signedUrl; // Path to the video file on your server
                    const response2 = await youtube.videos.insert({
                        auth: oauth2Client,
                        part: ['snippet,status'],
                        requestBody: videoDetails,
                        media: {
                            mimeType: 'video/*', // Change this according to your video's MIME type
                            body: (await axios.get(videoFilePath, { responseType: 'stream' })).data,
                        },
                    });
                    console.log('yes')
                    return res.status(200).json({ message: 'Video uploaded', response2 });
                }
            } catch (error) {
                return res.status(500).json({ message: 'Internal Error', err: error })
            }

        });
    } catch (error) {
        console.error('Error uploading video:', error);
        res.status(500).json({ error: 'Error uploading video' });
    }
};
