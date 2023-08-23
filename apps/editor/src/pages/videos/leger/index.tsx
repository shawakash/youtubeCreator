import { GetServerSidePropsContext } from 'next';
import React from 'react';
import cookie from 'cookie';

const index = () => {
  return (
    <div>index</div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const cookies = context.req.headers.cookie;
    const parsedCookies = cookie.parse(cookies || '');
    const token = parsedCookies.editorToken;
    
}

export default index;