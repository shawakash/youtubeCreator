import { Leger, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../middle";
import { removeFromLegerType } from "zodTypes";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'PUT') {
        return res.status(400).json({ message: 'Its a Put request' });
    }
    try {
        
        await dbConnect();
        middle(req, res, async () => {
            const { _id } = req.headers;
            const {videoId} = JSON.parse(req.body);

            const leger = await Leger.findOne({ rawVideo: videoId });
            if(!leger) {
                return res.status(404).json({ message: 'Leger Not Found' });
            }
            leger.editors = leger.editors.filter(ed => ed != _id);
            await leger.save();

            return res.status(200).json({ message: 'Removed from Leger' });

        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Internal Error' });
    }
}