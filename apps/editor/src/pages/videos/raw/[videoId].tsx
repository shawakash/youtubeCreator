import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Video } from 'ui';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { allRawVideoEditor, editorIdAtom, legersAtom } from 'store';
import { toast } from 'react-hot-toast';
import { RawVideoType, RemoveFromLegerType, fetchVideoReqType, legerInType } from 'zodTypes';
import { GetServerSidePropsContext } from 'next/types';
import axios from 'axios';
import cookie from 'cookie';
import protection from '../../../../utils/protection';


const VideoPage: React.FC<{ video: RawVideoType, hasApplied: boolean }> = ({ video, hasApplied }) => {
  const [localVideo, setVideo] = useState<RawVideoType>();
  const [applied, setApplied] = useState<boolean>();
  const router = useRouter();
  const { videoId } = router.query;
  const setLegers = useSetRecoilState(legersAtom);
  const editorId = useRecoilValue(editorIdAtom);

  useEffect(() => {
    if(videoId) {
      // const video = rawVideos.find(raw => raw._id == videoId);
      if(!video) {
        toast.error('Server Error');
        router.back();
      } if(video) {
        setVideo(video);
        setApplied(hasApplied);
      }
    }
  }, []);

  const handleLeger = () => {
    const data: legerInType = {
      rawVideo: localVideo._id,
      creator: localVideo.creator._id
    };
    axios({
      baseURL: 'http://ec2-100-25-221-96.compute-1.amazonaws.com:3001/api',
      url: '/video/addToLeger',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('editorToken')
      },
      data: data
    }).then(response => {
      setLegers(legers => [...legers, response.data.leger]);
      setApplied(true);
      toast.success(response.data.message);
      // router.push('/videos/leger');
    }).catch(err => {
      if(err) {
        if(err.response) {
          toast.error(err.response.data.message);
          // router.push('/videos/leger');
          return;
        }
          toast.error(err.message);
          console.log(err);
      }
    })
  }

  const removeFromLeger = () => {

    const data: RemoveFromLegerType = {videoId: localVideo._id};

    axios({
      baseURL: 'http://ec2-100-25-221-96.compute-1.amazonaws.com:3001/api',
      url: '/video/removeFromLeger',
      method: 'PUT',
      headers: {
        'Content-Type': 'appliacation/json',
        'Authorization': sessionStorage.getItem('editorToken')
      },
      data: data
    }).then(response => {

      setLegers(lgs => {
        return lgs.map(lg => {
          if (lg.rawVideo._id === localVideo._id) {
              return {
                  ...lg,
                  editors: lg.editors.filter(ed => ed._id !== editorId)
              };
          }
          return lg 
        });
      });

      setApplied(false);
      toast.success(response.data.message);

    }).catch(err => {
      if (err) {
        if (err.response) {
            toast.error(err.response.data.message);
            return;
        }
        toast.error(err.message);
        console.log(err)
        return;
    }
    })
  }

  return (
    <>
    <div className="h-screen bg-gray-100 flex justify-around items-center">

      {localVideo && <Video removeFromLeger={removeFromLeger} video={localVideo} hasApplied={applied}  type={'raw'} addToLeger={handleLeger} />}
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

export default protection(VideoPage);