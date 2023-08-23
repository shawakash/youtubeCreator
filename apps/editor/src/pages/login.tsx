import React, { useEffect } from 'react';
import { LoginForm } from 'ui';
import { LoginType } from 'zodTypes';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { editorIdAtom } from 'store';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

const login = () => {

    const setEditorId = useSetRecoilState(editorIdAtom);
    const router = useRouter();

    const { BASEURL } = process.env;

    const handleSubmit = (data: LoginType) => {
        axios({
            baseURL: BASEURL || 'http://localhost:3000/api',
            url: '/editor/login',
            method: 'POST',
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.data.token);
            sessionStorage.setItem('editorToken', response.data.token)
            setEditorId(response.data._id);
            toast.success(response.data.message);
            router.push('/videos/raw');
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
        if (sessionStorage.getItem('editorToken')) {
            sessionStorage.clear()
            setEditorId(null);
            toast.success('Clearing Session :)');
        }
    }, [])

    return (
        <>
            <div className="h-screen bg-gray-100 flex justify-center items-center">
                <LoginForm propData={handleSubmit} client='editor' />
            </div>
        </>
    )
}

export default login;