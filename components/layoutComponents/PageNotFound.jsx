import React from 'react'
import Link from 'next/link'

const NotFoundModel = () => {
    return (
        <div className='pagewrapper h-screen w-screen bg-black flex justify-center items-center'>
            <h1 id='title_404' className='text-red-400 '>404!</h1>
            <h3 id='description_404 text-white'>Page Not Found. Go to <Link href='/'>
                  <button className='text-3xl text-white bg-gray-500 bg-opacity-40 mx-1 flex-1 justify-center items-center px-6 rounded-md h-max py-2 '>
                  Homepage
                  </button>
                </Link> </h3>
        </div>
    )
}

export default NotFoundModel;