import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useSetRecoilState } from 'recoil';
import { allRawVideo } from 'store';
import { rawVideoInputType } from 'zodTypes';
import protection from '../../../../utils/protection';


const VideoUploader = () => {
  const video = useRef(null);

  const setAllRawVideos = useSetRecoilState(allRawVideo);
  const router = useRouter();

  const { BASEURL } = process.env;

  // const readFileAsBuffer = (file: File): Promise<Buffer> => {
  //   return new Promise<Buffer>((resolve, reject) => {
  //     const reader = new FileReader();

  //     reader.onload = (event) => {
  //       const result = event.target?.result;
  //       if (result instanceof Buffer) {
  //         resolve(result);
  //       } else {
  //         reject(new Error('Failed to read video file.'));
  //       }
  //     };
  
  //     reader.onerror = (error) => {
  //       reject(error);
  //     };
  
  //     Buffer.from(reader.readAsArrayBuffer(file))
  //   });
  // };

  const handleUpload = async () => {

    const selectedVideo = video.current.value;
    console.log(selectedVideo)

    if (selectedVideo) {

        const buffer: Buffer= Buffer.from(selectedVideo, 'base64');
        console.log( buffer instanceof Buffer);

        const data: rawVideoInputType = {
            thumbnail: 'First Upload',
            description: 'First Description',
            data: buffer,
            contentType: 'video/mp4',
            deadLineDate: (new Date(2023, 8, 22)).toString(),
            deadLineTime: '01:00'
        }
        axios({
          baseURL: BASEURL || 'http://localhost:3000/api',
          url: '/video/rawUpload',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('creatorToken')
          },
          data: data
        }).then(response => {
          setAllRawVideos(pre => [...pre, { ...data, _id: response.data._id }]);
          toast.success(response.data.message);
          router.push('/video/allRawVideo');
        }).catch(err => {
          if(err) {
            if(err.response && (err.response.status == 403  || err.response.status == 401)) {
              toast.error(err.response.data.message);
              sessionStorage.clear
              router.push('/login');
            }
          } else if (err.response) {
              toast.error(err.response.data.message);
          }
          console.log(err)
        })
      
    } else {
      console.warn('No video selected for upload.');
    }
  };

  return (
    <div>
      <h2>Upload a Video</h2>
      <input ref={video} type="file" accept="video/*" />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default protection(VideoUploader);
