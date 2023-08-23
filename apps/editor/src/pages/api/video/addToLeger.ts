import { dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../middle";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'PUT') {
        return res.status(400).json({ message: 'Its a Put request' });
    }
    try {
        await dbConnect();

        middle(req, res, async () => {
            
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Error', err: error })
    }
}