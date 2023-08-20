import { google } from 'googleapis';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import tokenValidator from '../auth/tokenValidator';
import fs from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

        tokenValidator(req, res, async () => {

            const { accessToken, refreshToken } = req.headers; // Get the tokens from the request body

            const oauth2Client = new google.auth.OAuth2();
            oauth2Client.setCredentials({
                access_token: accessToken as string,
                refresh_token: refreshToken as string,
            });


            const youtube = google.youtube('v3');

            const videoDetails = {
                snippet: {
                    title: 'Through Api',
                    description: 'Description of the video',
                },
                status: {
                    privacyStatus: 'private', // Set to 'public' for a public video
                },
            };

            const videoFilePath = 'public/videos/BigBuckBunny.mp4'; // Path to the video file on your server

            const response = await youtube.videos.insert({
                auth: oauth2Client,
                part: ['snippet,status'],
                requestBody: videoDetails,
                media: {
                    body: fs.createReadStream(videoFilePath),
                },
            });

            return res.status(200).json({ message: 'Video uploaded', response });
        });
    } catch (error) {
        console.error('Error uploading video:', error);
        res.status(500).json({ error: 'Error uploading video' });
    }
};
