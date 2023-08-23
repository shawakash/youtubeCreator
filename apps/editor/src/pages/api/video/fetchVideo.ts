import { EditedVideo, Leger, RawVideo, dbConnect } from "db";
import middle from "../middle";
import { NextApiRequest, NextApiResponse } from "next";
import { EditVideoType, RawVideoType, fetchVideoBody } from "zodTypes";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'POST') {
        return res.status(400).json({ message: 'Its a get request' });
    }
    try {
        await dbConnect();

        const { BASEURL } = process.env;
        if(!BASEURL || BASEURL.length == 0) {
            throw new Error('Add BASEURL to env');
        }

        middle(req, res, async () => {
            const { _id } = req.headers;
            const parsedInput = fetchVideoBody.safeParse(req.body);
            if (!parsedInput.success) {
                return res.status(400).json({ message: 'Validation Error', err: parsedInput });
            }
            const { videoId, type } = parsedInput.data;
            let video;
            let hasApplied = false;
            if (type === 'raw') {
                video = await RawVideo.findById(videoId).populate([{ path: 'creator' }, { path: 'editor' }]);
                const leger = await Leger.findOne({ rawVideo: videoId, editors: { $in: [_id] } });
                if(leger) {
                    hasApplied = true;
                }
            } else if (type === 'edit') {
                video = await EditedVideo.findById(videoId);
            }
            if (!video) {
                return res.status(404).json({ message: "Video Not Found" });
            }

            try {
                const response = await axios({
                    baseURL: BASEURL,
                    url: '/video/getSignedUrl',
                    method: "GET",
                    headers: {
                        'Authorization': req.headers.authorization,
                        'videofilekey': video.videoKey,
                        'bucketname': video.bucketName,
                        'expiresin': 3600 * 24 * 4,
                        'Content-Type': 'application/json'
                    }
                });
                const url = response.data.signedUrl;
                video.url = url;
                return res.status(200).json({ message: 'Found', video, hasApplied });
                
            } catch (error) {
                video['url'] = '';
                console.log(error)
            }


        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Error', err: error })
    }
}