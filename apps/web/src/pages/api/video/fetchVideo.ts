import { Creator, EditedVideo, Leger, RawVideo, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../auth/middle";
import { fetchVideoBody } from "zodTypes";
import axios from "axios";

const { BASEURL } = process.env;

const getUrl = async (bucketname: string, videofilekey: string, token: string) => {
    const response = await axios({
        baseURL: BASEURL,
        url: '/video/getSignedUrl',
        method: 'GET',
        headers: {
            'Authorization': token,
            'videofilekey': videofilekey,
            'bucketname': bucketname,
            'expiresin': 3600 * 24 * 4,
            'Content-Type': 'application/json'
        }
    });
    return response.data.signedUrl;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'POST') {
        return res.status(400).json({ message: 'Its a Post Request' });
    }
    try {


        await dbConnect();
        middle(req, res, async () => {
            const parsedInput = fetchVideoBody.safeParse(req.body);
            if (!parsedInput.success) {
                return res.status(400).json({ message: 'Validation Error', err: parsedInput });
            }
            const { videoId, type } = parsedInput.data;
            const { _id } = req.headers;

            if (type === 'raw') {
                const leger = await Leger.findOne({ rawVideo: videoId }).populate([
                    { path: 'creator', select: ['name', 'username', 'email', '_id'] },
                    { path: 'rawVideo', populate: { path: 'editor', select: ['name', 'username', 'email', '_id'] }},
                    { path: 'editors', select: ['name', 'username', 'email', '_id'] },
                    { path: 'editor', select: ['name', 'username', 'email', '_id'] }]);

                if (leger) {
                   console.log(leger.editors)
                    leger.rawVideo.url = await getUrl(leger.rawVideo.bucketName, leger.rawVideo.videoKey, req.headers.authorization);
                    return res.status(200).json({ message: 'Found', video: leger });
                }
                const video = await RawVideo.findById(videoId).populate([
                    { path: 'creator', select: ['name', 'username', 'email', '_id'] },
                    { path: 'editor', select: ['name', 'username', 'email', '_id'] }]);
                if (!video) {
                    return res.status(404).json({ message: 'Invalid Video Id' });
                }
                console.log('Hello')
                video.url = await getUrl(video.bucketName, video.videoKey, req.headers.authorization);
                let dummyLeger = { rawVideo: video, editor: video.editor, editors: [], creator: video.creator };
                return res.status(200).json({ message: 'Found', video: dummyLeger });


            } if (type === 'edit') {
                const video = await EditedVideo.findById(videoId).populate([{ path: 'creator', select: ['name', 'usename', 'email', '_id'] }, { path: 'editor', select: ['name', 'username', 'email', '_id'] }]);
                if (!video) {
                    return res.status(404).json({ message: 'Invalid Video Id' });
                }
                video.url = await getUrl(video.bucketName, video.videoKey, req.headers.authorization);
                return res.status(200).json({ message: 'Found', video });
            }

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Error', err: error })
    }
}