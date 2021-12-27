import {signOut } from 'next-auth/client';
import React from 'react';
import SignInLink from './SignInLink';
import { useRouter } from 'next/router'
import { useViewport, ViewportProvider } from "../../utils/helpers/ViewPortWindow";

export const SignOut = ({session, liveUser})=> {

       const router = useRouter()
       const { width } = useViewport();
       const breakpoint = 768;

  return (
  
    <>
    <div className=" bg-green-40  h-20 mx-2 ">
     {/* {
       session && liveUser? ( */}
       <>
        <button className={`
                            w-8
                            h-8
                            text-xs
                            bg-gradient-to-r from-yellow-500 via-green-900 to-black
                            hover:from-yellow-500 hover:via-red-600 hover:to-yellow-600                                 
                            text-white
                            ring ring-green-600 
                            ring-offset-1 ring-offset-green-100       
                          `}
           onClick={() => signOut()}>
              Sign out
        </button>
      </>
      {/* ):(
        // <SignInLink/>
        ""
        ) */}

     {/* } */}
    </div>
    </>
  )
  
  }





