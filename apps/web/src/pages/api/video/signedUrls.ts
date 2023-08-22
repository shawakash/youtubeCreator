import { dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../auth/middle";
import { RawVideoType } from "zodTypes";
import axios from "axios";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'POST') {
        return res.status(400).json({ message: 'Its a Post request' });
    }

    try {

        const { BASEURL } = process.env;

        await dbConnect();
        middle(req, res, async () => {
            const expiresin = 3600 * 24 * 4;
            const rawVideos = req.body;
            for(let i of rawVideos) {
                try {
                    const response = await axios({
                        baseURL: BASEURL,
                        url: '/video/getSignedUrl',
                        method: "GET",
                        headers: {
                            'Authorization': req.headers.authorization,
                            'videofilekey': i.videoKey,
                            'bucketname': i.bucketName,
                            'expiresin': expiresin,
                            'Content-Type': 'application/json'
                        }
                    });
                    const url = response.data.signedUrl;
                    i.url = url;
                    
                } catch (error) {
                    i.url = '';
                    console.log(error)
                }
            }
            return res.status(200).json({ message: 'Signed Urls', rawVideos })
        })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', err: error })
    }
}