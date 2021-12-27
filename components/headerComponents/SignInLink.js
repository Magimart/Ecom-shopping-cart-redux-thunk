import Link from 'next/link'
import React from 'react';

const SignInLink = ({handleCloseOpen}) => {

    return (

        <>
           <div className="bg-indigo-70 h-8 flex justify-center mx-2 py-1
             ">
              <Link href="/login"
                   onClick={()=> handleCloseOpen()}               

              >
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
              >
                         sign in
                </button>
              </Link>
            </div> 
        </>
    )
};

export default SignInLink;

