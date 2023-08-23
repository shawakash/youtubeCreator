import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'GET') {
        return res.status(400).json({ message:  'Its a Get Request' });
    }
    try {
        
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', err: error });
    }
}