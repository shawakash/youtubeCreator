// utils/withAuth.js
import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';

const protection = (WrappedComponent: ComponentType) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      if (!sessionStorage.getItem('creatorToken')) {
        router.push('/login');
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
