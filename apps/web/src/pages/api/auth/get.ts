import { dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from './middle';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    if (req.method != 'GET') {
        return res.status(400).json({ message: 'Its a get Request' });
    }

    await dbConnect();
    try {
        middle(req, res, async () => {
            const { _id } = req.headers;
            console.log(_id)
            const { CLIENT_ID, REDIRECT_URI } = process.env;
            if (!CLIENT_ID || CLIENT_ID.length == 0 || !REDIRECT_URI || REDIRECT_URI.length == 0) {
                throw new Error('Please define the `CLIENT_ID` and `REDIRECT_URI` environment variable');
                // return res.status(400).json({ message: 'No client id and redirect uri was provided' })
            }
            const clientId = CLIENT_ID;
            const redirectUri = REDIRECT_URI; // Authorized Redirect URI
            const scope = 'https://www.googleapis.com/auth/youtube.upload';
            
            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&state=${_id}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code&access_type=offline&prompt=consent`;
            
            // res.redirect(authUrl);
            console.log(authUrl);
            return res.status(200).json({ authUrl })
        })
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Response', err: error });
    }
}