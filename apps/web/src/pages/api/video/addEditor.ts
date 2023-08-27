import { Creator, Editor, Leger, RawVideo, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../auth/middle";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'PUT') {
        return res.status(400).json({ message: 'Its a Put Request' });
    }
    try {

        await dbConnect();
        middle(req, res, async () => {
            const { _id } = req.headers;
            const { videoId, editor } = req.body;
            const creator = await Creator.findById(_id).select(['editor']);
            if(!creator) {
                return res.status(404).json({ message: 'Authentication Error' });
            }
            const edit = await Editor.findById(editor).select(['username', '_id', 'name', 'email', 'rawVideos']);
            if(!edit) {
                return res.status(404).json({ message: 'Invalid editor Id' });
            }
            const leger = await Leger.findOne({ rawVideo: videoId });
            const video = await RawVideo.findById(videoId);
            edit.rawVideos.push(videoId);
            if(!creator.editor.find(ed => ed._id == edit._id)) {
                creator.editor.push(edit._id)
            }
            await creator.save();
            await edit.save();
            console.log(creator);
            console.log('Leger', leger);
            console.log('Video', video);
            // if (!leger || !video) {
            //     return res.status(404).json({ message: 'Invalid Ids' });
            // }
            return res.status(200).json({ message: 'Assigned As A editor', editor: edit });
        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Internal Error', err: error })
    }
}