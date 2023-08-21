import { RawVideo, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import { rawVideo } from "zodTypes";
import middle from "../auth/middle";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method != 'POST') {
        return res.status(400).json({ message: 'Its a post request' });
    }
    try {
        await dbConnect();
        middle(req, res,  async () => {
            const { _id } = req.headers;
            const parsedInput = rawVideo.safeParse(req.body);
            if(!parsedInput.success) {
                return res.status(400).json({ messsage: 'Validation Error', err: parsedInput });
            };

            const raw = new RawVideo({...req.body, creator: _id});
            await raw.save();
            
            return res.status(200).json({ message: 'Video Uploaded, waiting to get edited', _id: raw._id });

        })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', err: error })
    }
}