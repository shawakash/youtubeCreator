import { Creator, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "./middle";
import axios from "axios";
import { CreatorType } from "zodTypes";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    if (req.method != 'GET') {
        return res.status(400).json({ message: 'Fetch request method error' });
    }
    await dbConnect();
    try {
        const { CLIENT_ID, REDIRECT_URI, CLIENT_SECRET } = process.env;
        if (!CLIENT_ID || CLIENT_ID.length == 0 || !REDIRECT_URI || REDIRECT_URI.length == 0 || !CLIENT_SECRET || CLIENT_SECRET.length == 0) {
            throw new Error('Please define the `CLIENT_ID`, `REDIRECT_URI`, `CLIENT_SECRET` environment variable');
            // return res.status(400).json({ message: 'No client id and redirect uri was provided' })
        }
            const { state } = req.query;
            const clientId = CLIENT_ID;
            const clientSecret = CLIENT_SECRET;
            const redirectUri = REDIRECT_URI; // Should match the authorized redirect URI in your client settings
            const authorizationCode = req.query.code;

            const tokenUrl = 'https://oauth2.googleapis.com/token';

            const data = {
                code: authorizationCode as string,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code',
            };
            try {
                const response = await axios.post(tokenUrl, new URLSearchParams(data));
                const accessToken = response.data.access_token;
                const refreshToken = response.data.refresh_token;

                // Store tokens securely for future API requests
                // You can implement your storage mechanism here
                // if(!accessToken || !refreshToken) {
                //     return res.status(400).json({ message: 'Please Try Again' });
                // }
                const creator = await Creator.findById(state);
                
                creator.refreshToken = refreshToken;
                creator.accessToken = accessToken;
                creator.hasAllowed = true;
                await creator.save();

                res.redirect('/');
                return res.status(200).json({message: 'Authentication successful! You can close this window.', accessToken, refreshToken});
            } catch (error) {
                console.error('Error exchanging authorization code for tokens:', error);
                res.status(500).send('Error during authentication');
            }
        

    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Response', err: error });
    }
}

