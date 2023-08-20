import React from 'react';
import { SignUpForm } from 'ui';
import { creatorSignup } from 'zodTypes';

const signup = () => {

    const handleSubmit = (data: creatorSignup) => {
        console.log(data);
        const payload: creatorSignup = data
    }

  return (
    <>
        <SignUpForm propData={handleSubmit} url='/admin' />
    </>
  )
}

export default signup