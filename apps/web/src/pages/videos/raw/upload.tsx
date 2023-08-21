import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSetRecoilState } from 'recoil';
import { allRawVideo } from 'store';
import { rawVideoInputType } from 'zodTypes';
import protection from '../../../../utils/protection';
import { FileUpload } from 'primereact/fileupload';



const VideoUploader = () => {
  const rawVideo = useRef(null);

  const setAllRawVideos = useSetRecoilState(allRawVideo);
  const router = useRouter();

  const { BASEURL } = process.env;


  const handleUpload = async (e) => {
    e.preventDefault();
    const selectedVideo = rawVideo.current.value;
    console.log(selectedVideo);


    if (selectedVideo) {

      const data: rawVideoInputType = {
        thumbnail: 'First Upload',
        title: 'First Title',
        description: 'First Description',
        contentType: 'video/mp4',
        deadLineDate: '22023/3/23',
        deadLineTime: '01:00'
      }
      const formData = new FormData();
      formData.append('rawVideos', rawVideo.current.files[0]);
      formData.append('data', JSON.stringify(data));

      axios({
        baseURL: BASEURL || 'http://localhost:3000/api',
        url: '/video/rawUpload',
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': sessionStorage.getItem('creatorToken')
        },
        data: formData
      })
        .then(response => {
          // setAllRawVideos(pre => [...pre, { ...data, _id: response.data._id }]);
          toast.success(response.data.message);
          // router.push('/video/allRawVideo');
        })
        .catch(err => {
          // if (err) {
          //   if (err.response && (err.response.status == 403 || err.response.status == 401)) {
          //     toast.error(err.response.data.message);
          //     sessionStorage.clear
          //     router.push('/login');
          //   }
          // } else if (err.response) {
          //   toast.error(err.response.data.message);
          // }
          // console.log(err)
        })

    } else {
      console.warn('No video selected for upload.');
    }
  };




  return (
    <div>
      <h2>Upload a Video</h2>

      <div>
        <h2>Upload Video</h2>
        <form onSubmit={handleUpload}>
          <input
            ref={rawVideo}
            type="file"
            name="rawVideos"
            accept="video/*"
          />
          <button type="submit">Upload</button>
        </form>
      </div>


    </div>
  );
};

export default protection(VideoUploader);
