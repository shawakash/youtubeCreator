import { Creator, EditedVideo, RawVideo, dbConnect } from "db";
import middle from "../auth/middle";
import axios from "axios";
import { EditVideoType, RawVideoType } from "zodTypes";

export default async function handler(req, res) {
    if (req.method != 'GET') {
        return res.status(400).json({ message: 'Its a Get request' });
    }
    try {
        await dbConnect();

        const { BASEURL } = process.env;

        middle(req, res, async () => {
            const { _id, type } = req.headers;
            const creator = await Creator.findById(_id).exec();
            if (!creator) {
                console.log('Creator not found');
                return;
            }
            let videos: RawVideoType[] | EditVideoType[];
            if (type === 'raw') {
                videos = await RawVideo.find({
                    _id: { $in: creator.rawVideos },
                })
                    .populate('editor')
                    .populate('creator');

            } else if (type === 'edit') {
                videos = await EditedVideo.find({
                    _id: { $in: creator.editedVideos },
                })
                    .populate('editor')
                    .populate('creator');
            }
            if (videos.length == 0) {
                return res.status(200).json({ message: 'Please Upload Some Videos', videos: videos });
            }

            try {
                const response = await axios({
                    baseURL: BASEURL,
                    url: '/video/signedUrls',
                    method: 'POST',
                    data: videos,
                    headers: {
                        'Authorization': req.headers.authorization,
                        'Content-Type': 'application/json'
                    }
                });

                return res.status(200).json({ videos: response.data.videos });

            } catch (error) {
                return res.status(500).json({ message: 'SignedUrls is not fetched' })
            }

    });
} catch (error) {
    return res.status(500).json({ message: 'Internal error', err: error })
}
}