import axios from 'axios'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast';
//@ts-ignore
import protection from '../../utils/Protection';

const Auth: React.FC = () => {
    const router = useRouter();
    const { BASEURL } = process.env;
    const handleAuth = () => {
        axios({
            baseURL: BASEURL || 'http://localhost:3000/api',
            url: '/auth/get',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('creatorToken'),
                'Access-Control-Allow-Origin': "http://localhost:3000"
            }
        }).then(async (response) => {
            toast.success('Redirecting to auth page :) ')
            router.push(response.data.authUrl)
        }).catch(err => {
            if (err) {
                if (err.response) {
                    toast.error(err.response.data.message);
                    return;
                }
                toast.error(err.message);
                return;
            }
        })
    }

    // useEffect(() => {
    //     if(!sessionStorage.getItem('creatorToken')) {
    //         toast.error('Session Expired');
    //         Cookies.remove('creatorToken');
    //         router.push('/login');
    //     }
    // }, [])

  return (
    <button onClick={handleAuth} >Auth</button>
  )
}

export default protection(Auth);