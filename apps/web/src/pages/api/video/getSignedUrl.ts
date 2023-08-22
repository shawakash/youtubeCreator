import aws from 'aws-sdk';
// import nc from 'next-connect';

import { dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import middle from "../auth/middle";

// const apiRoute = nc();

// // Configure AWS SDK with your credentials

// // Define the route handler
// apiRoute.get(async (req, res) => {
//   const videoFileKey = req.query.key; // Get the video file key from the query parameter

//   // Generate a signed URL for the video content
//   

//   res.status(200).json({ signedUrl });
// });

// export default apiRoute;

const { AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_REGION, AWS_BUCKET_NAME } = process.env;
if (!AWS_ACCESS_KEY || AWS_ACCESS_KEY.length == 0 ||
    !AWS_SECRET_KEY || AWS_SECRET_KEY.length == 0 ||
    !AWS_REGION || AWS_REGION.length == 0 ||
    !AWS_BUCKET_NAME || AWS_BUCKET_NAME.length == 0) {
    throw new Error('Please define the `AWS S3` environment variable');
}
aws.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
    region: AWS_REGION,
});

const s3 = new aws.S3();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'GET') {
        return res.status(400).json({ message: 'Its a get Request' });
    }

    try {

        await dbConnect();
        middle(req, res, async () => {
            const { videofilekey, bucketname, expiresin } = req.headers;
            try {
                const signedUrl = s3.getSignedUrl('getObject', {
                    Bucket: bucketname,
                    Key: videofilekey,
                    Expires: parseInt(expiresin as string) || 3600 * 24, // URL expiration time in seconds
                });
                
                return res.status(200).json({ message: 'Signed url generated successfully', signedUrl })
            } catch (error) {
                console.log(error)
                return res.status(500).json({ message: 'Internal Error', err: error })
            }
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error', err: error });
    }

}