import { Creator, dbConnect } from "db";
import middle from "../auth/middle";
import axios from "axios";

export default async function handler(req, res) {
    if(req.method != 'GET') {
        return res.status(400).json({ message: 'Its a Get request' });
    }
    try {
        await dbConnect();

        const { BASEURL } = process.env;

        middle(req, res, async () => {
            const { _id, type } = req.headers;
            if(type === 'raw') {
                const creator = await Creator.findById(_id).populate('rawVideos');
                if(creator.rawVideos.length == 0) {
                    return res.status(200).json({ message: 'Please Upload Some Videos', raw: creator.rawVideos });
                }
    
                try {
                    const response = await axios({
                        baseURL: BASEURL,
                        url: '/video/signedUrls',
                        method: 'POST',
                        data: creator.rawVideos,
                        headers: {
                            'Authorization': req.headers.authorization,
                            'Content-Type': 'application/json'
                        }
                    });
        
                    return res.status(200).json({ raw: response.data.videos });
                    
                } catch (error) {
                    return res.status(500).json({ message: 'SignedUrls is not fetched' })
                }

            } if(type === 'edit') {
                const creator = await Creator.findById(_id).populate('editedVideos');
                if(creator.editedVideos.length == 0) {
                    return res.status(200).json({ message: 'No Edit Videos', edit: creator.editedVideos });
                }
                console.log(creator.editedVideos)
                try {
                    const response = await axios({
                        baseURL: BASEURL,
                        url: '/video/signedUrls',
                        method: 'POST',
                        data: creator.editedVideos,
                        headers: {
                            'Authorization': req.headers.authorization,
                            'Content-Type': 'application/json'
                        }
                    });
                    // console.log( response.data.editedVideos)
                    return res.status(200).json({ edit: response.data.videos });
                    
                } catch (error) {
                    return res.status(500).json({ message: 'SignedUrls is not fetched' })
                }

            }

        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal error', err: error})
    }
}