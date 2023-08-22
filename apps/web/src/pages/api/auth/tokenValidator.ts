import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import middle from './middle';
import { Creator, dbConnect } from 'db';
import { OAuth2Client } from 'google-auth-library';

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
            if(!accessToken || !refreshToken || accessToken.length === 0 || refreshToken.length === 0) {
                return res.status(400).json({ message: 'Please Get Auth First' });
            }

            // const oauth2Client = new OAuth2Client(
            //     CLIENT_ID,
            //     CLIENT_SECRET,
            //     REDIRECT_URI
            // );
            // oauth2Client.setCredentials({
            //     access_token: accessToken as string,
            //     refresh_token: refreshToken as string,
            // });

            const response = await axios.post(OUTH_TOKEN_VALID_URL, {
                access_token: accessToken,
                refresh_token: refreshToken,
            });
            const isValid = response.status === 200 && response.data.aud === CLIENT_ID;
            // Assuming the validation endpoint returns relevant data
            // const isValid = response.data.isValid; // Adjust based on the response format
            // console.log(response);
            if (!isValid) {
                // const tokenResponse = await oauth2Client.refreshAccessToken();
                // const newAccessToken = tokenResponse.credentials.access_token;
                // oauth2Client.setCredentials({
                //     access_token: newAccessToken,
                //     refresh_token: refreshToken as string,
                // });
                // creator.accessToken = newAccessToken;
                // accessToken = newAccessToken;
                // await creator.save();
                // res.redirect('/auth');
                return res.status(401).json({ message: 'Token expired' });
            }
            req.headers['accessToken'] = accessToken;
            req.headers['refreshToken'] = refreshToken;
            next();
        })
    } catch (error) {
        console.log('Foo error')
        console.error('Error validating tokens:', error);
        return false;
    }
}

export default tokenValidator;
