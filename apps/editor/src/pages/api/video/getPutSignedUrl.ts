import fs from 'fs';
import aws from 'aws-sdk'
import { RawVideo, dbConnect } from 'db';
import middle from '../middle';

const { AWS_REGION, AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME, AWS_ENDPOINT } = process.env;


export const config = {
    api: {
        bodyParser: false
    }
}

export default async function handler(req, res) {
    if (req.method != 'GET') {
        return res.status(400).json({ message: 'Its a Get request' });
    }
    try {

        await dbConnect();
        middle(req, res, async () => {
            
            const { key, bucketname, expiresin } = req.headers; // The object key for the video in S3


            aws.config.update({
                accessKeyId: AWS_ACCESS_KEY,
                secretAccessKey: AWS_SECRET_KEY,
                region: AWS_REGION, // Replace with your AWS region
            });

            const s3 = new aws.S3();

            const params = {
                Bucket: bucketname, // Replace with your S3 bucket name
                Key: key,
                ContentType: 'video/*',
                Expires: parseInt(expiresin as string), // URL expiration time in seconds (1 hour)
            };

            try {
                const presignedUrl = await s3.getSignedUrlPromise('putObject', params);
                res.status(200).json({ message: 'upload Presigned Url Generated',  presignedUrl });
            } catch (error) {
                console.error('Error generating pre-signed URL:', error);
                res.status(500).json({ error: 'An error occurred' });
            }


        })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', err: error })
    }
}