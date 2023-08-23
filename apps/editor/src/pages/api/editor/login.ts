import { Editor, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import { LoginValid } from "zodTypes";
import jwt from 'jsonwebtoken';
import { serialize } from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'POST') {
        return res.status(400).json({ message: 'Its a post request' });
    }
    
    try {
        await dbConnect();

        const { EDITOR_SECRET } = process.env;
        if (!EDITOR_SECRET || EDITOR_SECRET.length == 0) {
            throw new Error('Please define the EDITOR_SECRET environment variable');
        }

        const parsedInput = LoginValid.safeParse(req.body);
        if(!parsedInput.success) {
            return res.status(400).json({ message: 'Validator Error' });
        }
        const { username, password } = parsedInput.data;
        const isEditor = await Editor.findOne({ username });
        if(!isEditor) {
            return res.status(404).json({ message: "Please Signup" });
        }
        if(isEditor.password !== password) {
            return res.status(400).json({ message: 'Wrong password :(' });
        }
        const token = jwt.sign({ _id: isEditor._id }, EDITOR_SECRET, { expiresIn: '1h' });

        const cookieSerialized = serialize('editorToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: '/',
          });
        
        res.setHeader('Set-Cookie', cookieSerialized);

        return res.status(200).json({ message: 'LoggedIn Succesfully', token })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}