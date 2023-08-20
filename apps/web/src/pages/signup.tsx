import React from 'react';
import { SignUpForm } from 'ui'

const signup = () => {

    const handleSubmit = (data: any) => {
        console.log(data)
    }

  return (
    <>
        <SignUpForm propData={handleSubmit} url='/admin' />
    </>
  )
}

export default signup