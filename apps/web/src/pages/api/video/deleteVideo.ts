import aws from 'aws-sdk';
import { Creator, EditedVideo, RawVideo, dbConnect } from 'db';
import { NextApiRequest, NextApiResponse } from 'next';
import middle from '../auth/middle';

const { AWS_REGION, AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME, AWS_ENDPOINT } = process.env;

aws.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
    region: AWS_REGION, // Replace with your AWS region
});


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        try {
            await dbConnect();

            middle(req, res, async () => {
                const { type } = req.headers;
                const { credentialid, videokey, bucketname, _id } = req.body;
                
                // Initialize AWS S3
                const s3 = new aws.S3();
                
                // Delete the video from the S3 bucket
                await s3.deleteObject({
                    Bucket: bucketname,
                    Key: videokey,
                }).promise();

                if(credentialid) {
                    if(type === 'raw') {
                        const rawCredentials = await RawVideo.findByIdAndDelete(credentialid);
                        const creator = await Creator.findById(_id);
                        creator.rawVideos = creator.rawVideos.filter((rv: string) => rv != credentialid);
                        await creator.save();
                        
                    }if(type === 'edit') {
                        const editCredentials = await EditedVideo.findByIdAndDelete(credentialid);
                        const creator = await Creator.findById(_id);
                        creator.editedVideos = creator.editedVideos.filter((rv: string) => rv != credentialid);
                        await creator.save();
                    }
                }
                
                res.status(200).json({ message: 'Video deleted successfully' });
            })
            } catch (error) {
                console.error('Error deleting video:', error);
                res.status(500).json({ error: 'An error occurred while deleting the video' });
            }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
