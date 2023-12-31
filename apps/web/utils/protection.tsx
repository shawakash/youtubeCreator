// utils/withAuth.js
import axios from 'axios';
import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Protection = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const router = useRouter();
    const { BASEURL } = process.env;

    const init = async () => {
      axios({
        baseURL: BASEURL || 'http://ec2-100-25-221-96.compute-1.amazonaws.com:3000/api',
        url: '/auth/me',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('creatorToken')
        }
      }).then(response => {
        if (!response.data.isValid) {
          toast.error(response.data.message);
          sessionStorage.clear()
          router.push('/login');
        }
      }).catch(err => {
        if (err) {
          if (!err.response.isValid) {
            toast.error(err.response.data.message);
            sessionStorage.clear()
            router.push('/login');
          }
        }
      })
    }

    useEffect(() => {
      if (!sessionStorage.getItem('creatorToken') || sessionStorage.getItem('creatorToken').length == 0) {
        sessionStorage.clear();
        router.push('/login');
      } else {
        init();
      }
    }, []);

    return (
      <>
        <WrappedComponent {...props} />
      </>
    )
  };
};

export default Protection;
