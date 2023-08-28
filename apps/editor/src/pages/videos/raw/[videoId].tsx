import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Video } from 'ui';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { allRawVideoEditor, legersAtom } from 'store';
import { toast } from 'react-hot-toast';
import { RawVideoType, fetchVideoReqType, legerInType } from 'zodTypes';
import { GetServerSidePropsContext } from 'next/types';
import axios from 'axios';
import cookie from 'cookie';


const VideoPage = ({ video, hasApplied }) => {
  const [localVideo, setVideo] = useState<RawVideoType>();
  const router = useRouter();
  const { videoId } = router.query;
  const setLegers = useSetRecoilState(legersAtom);
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
    const data: legerInType = {
      rawVideo: localVideo._id,
      creator: localVideo.creator._id
    };
    axios({
      baseURL: 'http://localhost:3000/api',
      url: '/video/addToLeger',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('editorToken')
      },
      data: data
    }).then(response => {
      setLegers(legers => [...legers, response.data.leger]);
      toast.success(response.data.message);
      router.push('/videos/leger');
    }).catch(err => {
      if(err) {
        if(err.response) {
          toast.error(err.response.data.message);
          router.push('/videos/leger');
          return;
        }
          toast.error(err.message);
          console.log(err);
      }
    })
  }

  const removeFromLeger = () => {
    
  }

  return (
    <>
    <div className="h-screen bg-gray-100 flex justify-around items-center">

      {localVideo && <Video removeFromLeger={removeFromLeger} video={localVideo} hasApplied={hasApplied}  type={'raw'} addToLeger={handleLeger} />}
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
        video: response.data.video,
        hasApplied: response.data.hasApplied
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