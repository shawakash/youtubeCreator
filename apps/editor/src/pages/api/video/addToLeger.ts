import { Leger, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../middle";
import { legerBody, legerType } from "zodTypes";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'PUT') {
        return res.status(400).json({ message: 'Its a Put request' });
    }
    try {
        await dbConnect();

        middle(req, res, async () => {
            const { _id } = req.headers;
            const parsedInput = legerBody.safeParse(req.body);
            if(!parsedInput.success) {
                return res.status(400).json({ message: 'Validation Error', err: parsedInput });
            }
            const { creator, rawVideo } = parsedInput.data;
            const isLeger = await Leger.findOne({ rawVideo: rawVideo }).populate([
                { path: 'creator' }, 
                { path: 'editors' }, 
                { path: 'rawVideo' }]);
            if(!isLeger) {
               const newLeger = new Leger(parsedInput.data);
               newLeger.editors.push(_id);
               await newLeger.save();
               return res.status(200).json({ message: 'Request Submited', leger: newLeger });
            } if(isLeger && isLeger.editor) {
                return res.status(400).json({ message: 'Already Assigned' })
            } 
            const hasApplied = isLeger.editors.find(ed => ed._id == _id);
            if(hasApplied) {
                return res.status(400).json({ message: 'Already Applied' });
            }
            isLeger.editors.push(_id);
            await isLeger.save();
            return res.status(200).json({ message: 'Added to waiting List', leger: isLeger  })
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Error', err: error })
    }
}