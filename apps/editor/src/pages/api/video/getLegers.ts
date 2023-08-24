import { Leger, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../middle";
import axios from "axios";
import { legerType } from "zodTypes";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'GET') {
        return res.status(400).json({ message:  'Its a Get Request' });
    }
    try {
        await dbConnect();

        const { BASEURL } = process.env;

        middle(req, res, async () => {

            const { _id } = req.headers;
            const legers = await Leger.find({ editors: { $in: [_id] } }).populate([{ path: 'creator', select: ['username', 'name', 'email' ] }, { path: 'editor' }, { path: 'rawVideo' }]).exec();
            
            if(!legers) {
                return res.status(200).json({ message: 'Start Taking Project', legers: [] });
            }

            for(let i of legers) {
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

            
            
            return res.status(200).json({ message: 'Got', legers });

        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', err: error });
    }
}