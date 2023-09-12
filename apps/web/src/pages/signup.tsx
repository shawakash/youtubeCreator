import React, { useEffect } from 'react';
import { SignUpForm } from 'ui';
import { creatorSignup } from 'zodTypes';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useSetRecoilState } from 'recoil';
import { creatorIdAtom } from 'store';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

const Signup: React.FC = () => {

  const setCreatorId = useSetRecoilState(creatorIdAtom);
  const router = useRouter();

  const { BASEURL } = process.env;

  const handleSubmit = (data: creatorSignup) => {
    axios({
      baseURL: BASEURL || 'http://ec2-100-25-221-96.compute-1.amazonaws.com:3000/api',
      url: '/creator/signup',
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
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
      setCreatorId(null);
      sessionStorage.clear()
      toast.success('Clearing Session :)');
    }
  }, [])

  return (
    <>
      <div className="h-screen bg-gray-100 flex justify-center items-center">
        <SignUpForm propData={handleSubmit} client='creator' />
      </div>
    </>
  )
}

export default Signup;