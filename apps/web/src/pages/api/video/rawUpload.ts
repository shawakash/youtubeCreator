import fs from 'fs';
import AWS from 'aws-sdk'
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import formidable from 'formidable';
import { IncomingForm } from 'formidable';
import { RawVideo, dbConnect } from 'db';
import middle from '../auth/middle';
import { rawVideo } from 'zodTypes';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const { AWS_REGION, AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME, AWS_ENDPOINT } = process.env;

const s3Client = new S3Client({
    region: AWS_REGION,
    credentials: {
        accessKeyId: AWS_ACCESS_KEY,
        secretAccessKey: AWS_SECRET_KEY
    }
})

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
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
                const s3 = new AWS.S3();

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
                
                try {
                        // const uploadResponse = await s3.upload(uploadParams).promise();
                    
                        // Generate a signed URL for the uploaded object
                        const commnand = new GetObjectCommand({
                            Bucket: AWS_BUCKET_NAME,
                            Key: '2023-CA-Lecture-10.pdf',
                        })
                        const signedUrl = await getSignedUrl(s3Client, commnand);

                        console.log(signedUrl)

                        // const raw = new RawVideo({...data, videoUrl: signedUrl, creator: _id});
                        // await raw.save();

                        
                            // Remove the local file after uploading to S3
                        fs.unlinkSync(videoFile.filepath);
                    
                    // return res.status(200).json({ message: 'Upload successful', url: uploadResponse.Location, rawVideo: raw });
                } catch (error) {
                    console.error('S3 upload error:', error);
                    return res.status(500).json({ message: 'Upload failed' });
                }
                
            })
        })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', err: error })
    }
    }