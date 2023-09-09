import React, { useEffect } from 'react'
import { GetServerSidePropsContext } from 'next';
import cookie from 'cookie';
import protection from '../../../../utils/protection';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allEditVideo, creatorIdAtom } from 'store';
import { EditVideoType } from 'zodTypes';
import { VideoCard } from 'ui';

const Index: React.FC<{ videos: EditVideoType[] }> = ({ videos }) => {
  const [editVideos, setEditVideos] = useRecoilState(allEditVideo);
  const creatorId = useRecoilValue(creatorIdAtom);

  useEffect(() => {
    if(videos) {
      setEditVideos(videos);
    }
  }, []);
  

  return (
    <>
      <div className="flex flex-wrap p-10 gap-8 justify-center items-center h-screen bg-gray-100">
        {editVideos.length > 0 && editVideos.map(rv => <VideoCard client='creator' clientId={creatorId} key={rv._id} video={rv} type='edit' page='card' />)}
      </div>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const cookies = context.req.headers.cookie;
    const parsedCookies = cookie.parse(cookies || '');
    const token = parsedCookies.creatorToken;

    const { BASEURL } = process.env;

    try {
      
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
          videos: response.data.videos
        }
      }
    } catch (error) {
      console.log(error);
      return {
        props: {
          videos: null
        }
      }
    }
    

}

export default protection(Index)