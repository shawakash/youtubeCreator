import React, { useEffect } from 'react';
import { SignUpForm } from 'ui';
import {editorSignup } from 'zodTypes';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useSetRecoilState } from 'recoil';
import { editorIdAtom } from 'store';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

const Signup: React.FC = () => {

  const setEditorId = useSetRecoilState(editorIdAtom);
  const router = useRouter();

  const { BASEURL } = process.env;

  const handleSubmit = (data: editorSignup) => {
    axios({
      baseURL: 'http://ec2-100-25-221-96.compute-1.amazonaws.com:3001/api',
      url: '/editor/signup',
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
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
      setEditorId(null);
      sessionStorage.clear()
      toast.success('Clearing Session :)');
    }
  }, [])

  return (
    <>
      <div className="h-screen bg-gray-100 flex justify-center items-center">
        <SignUpForm propData={handleSubmit} client='editor' />
      </div>
    </>
  )
}

export default Signup;