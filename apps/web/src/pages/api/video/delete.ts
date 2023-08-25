import { EditedVideo, RawVideo, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../auth/middle";
import { EditVideoType, RawVideoType } from "zodTypes";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'DELETE') {
        return res.status(400).json({ message: 'Its a delete request' });
    }
    try {

        const { BASEURL } = process.env;

        await dbConnect();
        middle(req, res, async () => {
            const { _id, videokey, type, bucketname } = req.headers;

            let video: RawVideoType | EditVideoType;
            if(type === 'raw') {
                video = await RawVideo.findOneAndDelete({ videoKey: videokey });
            } else if(type === 'edit') {
                video = await EditedVideo.findOneAndDelete({ videoKey: videokey });
            }
            console.log(video)
            const response = await axios({
                baseURL: BASEURL,
                url: '/video/deleteVideo',
                method: 'DELETE',
                headers: {
                    'Authorization': req.headers.authorization,
                    'Content-Type': 'application/json'
                },
                data: { 
                    videokey: videokey,
                    bucketname: bucketname
                 }
            });

            return res.status(200).json({ message: 'Video Deleted' });

        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Error', err: error })
    }
}