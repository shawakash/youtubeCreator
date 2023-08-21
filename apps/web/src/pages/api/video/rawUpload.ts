import { RawVideo, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import { rawVideo } from "zodTypes";
import middle from "../auth/middle";
import multer from 'multer';
import { S3 } from 'aws-sdk';

const storage = multer.memoryStorage(); // Store the file in memory before uploading to S3
const upload = multer({ storage });

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//     if (req.method != 'POST') {
//         return res.status(400).json({ message: 'Its a post request' });
//     }
//     upload.single('file')(req as any, res as any, async () => {
//         try {
//             await dbConnect();
//             middle(req, res, async () => {
//                 const { _id } = req.headers;
//                 console.log(req.files)
//                 // const parsedInput = rawVideo.safeParse(req.body);
//                 // if (!parsedInput.success) {
//                 //     return res.status(400).json({ messsage: 'Validation Error', err: parsedInput });
//                 // };

//                 // const raw = new RawVideo({ ...req.body, creator: _id });
//                 // await raw.save();

//                 // return res.status(200).json({ message: 'Video Uploaded, waiting to get edited', _id: raw._id });

//             })
//         } catch (error) {
//             return res.status(500).json({ message: 'Internal Server Error', err: error })
//         }
//     });
// }


// import aws from 'aws-sdk';
// import nc from 'next-connect';
// import { NextApiRequest, NextApiResponse } from 'next';

// const apiRoute = nc<NextApiRequest, NextApiResponse>();

// const s3 = new aws.S3();

// // Define the route handler
// apiRoute.post(async (req, res) => {
//   try {
//     const { video } = req.body;
//     const videoFile = req.files?.video as Express.Multer.File;

//     if (!videoFile) {
//       return res.status(400).json({ error: 'Video file is required.' });
//     }

//     const params = {
//       Bucket: 'your-bucket-name',
//       Key: `videos/${videoFile.originalname}`,
//       Body: videoFile.buffer,
//       ACL: 'public-read', // Make the video publicly accessible
//     };

//     const uploadResponse = await s3.upload(params).promise();

//     return res.status(200).json({ message: 'Video uploaded successfully.', url: uploadResponse.Location });
//   } catch (error) {
//     return res.status(500).json({ error: 'Error uploading video.' });
//   }
// });

// export default apiRoute;
