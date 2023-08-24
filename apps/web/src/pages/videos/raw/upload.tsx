import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSetRecoilState } from 'recoil';
import { allRawVideo } from 'store';
import { rawVideoInputType } from 'zodTypes';
import protection from '../../../../utils/protection';
import { FileUpload } from 'primereact/fileupload';
import { UploadForm } from 'ui';



const VideoUploader = () => {
  const rawVideo = useRef<HTMLInputElement | null>(null);

  const setAllRawVideos = useSetRecoilState(allRawVideo);
  const router = useRouter();

  const { BASEURL, AWS_RAW_VIDEO_BUCKET_NAME } = process.env;


  const handleUpload = async (data: rawVideoInputType) => {


    const selectedVideo = rawVideo.current;
    // console.log(selectedVideo); 



    if (selectedVideo) {

      const currentDate = new Date().toISOString().replace(/[-:.]/g, '');
      const key = `${data.videoKey}-${currentDate}`;
      data.videoKey = key;

      axios({
        baseURL: BASEURL || 'http://localhost:3000/api',
        url: '/video/getPutSignedUrl',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('creatorToken'),
          'key': key,
          'bucketname': data.bucketName
        }
      })
        .then(response => {

          if (response.status == 200) {
            axios({
              url: response.data.presignedUrl,
              method: 'PUT',
              data: selectedVideo.files[0],
              headers: {
                'Content-Type': selectedVideo.type,
              },
            }).then(response => {

              if (response.status == 200) {

                axios({
                  baseURL: BASEURL || 'http://localhost:3000/api',
                  url: '/video/addRawCredential',
                  method: 'POST',
                  data: data,
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem('creatorToken')
                  }
                }).then(response => {
                  if (response.status == 200) {
                    setAllRawVideos(pre => [...pre, { ...data, _id: response.data._id, isUploaded: false, isEdited: false }]);
                    toast.success(response.data.message);
                    router.push('/videos/raw');
                  }
                }).catch(err => {
                  if (err) {
                    if (err.response && (err.response.status == 403)) {
                      toast.error(err.response.data.message);
                      sessionStorage.clear()
                      router.push('/login');
                    } else if (err.response.status == 401) {
                      toast.error('Please first allow us your youtube access');
                      router.push('/auth')
                    }
                  } else if (err.response) {
                    toast.error(err.response.data.message);
                  }
                  console.log(err)
                })
              }

            }).catch(err => {
              if (err) {
                if (err.response && (err.response.status == 403 || err.response.status == 401)) {
                  toast.error(err.response.data.message);
                  sessionStorage.clear()
                  router.push('/login');
                }
              } else if (err.response) {
                toast.error(err.response.data.message);
              }
              console.log(err)
            })
          }

        })
        .catch(err => {
          if (err) {
            if (err.response && (err.response.status == 403 || err.response.status == 401)) {
              toast.error(err.response.data.message);
              sessionStorage.clear()
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
    <>
      <div className="h-screen bg-gray-100 flex justify-center items-center">
        <UploadForm propData={handleUpload} fileRef={rawVideo} type='raw' client='creator' />
      </div>
    </>
  );
};

export default protection(VideoUploader);
