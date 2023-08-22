import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useSetRecoilState } from 'recoil';
import { allEditVideo } from 'store';
import { editVideoInputType } from 'zodTypes';
import protection from '../../../../utils/protection';
import { FileUpload } from 'primereact/fileupload';
import edited from '.';



const VideoUploader = () => {
  const editVideo = useRef(null);

  const setAllEditedVideos = useSetRecoilState(allEditVideo);
  const router = useRouter();

  const { BASEURL, AWS_RAW_VIDEO_BUCKET_NAME } = process.env;


  const handleUpload = async (e) => {
    e.preventDefault();
    const selectedVideo = editVideo.current;
    console.log(selectedVideo);



    if (selectedVideo) {

      const currentDate = new Date().toISOString().replace(/[-:.]/g, '');
      const key = `${selectedVideo.name}-${currentDate}`;
      axios({
        baseURL: BASEURL || 'http://localhost:3000/api',
        url: '/video/getPutSignedUrl',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('creatorToken'),
          'key': key,
          'bucketname': 'creator-edit-video'
        }
      })
        .then(response => {
          console.log(response.data);

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

                const data: editVideoInputType = {
                  thumbnail: 'First Uploadvcx',
                  title: 'First Titlevc',
                  videoKey: key,
                  bucketName: 'creator-edit-video',
                  description: 'First Descriptionvcx',
                  contentType: 'video/mp4',
                  deadLineDate: '22043/3/23',
                  deadLineTime: '01:00'
                }
                axios({
                  baseURL: BASEURL || 'http://localhost:3000/api',
                  url: '/video/addEditCredential',
                  method: 'POST',
                  data: data,
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem('creatorToken')
                  }
                }).then(response => {
                  if (response.status == 200) {
                    setAllEditedVideos(pre => [...pre, { ...data, _id: response.data._id, isUploaded: false }]);
                    toast.success(response.data.message);
                    router.push('/videos/edited');
                  }
                }).catch(err => {
                  if (err) {
                    if (err.response && (err.response.status == 403)) {
                      toast.error(err.response.data.message);
                      sessionStorage.clear()
                      router.push('/login');
                    } else if(err.response.status == 401) {
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
    <div>

      <div>
        <h2>Upload Video</h2>
        <form onSubmit={handleUpload}>
          <input
            ref={editVideo}
            type="file"
            name="editVideos"
            accept="video/*"
          />
          <button type="submit">Upload</button>
        </form>
      </div>


    </div>
  );
};

export default protection(VideoUploader);
