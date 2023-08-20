import { dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from './middle';
import { middleware as corsMiddleware } from '../../middleware';
import { OutgoingHttpHeaders } from "http";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const corsResponse = await corsMiddleware();

  if (corsResponse) {
    // Apply the CORS headers to the response
    
    const corsHeaders: OutgoingHttpHeaders = {};
    corsResponse.headers.forEach((value, name) => {
      corsHeaders[name] = value;
    });
    res.writeHead(corsResponse.status, corsHeaders);
  }
    
    if (req.method != 'GET') {
        return res.status(400).json({ message: 'Its a get Request' });
    }

    await dbConnect();
    try {
        const { CLIENT_ID, REDIRECT_URI } = process.env;
        if (!CLIENT_ID || CLIENT_ID.length == 0 || !REDIRECT_URI || REDIRECT_URI.length == 0) {
            throw new Error('Please define the `CLIENT_ID` and `REDIRECT_URI` environment variable');
            // return res.status(400).json({ message: 'No client id and redirect uri was provided' })
        }
            
            const clientId = CLIENT_ID;
            const redirectUri = REDIRECT_URI; // Authorized Redirect URI
            const scope = 'https://www.googleapis.com/auth/youtube.upload';

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
            
            res.redirect(authUrl);
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Response', err: error });
    }
}