import { NextApiRequest, NextApiResponse } from "next";
import { Creator, dbConnect } from "db"
import { creatorInputValid } from "zodTypes";
import jwt from 'jsonwebtoken';
import { serialize } from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'POST') {
        return res.status(400).json({ message: 'Its a post request' });
    }
    await dbConnect();
    try {

        const { CREATOR_SECRET } = process.env;
        if (!CREATOR_SECRET || CREATOR_SECRET.length == 0) {
            throw new Error('Please define the CREATOR_SECRET environment variable');
        }

        const parsedInput = creatorInputValid.safeParse(req.body);
        if(!parsedInput.success) {
            return res.status(400).json({message: 'validation Error', err: parsedInput.success});
        }
        const { username, email } = parsedInput.data;
        const isCreator1 = await Creator.findOne({ username });
        if(isCreator1) {
            return res.status(400).json({ message: 'Username Already Exist' });
        }
        const isCreator2 = await Creator.findOne({ email });
        if(isCreator2) {
            return res.status(400).json({ message: 'Email Already Exist' });
        }
        const creator = new Creator(parsedInput.data);
        await creator.save();
        const token = jwt.sign({ _id: creator._id }, CREATOR_SECRET, { expiresIn: '1h' });

        const cookieSerialized = serialize('creatorToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: '/',
          });
        
        res.setHeader('Set-Cookie', cookieSerialized);

        return res.status(200).json({ message: 'Account Created Succesfully', token, _id: creator._id })

    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', err: error })
    }
}