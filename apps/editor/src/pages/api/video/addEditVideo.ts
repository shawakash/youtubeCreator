import { Creator, EditedVideo, Editor, Leger, RawVideo, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../middle";
import { editVideo } from "zodTypes";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method != 'POST') {
        return res.status(400).json({ message: 'Its a post request' });
    }

    try {

        await dbConnect();
        middle(req, res, async () => {
            const parsedInput = editVideo.safeParse(req.body);
            if (!parsedInput.success) {
                return res.status(400).json({ message: 'Validation Error', err: parsedInput });
            }
            const { _id } = req.headers;
            const rawVideo = await RawVideo.findOne({ videoKey: parsedInput.data.videoKey, editor: _id });
            const creator = await Creator.findById(rawVideo.creator);
            const editor = await Editor.findById(_id);
            const isLeger = await Leger.findOne({ editor: _id, rawVideo: rawVideo._id }).populate({ path: 'rawVideo' });
            if (!isLeger || !rawVideo) {
                return res.status(400).json({ message: 'False Attempt to update video' })
            }

            try {

                const newEditVideo = new EditedVideo({
                    ...parsedInput.data,
                    creator: creator._id,
                    editor: editor._id,
                    isUploaded: false
                });
                if(!(creator.editor.find(ed => ed != _id))) {
                    creator.editor.push(_id)
                }


                rawVideo.isEdited = true;
                creator.editedVideos.push(newEditVideo._id);
                editor.editedVideos.push(newEditVideo._id);
                isLeger.rawVideo.isEdited = true;
                await rawVideo.save();
                await editor.save();
                await creator.save();
                
                await newEditVideo.save();


                return res.status(200).json({ message: 'Added Successfully' })


            } catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Error while creating credentials', err: error });
            }
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Internal Error', err: error });
    }

}