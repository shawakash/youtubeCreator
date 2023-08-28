import { Leger, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import middle from "../middle";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'GET') {
        return res.status(400).json({ message: 'Its a Get Request' });
    }
    try {
        const { BASEURL } = process.env;
        await dbConnect();
        middle(req, res, async () => {
            const { _id } = req.headers;

            const assignedVideos = await Leger.find({ editor: _id }).populate(
                {
                    path: 'rawVideo', populate: [
                        { path: 'creator', select: ['username', 'name', 'email', '_id'] },
                        { path: 'editor', select: ['username', 'name', 'email', '_id'] }
                    ]
                }
            );

            if (!assignedVideos) {
                return res.status(201).json({ message: 'No Videos Assigned', video: [] });
            }

            for (let i of assignedVideos) {
                try {
                    const response = await axios({
                        baseURL: BASEURL,
                        url: '/video/getSignedUrl',
                        method: "GET",
                        headers: {
                            'Authorization': req.headers.authorization,
                            'videofilekey': i.rawVideo.videoKey,
                            'bucketname': i.rawVideo.bucketName,
                            'expiresin': 3600 * 24 * 4,
                            'Content-Type': 'application/json'
                        }
                    });
                    const url = response.data.signedUrl;
                    i.rawVideo.url = url;

                } catch (error) {
                    i.rawVideo.url = '';
                    console.log(error);
                }
            }


            return res.status(200).json({ message: 'Yeah', video: assignedVideos });

        })

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Internal Error', err: error });
    }
}