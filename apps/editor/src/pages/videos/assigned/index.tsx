import React, { useEffect } from 'react'
import protection from '../../../../utils/protection'
import { GetServerSidePropsContext } from 'next';
import cookie from 'cookie';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { assignedVideosAtom, editorIdAtom } from 'store';
import { legerType } from 'zodTypes';
import { VideoCard } from 'ui';

const Assigned: React.FC<{ assigned: legerType[] }> = ({ assigned }) => {
    const [assignedVideos, setAssignedVideos] = useRecoilState(assignedVideosAtom);
    const editorId = useRecoilValue(editorIdAtom);

    useEffect(() => {
        setAssignedVideos(assigned);
    }, [])

    return (
        <>
            <div className="flex flex-wrap p-10 gap-8 justify-center items-center h-screen bg-gray-100">
                {/* @ts-ignore */}
                {assignedVideos.length > 0 && assignedVideos.map(rv => <VideoCard clientId={editorId} key={rv._id} video={rv.rawVideo} type='assigned' />)}
            </div>
        </>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const cookies = context.req.headers.cookie;
    const parsedCookies = cookie.parse(cookies || '');
    const token = parsedCookies.editorToken;

    const { BASEURL } = process.env;

    try {

        const response = await axios({
            baseURL: BASEURL,
            url: '/video/getAssignedVideos',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });

        return {
            props: {
                assigned: response.data.video
            }
        }

    } catch (error) {
        console.log(error);
        return {
            props: {
                assigned: [],
                error
            }
        }
    }
}

export default protection(Assigned);

