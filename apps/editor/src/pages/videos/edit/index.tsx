import React, { useEffect, useState } from 'react'
import { GetServerSidePropsContext } from 'next';
import cookie from 'cookie';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allRawVideoEditor, editorEditedVideos, editorIdAtom } from 'store';
import { EditVideoType, RawVideoType } from 'zodTypes';
import { VideoCard } from 'ui';
import protection from '../../../../utils/protection';

const index: React.FC<{ videos: RawVideoType[] }> = ({ videos }) => {
  const [editVideos, setEditedVideos] = useRecoilState(editorEditedVideos);
  const editorId = useRecoilValue(editorIdAtom);
  const [localVideos, setVideos] = useState<EditVideoType[]>();

  useEffect(() => {
    if(videos) {
      setEditedVideos(videos);
      setVideos(videos);
    }
  }, []);
  

  return (
    <>
      <div className="flex flex-wrap p-10 gap-8 justify-center items-center h-screen bg-gray-100">
        {localVideos && localVideos.map(rv => <VideoCard clientId={editorId} client='editor'  key={rv._id} video={rv} type='edit' />)}
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
      baseURL: BASEURL || 'http://localhost:3001/api',
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