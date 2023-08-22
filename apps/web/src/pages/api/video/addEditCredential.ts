import { Creator, EditedVideo, RawVideo, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../auth/middle";
import { editVideo, rawVideo } from "zodTypes";
import axios from "axios";

const { BASEURL } = process.env;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'POST') {
        return res.status(400).json({ message: 'Its a post request' });
    }
    try {
        await dbConnect();
        middle(req, res, async () => {
            const parsedInput = editVideo.safeParse(req.body);
            if(!parsedInput.success) {
                return res.status(400).json({ message: 'Validation Error', err: parsedInput })
            }
            const { _id } = req.headers;

            const creator = await Creator.findById(_id);

            const edit = new EditedVideo({...parsedInput.data, creator: _id});
            await edit.save();
            creator.editedVideos.push(edit._id);
            await creator.save();

            return res.status(200).json({ message: 'Edit Video Uploaded Successfully to server'}); 

        })
    } catch (error) {
        try {
            axios({
                baseURL: BASEURL,
                url: '/video/deleteVideo',
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": req.headers.authorization,
                    "type": "edit"
                },
                data: {
                    "videoKey": req.body.videoKey,
                    "bucketName": req.body.bucketName
                }
            })
        } catch (error) {
            return res.status(500).json({ message: 'Extra Video in edit bucket', err: error })
        }
        return res.status(500).json({ message: 'Internal Error', err: error })
    }
}