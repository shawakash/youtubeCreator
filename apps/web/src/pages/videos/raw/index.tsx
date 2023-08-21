import React from 'react'
import { GetServerSidePropsContext } from 'next';
import cookie from 'cookie';
import protection from '../../../../utils/protection';

const index = () => {
  return (
    <>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const cookies = context.req.headers.cookie;
    const parsedCookies = cookie.parse(cookies || '');
    const token = parsedCookies.creatorToken;

    

}

export default protection(index)