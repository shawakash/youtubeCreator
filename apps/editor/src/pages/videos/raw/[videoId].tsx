import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Video } from 'ui';
import { useRecoilState } from 'recoil';
import { allRawVideoEditor } from 'store';
import { toast } from 'react-hot-toast';
import { RawVideoType, fetchVideoReqType } from 'zodTypes';
import { GetServerSidePropsContext } from 'next/types';
import axios from 'axios';
import cookie from 'cookie';


const VideoPage = ({ video }) => {
  const [localVideo, setVideo] = useState<RawVideoType>();
  const router = useRouter();
  const { videoId } = router.query;
  // const [rawVideos, setRawVideos] = useRecoilState<RawVideoType[]>(allRawVideoEditor);

  useEffect(() => {
    if(videoId) {
      // const video = rawVideos.find(raw => raw._id == videoId);
      if(!video) {
        toast.error('Server Error');
        router.back();
      } if(video) {
        setVideo(video);
      }
    }
  }, []);

  const handleLeger = () => {
    const 
  }

  return (
    <>
    <div className="h-screen bg-gray-100 flex justify-around items-center">

      {localVideo && <Video video={localVideo} type={'raw'} handleLeger={handleLeger} />}
    </div>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {videoId} = context.params;
  const { BASEURL } = process.env;

  const cookies = context.req.headers.cookie;
  const parsedCookies = cookie.parse(cookies || '');
  const token = parsedCookies.editorToken;

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
        video: response.data.video
      }
    }

  } catch (error) {
    return { 
      props: {
        video: null
      }
    }    
  }

  
}

export default VideoPage;