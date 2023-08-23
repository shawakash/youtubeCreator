import { NextApiRequest, NextApiResponse } from "next";
import { Editor, dbConnect } from "db"
import { editorInputValid } from "zodTypes";
import jwt from 'jsonwebtoken';
import { serialize } from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'POST') {
        return res.status(400).json({ message: 'Its a post request' });
    }
    await dbConnect();
    try {

        const { EDITOR_SECRET } = process.env;
        if (!EDITOR_SECRET || EDITOR_SECRET.length == 0) {
            throw new Error('Please define the EDITOR_SECRET environment variable');
        }

        const parsedInput = editorInputValid.safeParse(req.body);
        if(!parsedInput.success) {
            return res.status(400).json({message: 'validation Error', err: parsedInput.success});
        }
        const { username, email } = parsedInput.data;
        const isEditor1 = await Editor.findOne({ username });
        if(isEditor1) {
            return res.status(400).json({ message: 'Username Already Exist' });
        }
        const isEditor2 = await Editor.findOne({ email });
        if(isEditor2) {
            return res.status(400).json({ message: 'Email Already Exist' });
        }
        const editor = new Editor(parsedInput.data);
        await editor.save();
        const token = jwt.sign({ _id: editor._id }, EDITOR_SECRET, { expiresIn: '1h' });

        const cookieSerialized = serialize('editorToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: '/',
          });
        
        res.setHeader('Set-Cookie', cookieSerialized);

        return res.status(200).json({ message: 'Account Created Succesfully', token, _id: editor._id })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error', err: error })
    }
}