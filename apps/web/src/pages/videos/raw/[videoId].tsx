import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UpdateForm, VideoCard } from 'ui';
import { useSetRecoilState } from 'recoil';
import { allRawVideo, legersAtom } from 'store';
import { toast } from 'react-hot-toast';
import { RawVideoType, UpdateVideoType, fetchVideoReqType, legerInType, rawVideo } from 'zodTypes';
import { GetServerSidePropsContext } from 'next/types';
import axios from 'axios';
import cookie from 'cookie';


const VideoPage = ({  leger }) => {
  const [localVideo, setVideo] = useState<RawVideoType>();
  const router = useRouter();
  const setAllRawVideos = useSetRecoilState(allRawVideo);
  const setLegers = useSetRecoilState(legersAtom);
  // const 

  useEffect(() => {
      if(!leger) {
        toast.error('Server Error');
        router.back();
      } if(leger) {
        console.log(leger.rawVideo)
        setVideo(leger.rawVideo);
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
        'type': 'raw',
        'videoKey': localVideo.videoKey,
        'bucketName': localVideo.bucketName
      },
      data: data
    }).then(response => {

      setAllRawVideos(pre => {
        let prev = pre.find(c => c.videoKey == localVideo.videoKey);
        prev = {...prev, ...data};
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
        'type': 'raw',
        'bucketname': localVideo.bucketName
      }
    }).then(response => {

      setAllRawVideos(rvs =>  rvs.filter(rv => rv._id != localVideo._id));
      setLegers(lgs => lgs.filter(lg => lg.rawVideo._id != localVideo._id));
      toast.success(response.data.message);
      router.push('/videos/raw')

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
      console.log(err);

    })
  }

  return (
    <>
    <div className="h-screen bg-gray-100 flex justify-around items-center">
      {leger && localVideo && <VideoCard video={localVideo} type='raw' clientId={leger.creator._id} client='creator' onDelete={removeFromLeger} page='video' />}
      {localVideo && <UpdateForm video={localVideo} type='raw' propData={handleUpdate} />  }
    </div>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {videoId} = context.params;
  const { BASEURL } = process.env;

  const cookies = context.req.headers.cookie;
  const parsedCookies = cookie.parse(cookies || '');
  const token = parsedCookies.creatorToken;

  const data: fetchVideoReqType = {
    videoId: videoId as string,
    type: 'raw'
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

export default VideoPage;