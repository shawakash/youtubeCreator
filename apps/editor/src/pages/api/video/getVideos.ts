import { Creator, EditedVideo, Editor, RawVideo, dbConnect } from "db";
import axios from "axios";
import middle from "../middle";

export default async function handler(req, res) {
    if(req.method != 'GET') {
        return res.status(400).json({ message: 'Its a Get request' });
    }
    try {
        await dbConnect();

        const { BASEURL } = process.env;
        if (!BASEURL || BASEURL.length == 0) {
            throw new Error('Please define the `BASEURL` environment variable');
          }

        middle(req, res, async () => {
            const { _id, type } = req.headers;
            if(type === 'raw') {
                const videos1 = await RawVideo.find().populate('creator').populate('editor');
                
                try {
                    const response = await axios({
                        baseURL: BASEURL,
                        url: '/video/signedUrls',
                        method: 'POST',
                        data: videos1,
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
                const editor = await Editor.findById(_id).exec();
                
                const editedVideos = await EditedVideo.find({
                    _id: { $in: editor.editedVideos },
                })
                    .populate('editor')
                    .populate('creator');

                if(editedVideos.length == 0) {
                    return res.status(200).json({ message: 'Start by taking raw videos', edit: editor.editedVideos });
                }
                try {
                    const response = await axios({
                        baseURL: BASEURL,
                        url: '/video/signedUrls',
                        method: 'POST',
                        data: editedVideos,
                        headers: {
                            'Authorization': req.headers.authorization,
                            'Content-Type': 'application/json'
                        }
                    });
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