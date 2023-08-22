import { Creator, RawVideo, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../auth/middle";
import { rawVideo } from "zodTypes";
import axios from "axios";

const { BASEURL } = process.env;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'POST') {
        return res.status(400).json({ message: 'Its a post request' });
    }
    try {
        await dbConnect();
        middle(req, res, async () => {
            const parsedInput = rawVideo.safeParse(req.body);
            if(!parsedInput.success) {
                return res.status(400).json({ message: 'Validation Error', err: parsedInput })
            }
            const { _id } = req.headers;

            const creator = await Creator.findById(_id);

            const raw = new RawVideo({...parsedInput.data, creator: _id});
            await raw.save();
            creator.rawVideos.push(raw._id);
            await creator.save();

            return res.status(200).json({ message: 'Raw Video Uploaded Successfully'}); 

        })
    } catch (error) {
        try {
            axios({
                baseURL: BASEURL,
                url: '/video/deleteRawVideo',
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": req.headers.authorization,
                },
                data: {
                    "videoKey": req.body.videoKey,
                    "bucketName": req.body.bucketName
                }
            })
        } catch (error) {
            
        }
        return res.status(500).json({ message: 'Internal Error', err: error })
    }
}