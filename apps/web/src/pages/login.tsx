import React, { useEffect } from 'react';
import { LoginForm } from 'ui';
import { LoginType } from 'zodTypes';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useSetRecoilState } from 'recoil';
import { creatorIdAtom } from 'store';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

const login = () => {

    const setCreatorId = useSetRecoilState(creatorIdAtom);
    const router = useRouter();

    const { BASEURL } = process.env;

    const handleSubmit = (data: LoginType) => {
        axios({
            baseURL: BASEURL || 'http://localhost:3000/api',
            url: '/creator/login',
            method: 'POST',
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.data.token);
            Cookies.set('creatorToken', response.data.token);
            sessionStorage.setItem('creatorToken', response.data.token)
            setCreatorId(response.data._id);
            toast.success(response.data.message);
            router.push('/auth');
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

    useEffect(() => {
        if (Cookies.get('creatorToken') || sessionStorage.getItem('creatorToken')) {
            Cookies.remove('creatorToken');
            sessionStorage.clear()
            setCreatorId(null);
            toast.success('Clearing Session :)');
        }
    }, [])

    return (
        <>
            <div className="h-screen bg-gray-100 flex justify-center items-center">
                <LoginForm propData={handleSubmit} client='creator' />
            </div>
        </>
    )
}

export default login;