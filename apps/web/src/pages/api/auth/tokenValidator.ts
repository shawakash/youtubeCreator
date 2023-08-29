import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import middle from './middle';
import { Creator, dbConnect } from 'db';
import { google } from 'googleapis';

// Configure OAuth2 client
const { REDIRECT_URI, CLIENT_ID, CLIENT_SECRET } = process.env;
const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

const tokenValidator = async (req: NextApiRequest, res: NextApiResponse, next: () => void) => {

    await dbConnect();
    try {

        middle(req, res, async () => {
            const { _id } = req.headers;
            const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, OUTH_TOKEN_VALID_URL } = process.env;
            if (!CLIENT_ID || CLIENT_ID.length == 0 ||
                !REDIRECT_URI || REDIRECT_URI.length == 0 ||
                !CLIENT_SECRET || CLIENT_SECRET.length == 0 ||
                !OUTH_TOKEN_VALID_URL || OUTH_TOKEN_VALID_URL.length == 0) {
                throw new Error('Please define the CREATOR_SECRET, CLIENT_SECRET, REDIRECT_URI environment variable');
            }



            const creator = await Creator.findById(_id);

            let { accessToken, refreshToken } = creator;
            if (!accessToken || !refreshToken || accessToken.length === 0 || refreshToken.length === 0) {
                return res.status(400).json({ message: 'Please Get Auth First' });
            }
            
            try {
                
                
                
                const response = await axios.post(OUTH_TOKEN_VALID_URL, {
                    access_token: accessToken,
                    refresh_token: refreshToken,
                });
                // Assuming the validation endpoint returns relevant data
                // const isValid = response.data.isValid; // Adjust based on the response format

                req.headers['accessToken'] = accessToken;
                req.headers['refreshToken'] = refreshToken;
                next();
            } catch (error) {
                console.log('Token Expired');
                console.log('Fetching new token');
                try {
                    const response = await axios.post('https://oauth2.googleapis.com/token', null, {
                        params: {
                            client_id: CLIENT_ID,
                            client_secret: CLIENT_SECRET,
                            refresh_token: refreshToken,
                            grant_type: 'refresh_token'
                        }
                    });

                    const newAccessToken = response.data.access_token;
                    if (newAccessToken) {
                        accessToken = newAccessToken;
                        creator.accessToken = newAccessToken;
                        await creator.save();
                    }


                    req.headers['accessToken'] = accessToken;
                    req.headers['refreshToken'] = refreshToken;
                    next();

                } catch (error) {
                    console.error('Error fetching new access token:', error);

                    return res.status(401).json({ message: 'Token expired, Please re-auth' });
                }
                return res.status(400).json({ message: 'Token Expired, Please Reauth' })
            }
        })
    } catch (error) {
        console.log('Foo error')
        console.error('Error validating tokens:', error);
        return false;
    }
}

export default tokenValidator;
