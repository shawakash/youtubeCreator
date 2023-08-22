import React, { useEffect } from 'react'
import { GetServerSidePropsContext } from 'next';
import cookie from 'cookie';
import protection from '../../../../utils/protection';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { allEditVideo } from 'store';
import { EditVideoType } from 'zodTypes';
import { VideoCard } from 'ui';

const index: React.FC<{ videos: EditVideoType[] }> = ({ videos }) => {
  const [editVideos, setEditVideos] = useRecoilState(allEditVideo)

  useEffect(() => {
    if(videos) {
      setEditVideos(videos);
    }
  }, []);
  

  return (
    <>
      <div className="flex flex-wrap p-10 gap-8 justify-center items-center h-screen bg-gray-100">
        {editVideos.length > 0 && editVideos.map(rv => <VideoCard key={rv._id} video={rv} type='edit' />)}
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
        'type': 'edit'
      }
     });
    return {
      props: {
        videos: response.data.edit
      }
    }
    

}

export default protection(index)