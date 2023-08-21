import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import middle from './middle';
import { Creator, dbConnect } from 'db';

const tokenValidator = async (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
    if(req.method != 'GET') {
        return res.status(400).json({ message: 'Its  Get request' });
    }
    await dbConnect();
  try {

    middle(req, res, async () => {
        const {_id} = req.headers;
        const { CLIENT_ID, OUTH_TOKEN_VALID_URL } = process.env;
        if (!CLIENT_ID || CLIENT_ID.length == 0) {
            throw new Error('Please define the CREATOR_SECRET environment variable');
        }

        if (!OUTH_TOKEN_VALID_URL || OUTH_TOKEN_VALID_URL.length == 0) {
            throw new Error('Please define the OUTH_TOKEN_VALID_URL environment variable');
        }

        console.log('Hello')

        const creator = await Creator.findById(_id);

        const {accessToken, refreshToken} = creator;

        const response = await axios.post(OUTH_TOKEN_VALID_URL, {
            access_token: accessToken,
            refresh_token: refreshToken,
        });
        const isValid = response.status === 200 && response.data.aud === CLIENT_ID;
        // Assuming the validation endpoint returns relevant data
        // const isValid = response.data.isValid; // Adjust based on the response format
        // console.log(response);
        if(!isValid) {
            return res.status(400).json({ message: 'Token expired' });
        }
        console.log(isValid)
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
