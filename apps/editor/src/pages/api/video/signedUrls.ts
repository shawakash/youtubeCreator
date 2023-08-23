import { dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import { RawVideoType } from "zodTypes";
import axios from "axios";
import middle from "../middle";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'POST') {
        return res.status(400).json({ message: 'Its a Post request' });
    }

    try {

        const { BASEURL } = process.env;

        await dbConnect();
        middle(req, res, async () => {
            const expiresin = 3600 * 24 * 4;
            const videos = req.body;
        for(let i of videos) {
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
            return res.status(200).json({ message: 'Signed Urls', videos })
        })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', err: error })
    }
}