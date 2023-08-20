import { Creator, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import { LoginValid } from "zodTypes";
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

        const parsedInput = LoginValid.safeParse(req.body);
        if(!parsedInput.success) {
            return res.status(400).json({ message: 'Validator Error' });
        }
        const { username, password } = parsedInput.data;
        const isCreator = await Creator.findOne({ username });
        if(!isCreator) {
            return res.status(404).json({ message: "Please Signup" });
        }
        if(isCreator.password !== password) {
            return res.status(400).json({ message: 'Wrong password :(' });
        }
        const token = jwt.sign({ _id: isCreator._id }, CREATOR_SECRET, { expiresIn: '1h' });

        const cookieSerialized = serialize('creatorToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: '/',
          });
        
        res.setHeader('Set-Cookie', cookieSerialized);

        return res.status(200).json({ message: 'LoggedIn Created Succesfully', token })

    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}