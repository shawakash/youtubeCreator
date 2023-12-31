import React, { useEffect, useState } from 'react'
import { GetServerSidePropsContext } from 'next';
import cookie from 'cookie';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allRawVideoEditor, editorIdAtom } from 'store';
import { RawVideoType } from 'zodTypes';
import { VideoCard } from 'ui';
import protection from '../../../../utils/protection';

const Index: React.FC<{ videos: RawVideoType[] }> = ({ videos }) => {
  const [rawVideos, setRawVideos] = useRecoilState(allRawVideoEditor);
  const editorId = useRecoilValue(editorIdAtom);

  useEffect(() => {
    if(videos) {
      setRawVideos(videos);
    }
  }, []);
  

  return (
    <>
      <div className="flex flex-wrap p-10 gap-8 justify-center items-center h-screen bg-gray-100">
        {/* @ts-ignore */}
        {rawVideos.length > 0 && rawVideos.map(rv => <VideoCard clientId={editorId}  key={rv._id} video={rv} type='raw' />)}
      </div>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const cookies = context.req.headers.cookie;
    const parsedCookies = cookie.parse(cookies || '');
    const token = parsedCookies.editorToken;

    const { BASEURL } = process.env;
    if(!BASEURL || BASEURL.length == 0) {
        throw Error('Please Add API `BASERURL` in environment variable');
    }

    const response = await axios({ 
      baseURL: BASEURL || 'http://ec2-100-25-221-96.compute-1.amazonaws.com:3001/api',
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
        videos: response.data.raw
      }
    }
    

}

export default protection(Index)