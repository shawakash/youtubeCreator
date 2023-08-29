import { Creator, EditedVideo, Editor, Leger, RawVideo, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import { editVideo, rawVideo } from "zodTypes";
import axios from "axios";
import middle from "../middle";

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
            console.log(parsedInput)
            console.log('from here')
            const { _id } = req.headers;
            const { videoKey } = parsedInput.data;

            const editor = await Editor.findById(_id).select(['username', 'email', 'name', '_id', 'editedVideos']);
            const rawVideo = await RawVideo.findOne({ videoKey });
            console.log(videoKey);
            console.log(rawVideo)
            if(!rawVideo) {
                return res.status(404).json({ message: 'Video Not found' });
            }
            const leger = await Leger.findOne({ rawVideo: rawVideo._id, editor: _id });

            if(!leger) {
                return res.status(403).json({ message: 'Unauthorized Video Upload Attempt' })
            }

            const creator = await Creator.findById(rawVideo.creator._id).select(['username', 'name', '_id', 'email', 'editedVideos']);
            const intialVideo = new EditedVideo({...parsedInput.data, editor: _id, creator: creator._id});
            const video = (await intialVideo.save()).populate([
                { path: 'creator', select: ['username', 'name', 'email', '_id'] },
                { path: 'editor', select: ['username', 'name', 'email', '_id'] },
            ]);
            editor.editedVideos.push(video._id);
            creator.editedVideos.push(video._id);
            await editor.save();
            await creator.save();

            const response = await axios({
                baseURL: BASEURL,
                url: '/video/getSignedUrl',
                method: 'GET',
                headers: {
                    'Authorization': req.headers.authorization,
                    'Content-Type': 'application/json',
                    'videofilekey': video.videoKey,
                    bucketname: video.bucketName,
                    expiresIn: 3600 * 24 * 4
                }
            });

            video.url = response.data.signedUrl;

            return res.status(200).json({ message: 'Edit Video Uploaded Successfully to server', creator, video, editor: editor}); 

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