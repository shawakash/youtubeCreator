import React, { useEffect, useState } from 'react'
import { GetServerSidePropsContext } from 'next';
import cookie from 'cookie';
import protection from '../../../../utils/protection';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allRawVideo, creatorIdAtom } from 'store';
import { RawVideoType } from 'zodTypes';
import { VideoCard } from 'ui';

const index: React.FC<{ videos: RawVideoType[] }> = ({ videos }) => {
  const [rawVideos, setRawVideos] = useRecoilState(allRawVideo);
  const creatorId = useRecoilValue(creatorIdAtom);

  useEffect(() => {
    if(videos) {
      setRawVideos(videos);
    }
  }, []);
  

  return (
    <>
      <div className="flex flex-wrap p-10 gap-8 justify-center items-center h-screen bg-gray-100">
        {rawVideos.length > 0 && rawVideos.map(rv => <VideoCard clientId={creatorId} key={rv._id} video={rv} type='raw' />)}
      </div>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const cookies = context.req.headers.cookie;
    const parsedCookies = cookie.parse(cookies || '');
    const token = parsedCookies.creatorToken;

    const { BASEURL } = process.env;

    const response = await axios({ 
      baseURL: BASEURL,
      url: '/video/getVideos',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
        'type': 'raw'
      }
     });
    return {
      props: {
        videos: response.data.videos
      }
    }
    

}

export default protection(index)