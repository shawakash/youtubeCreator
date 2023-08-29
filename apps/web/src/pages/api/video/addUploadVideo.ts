import { EditedVideo, Leger, RawVideo, UploadVideo, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../auth/middle";
import { uploadVideoType } from "zodTypes";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'POST') {
        return res.status(400).json({ message: 'Its a Post Request' });
    }
    try {
        
        await dbConnect();
        middle(req, res, async () => {
            const { _id, uploadId } = req.headers;
            
            const parsedInput = uploadVideoType.safeParse(req.body);
            if(!parsedInput.success) {
                return res.status(400).json({ message: 'Validation Error', err: parsedInput });
            }

            const { 
                title,
                description,
                privacy,
                publishAt,
                category,
                videoKey,
                bucketName,
                thumbnail,
                tags
            } = parsedInput.data;

            const rawVideo = await RawVideo.findOne({ videoKey });
            const editVideo = await EditedVideo.findOne({ videoKey });

            rawVideo.title = title;
            rawVideo.description = description;
            rawVideo.thumbnail = thumbnail;
            rawVideo.isUploaded = true;
            editVideo.title = title;
            editVideo.description = description;
            editVideo.isUploaded = true;

            const newUploadVideo = new UploadVideo({...parsedInput.data, uploadId });
            await newUploadVideo.save();
            
            return res.status(200).json({ message: 'Created', video: newUploadVideo });
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Error', err: error });
    }
}