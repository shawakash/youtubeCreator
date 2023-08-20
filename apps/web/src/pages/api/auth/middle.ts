import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';

const middle = async (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
    const { CREATOR_SECRET } = process.env;
    if (!CREATOR_SECRET || CREATOR_SECRET.length == 0) {
        throw new Error('Please define the `CREATOR_SECRET` environment variable');
      }
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    if (authHeader) {
        let token = authHeader;
        if(authHeader.startsWith('Bearer')) {
            token = authHeader.split(' ')[1];
        }
        jwt.verify(token, CREATOR_SECRET, (err, decoded) => {
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
        res.status(401).json({ message: 'Unauthorized', isAuth: false });
    }
}

export default middle;