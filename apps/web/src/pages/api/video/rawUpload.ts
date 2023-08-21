import fs from 'fs';
import AWS from 'aws-sdk';
import formidable from 'formidable';
import { IncomingForm } from 'formidable';
import { RawVideo, dbConnect } from 'db';
import middle from '../auth/middle';
import { rawVideo } from 'zodTypes';

const { AWS_REGION, AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME } = process.env;

const s3Client = new AWS.S3({
    // endpoint,
    region: AWS_REGION,
    credentials: {
        accessKeyId: AWS_ACCESS_KEY,
        secretAccessKey: AWS_SECRET_KEY
    }
});

export const config = {
    api: {
        bodyParser: false
    }
}

export default async function handler(req, res) {
    // const form = formidable();
    if(req.method != 'POST') {
        return res.status(400).json({ message: 'Its a Post request' });
    }
    try {
        
        await dbConnect();

        middle(req, res, async () => {
            const form = new IncomingForm({ keepExtensions: true, uploadDir: './public/uploads/rawVideos' });
            form.parse(req, async (err, fields, files) => {
                
                if (err) {
                    console.error('Formidable error:', err);
                    return res.status(500).json({ message: 'An error occurred' });
                }
                
                if (!files.rawVideos) {
                    return res.status(400).json({ message: 'Raw Videos file missing' });
                }
                console.log(files)

                const videoFile = files.rawVideos[0];
                const videoStream = fs.createReadStream(videoFile.filepath);
                const uploadParams = {
                    Bucket: AWS_BUCKET_NAME,
                    Key: `uploads/${videoFile.originalFilename}`,
                    Body: videoStream,
                    ACL: 'public-read',
                };
                
                const data = JSON.parse(fields.data[0]);
                const parsedData = rawVideo.safeParse(data);
                if(!data) {
                    return res.status(400).json({ message: 'Validation Error', err: parsedData })
                }
                const { _id } = req.headers;
                
                // try {
                    //     const uploadResponse = await s3Client.upload(uploadParams).promise();
                    
                    //     // Generate a signed URL for the uploaded object
                    //     const signedUrl = s3Client.getSignedUrl('getObject', {
                        //         Bucket: AWS_BUCKET_NAME,
                        //         Key: uploadParams.Key,
                        //         Expires: 3600 * 24 * 100, // URL expiration time in seconds
                        //     });

                        // const raw = new RawVideo({...data, videoUrl: signedUrl, creator: _id});
                        // await raw.save();

                        
                        //     // Remove the local file after uploading to S3
                        // fs.unlinkSync(videoFile.filepath);
                    
                //     return res.status(200).json({ message: 'Upload successful', url: uploadResponse.Location, rawVideo: raw });
                // } catch (error) {
                //     console.error('S3 upload error:', error);
                //     return res.status(500).json({ message: 'Upload failed' });
                // }
                
            })
        })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', err: error })
    }
    }