import React, { useEffect, useState } from 'react'
import { GetServerSidePropsContext } from 'next';
import cookie from 'cookie';
import protection from '../../../../utils/protection';
import axios from 'axios';

const index = ({ videos }) => {
  const [localraw, setRaw] = useState([]);

  useEffect(() => {
    if(videos) {
      setRaw(videos);
    }
  }, []);


  return (
    <>
      hello{localraw}
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
        videos: JSON.stringify(response.data.raw)
      }
    }
    

}

export default protection(index)