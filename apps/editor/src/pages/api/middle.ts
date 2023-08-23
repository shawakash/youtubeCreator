import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';

const middle = async (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
    const { EDITOR_SECRET } = process.env;
    if (!EDITOR_SECRET || EDITOR_SECRET.length == 0) {
        throw new Error('Please define the `EDITOR_SECRET` environment variable');
      }
    const authHeader = req.headers.authorization;
    if (authHeader) {
        let token = authHeader;
        if(authHeader.startsWith('Bearer')) {
            token = authHeader.split(' ')[1];
        }
        jwt.verify(token, EDITOR_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Cant verify your token', isAuth: false });
            }
            if(!decoded || typeof decoded === 'string' || !decoded._id) {
                return res.status(403).json({ message: "Forbidden!", isAuth: false });
            }
            req.headers['_id'] = decoded._id;
            next();
        });
    } else {
        console.log('kksd')
        res.status(403).json({ message: 'Unauthorized', isAuth: false });
    }
}

export default middle;