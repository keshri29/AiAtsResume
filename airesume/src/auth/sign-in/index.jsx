/* eslint-disable no-unused-vars */
import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import { cn } from './../../lib/utils';

const SignInPage = () => {
  return (
    <div className='flex justify-center my-10 items-center'>
        <SignIn />
    </div>
  )
}

export default SignInPage