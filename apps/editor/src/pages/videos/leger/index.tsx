import { GetServerSidePropsContext } from 'next';
import React, { useEffect } from 'react';
import cookie from 'cookie';
import axios from 'axios';
import { legerType } from 'zodTypes';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { editorIdAtom, legersAtom } from 'store';
import { LegerCard } from 'ui';
import protection from '../../../../utils/protection';

const Index: React.FC<{ legers: legerType[] }> = ({ legers }) => {

  const [localLegers, setLegers] = useRecoilState(legersAtom);
  const editorId = useRecoilValue(editorIdAtom);
  const setAllLegers = useSetRecoilState(legersAtom);

  useEffect(() => {
    if(localLegers.length === 0) {
      setLegers(legers);
      setAllLegers(legers)
    }
  }, []);

  return (
    <>
      <div className="h-screen bg-gray-100 flex flex-wrap justify-center items-center gap-16">
        {localLegers && localLegers.map(lc => <LegerCard clientId={editorId} key={lc._id} leger={lc} />)}
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {

    const cookies = context.req.headers.cookie;
    const parsedCookies = cookie.parse(cookies || '');
    const token = parsedCookies.editorToken;

    const { BASEURL } = process.env;

    const response = await axios({
      baseURL: BASEURL || 'http://ec2-100-25-221-96.compute-1.amazonaws.com:3001/api',
      url: '/video/getLegers',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });

    const legers = response.data.legers;

    return {
      props: {
        legers: legers
      }
    }
  } catch (error) {
    if(error) {
      console.log(error);
      throw Error('Internal Error');
    }
    return {
      props: {
        legers: []
      }
    }
  }


}

export default protection(Index);