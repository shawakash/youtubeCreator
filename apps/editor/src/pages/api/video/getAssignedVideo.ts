import { EditedVideo, Leger, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../middle";
import axios from "axios";
import { legerType } from "zodTypes";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'GET') {
        return res.status(400).json({ message: 'Its a get request' });
    }
    try {
        const { BASEURL } = process.env;
        await dbConnect();
        middle(req, res, async () => {
            const { _id, videoid } = req.headers;
            const assignedVideo = await Leger.findOne({ rawVideo: videoid, editor: _id  }).populate(
                {
                    path: 'rawVideo', populate: [
                        { path: 'creator', select: ['username', 'name', 'email', '_id'] },
                        { path: 'editor', select: ['username', 'name', 'email', '_id'] }
                    ]
                }
            );
            let video = assignedVideo.rawVideo;

            if (!assignedVideo) {
                return res.status(201).json({ message: 'No Videos Assigned', video: [] });
            }

            if (assignedVideo.rawVideo.isUploaded || assignedVideo.rawVideo.isEdited) {
                const editedVideo = await EditedVideo.findOne({ videoKey: assignedVideo.rawVideo.videoKey, editor: _id }).populate([

                    { path: 'creator', select: ['username', 'name', 'email', '_id'] },
                    { path: 'editor', select: ['username', 'name', 'email', '_id'] }

                ]);
                video = editedVideo;

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

            } catch (error) {
                video.url = '';
                console.log(error);
            }

            return res.status(200).json({ message: 'Yeah', video });

        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ messsage: 'Internal Error', err: error });
    }
}