import React, { useEffect, useState } from 'react'
import { GetServerSidePropsContext } from 'next';
import cookie from 'cookie';
import protection from '../../../../utils/protection';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { allRawVideo } from 'store';
import { RawVideoType } from 'zodTypes';
import { VideoCard } from 'ui';

const index: React.FC<{ videos: RawVideoType[] }> = ({ videos }) => {
  const [rawVideos, setRawVideos] = useRecoilState(allRawVideo)

  useEffect(() => {
    if(videos) {
      setRawVideos(videos);
    }
  }, []);
  

  return (
    <>
      <div className="flex flex-wrap p-10 gap-8 justify-center items-center h-screen bg-gray-100">
        {rawVideos.length > 0 && rawVideos.map(rv => <VideoCard key={rv._id} video={rv} />)}
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
      url: '/video/getRawVideos',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
     });
    return {
      props: {
        videos: response.data.raw
      }
    }
    

}

export default protection(index)