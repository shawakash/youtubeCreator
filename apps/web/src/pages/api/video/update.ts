import { EditedVideo, RawVideo, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../auth/middle";
import { UpdateVideoType } from "zodTypes";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'PUT') {
        return res.status(400).json({ message: 'Its a Put Request' });
    }
    try {
        await dbConnect();
        middle(req, res, async () => {
            const { videokey, _id, bucketname, type } = req.headers;
            const parsedInput: UpdateVideoType = req.body;
            let video;

            if(type == 'raw') {
                video = await RawVideo.findOneAndUpdate({ videoKey: videokey }, { ...parsedInput });
            } else if(type == 'edit') {
                video = await EditedVideo.findOneAndUpdate({ videoKey: videokey }, { ...parsedInput });
            }
            if(!video) {
                return res.status(404).json({ message: 'Not Found' });
            }
            return res.status(200).json({ message: 'Updated Successfully' });
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}