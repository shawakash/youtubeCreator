// utils/withAuth.js
import axios from 'axios';
import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const protection = (WrappedComponent: ComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const { BASEURL } = process.env;

    const init = async () => {
      axios({
        baseURL: BASEURL || 'http://localhost:3001/api',
        url: '/auth/me',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('editorToken')
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
      if (!sessionStorage.getItem('editorToken') || sessionStorage.getItem('editorToken').length == 0) {
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

export default protection;
