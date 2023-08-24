import { EditedVideo, Leger, RawVideo, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../auth/middle";
import { fetchVideoBody } from "zodTypes";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'POST') {
        return res.status(400).json({ message: 'Its a Post Request' });
    }
    try {
        await dbConnect();
        middle(req, res, async () => {
            const parsedInput = fetchVideoBody.safeParse(req.body);
            if(!parsedInput.success) {
                return res.status(400).json({ message: 'Validation Error', err: parsedInput });
            }
            const { videoId, type } = parsedInput.data;
            if(type === 'raw') {
                const leger = await Leger.findOne({ rawVideo: videoId }).populate([{ path: 'creator', select: ['name', 'username', 'email'] }, { path: 'rawVideo' }, { path: 'editors', select: ['name', 'username', 'email'] }, { path: 'editor', select: ['name', 'username', 'email'] }]);
                if(leger) {
                    return res.status(200).json({ message: 'Found', video: leger.rawVideo, editors: leger.editors, editor: leger.editor });
                }
                const video = await RawVideo.findById(videoId);
                if(!video) {
                    return res.status(404).json({ message: 'Invalid Video Id' });
                }
                return res.status(200).json({ message: 'Found', video, editors: [], editor: null });
            } if(type === 'edit') {
                const video = await EditedVideo.findById(videoId).populate([{ path: 'creator', select: ['name', 'usename', 'email'] }, { path: 'editor', select: [' -password'] }]);
                if(!video) {
                    return res.status(404).json({ message: 'Invalid Video Id' });
                }
                return res.status(200).json({ message: 'Found', video });
            }

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Error', err: error })
    }
}