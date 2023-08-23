import { dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'GET') {
        return res.status(400).json({ message: 'Its a Get request' });
    }
    try {

        const { EDITOR_SECRET } = process.env;
        if (!EDITOR_SECRET || EDITOR_SECRET.length == 0) {
            throw new Error('Please define the EDITOR_SECRET environment variable');
        }

        await dbConnect();
        let { authorization } = req.headers;
        if(!authorization) {
            return res.status(401).json({ message: 'Unauthorized', isValid: false });
        }
        if(authorization.startsWith('Bearer')) {
            authorization = authorization.split(' ')[1];
        }
        jwt.verify(authorization, EDITOR_SECRET, (err, decoded: {_id: string}) => {
            if(err) {
                return res.status(401).json({ message: 'Forbiden', isValid: false });
            }
            if(!decoded._id || decoded._id.length == 0) {
                return res.status(401).json({ message: 'Forbiden', isValid: false });
            }
            return res.status(200).json({ message: 'Verifed', isValid: true, _id: decoded._id });
        })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', err: error, isValid: false })
    }
}