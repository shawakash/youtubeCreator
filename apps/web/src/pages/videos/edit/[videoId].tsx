import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { UpdateForm, Upload, VideoCard } from 'ui';
import { useSetRecoilState } from 'recoil';
import { allEditVideo, allRawVideo } from 'store';
import { toast } from 'react-hot-toast';
import { EditVideoType, UpdateVideoType, UploadVideoType, fetchVideoReqType, } from 'zodTypes';
import { GetServerSidePropsContext } from 'next/types';
import axios from 'axios';
import cookie from 'cookie';
import protection from '../../../../utils/protection';


const VideoPage = ({ leger }) => {
  const [localVideo, setVideo] = useState<EditVideoType>();
  const router = useRouter();
  const setAllEditVideos = useSetRecoilState(allEditVideo);
  const setAllRawVideos = useSetRecoilState(allRawVideo);
  const tagsRef = useRef<HTMLInputElement | null>();

  useEffect(() => {
    if (!leger) {
      toast.error('Server Error');
      router.back();
    } if (leger) {
      setVideo(leger);
    }
  }, []);

  const handleUpdate = (data: UpdateVideoType) => {
    axios({
      baseURL: 'http://localhost:3000/api',
      url: '/video/update',
      method: 'PUT',
      headers: {
        'Authorization': sessionStorage.getItem('creatorToken'),
        'Content-Type': 'application/json',
        'type': 'edit',
        'videoKey': localVideo.videoKey,
        'bucketName': localVideo.bucketName
      },
      data: data
    }).then(response => {

      setAllEditVideos(pre => {
        let prev = pre.find(c => c.videoKey == localVideo.videoKey);
        prev = { ...prev, ...data };
        return pre;
      });

      setVideo(prevVideo => {
        return { ...prevVideo, ...data }
      });

      toast.success(response.data.message);

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

    });
  }


  const removeFromLeger = () => {
    axios({
      baseURL: 'http://localhost:3000/api',
      url: '/video/delete',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('creatorToken'),
        'videoKey': localVideo.videoKey,
        'type': 'edit',
        'bucketname': localVideo.bucketName
      }
    }).then(response => {

      setAllEditVideos(rvs => rvs.filter(rv => rv._id != localVideo._id));
      toast.success(response.data.message);
      router.push('/videos/edit');

    }).catch(err => {

      if (err) {
        if (err.response && (err.response.status == 403)) {
          console.clear()
          console.log(err);
          toast.error(err.response.data.message);
          // sessionStorage.clear()
          // router.push('/login');
        } else if (err.response.status == 401) {
          toast.error('Please first allow us your youtube access');
          router.push('/auth')
        }
      } else if (err.response) {
        toast.error(err.response.data.message);
      }
      console.log(err);

    })
  };

  const handleUpload = (data: UploadVideoType) => {
    console.log(data)
    axios({
      baseURL: 'http://localhost:3000/api',
      url: '/video/upload',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('creatorToken')
      },
      data: data
    }).then(response => {

      setAllEditVideos(pre => {
        let prev = pre.find(c => c.videoKey == localVideo.videoKey);
        prev = { ...prev, ...data };
        prev.isUploaded = true;
        console.log(prev)
        return pre;
      });

      setVideo(prevVideo => {
        prevVideo.isUploaded = true;
        console.log(prevVideo)
        return { ...prevVideo, ...data }
      });

      setAllRawVideos(pre => {
        let prev = pre.find(p => p.videoKey == localVideo.videoKey);
        prev = {...prev, ...data};
        prev.isUploaded = true;
        console.log(prev)
        return pre;
      })

      toast.success('Video Uploaded SuccessFully to Youtube');

    }).catch(err => {
      if(err.response) {
        const msg = err.response.data.message;
        if(msg && msg.includes('Auth First') || msg.includes('Token Expired')) {
          toast.error(msg);
          router.push('/auth');
        }
        if(err.response.data.isAuth === false) {
          toast.error('Session Expired, Please Login In');
          router.push('/login');
        }
        toast.error(err.message);
        console.error(err);
        // router.reload();
      }
    })

  }

  return (
    <>
      <div className="h-screen bg-gray-100 flex justify-around items-center">
        {localVideo && <VideoCard video={localVideo} type='edit' clientId={localVideo.creator._id} client='creator' onDelete={removeFromLeger} page='video' />}
        <div className="">
          {/* @ts-ignore */}
          {localVideo && <UpdateForm client='creator' video={localVideo} tagsRef={tagsRef} type='edit' propData={handleUpdate} propUpload={handleUpload} />}
        </div>

      </div>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { videoId } = context.params;
  const { BASEURL } = process.env;

  const cookies = context.req.headers.cookie;
  const parsedCookies = cookie.parse(cookies || '');
  const token = parsedCookies.creatorToken;

  const data: fetchVideoReqType = {
    videoId: videoId as string,
    type: 'edit'
  }

  try {
    const response = await axios({
      baseURL: BASEURL,
      url: '/video/fetchVideo',
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });


    return {
      props: {
        leger: response.data.video
      }
    }

  } catch (error) {
    console.error(error)
    return {
      props: {
        leger: null
      }
    }
  }


}

export default protection(VideoPage);