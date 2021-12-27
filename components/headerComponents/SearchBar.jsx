import Link from 'next/link'
import React from 'react';

const SearchBar
 = ({handleCloseOpen}) => {

    return (

        <>
           <div className="bg-indigo-7 h- flex justify-end mx-2 py-1
             ">
                 <div className="flex items-center justify-center w-full bg-gray-800a">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="border-2 border-yellow-600 border-opacity-50 rounded-full bg-white bg-opacity-10 shadow flex w-full">
                            <input
                                type="text"
                                placeholder="search your favorite artist by name, country, medium etc"
                                className="w-full text-xs bg-black bg-opacity-70 rounded-tl-full rounded-bl-full py-2 px-4" />
                            <button className="bg-yellow-200 bg-opacity-50 text-base rounded-tr-full rounded-br-full hover:bg--300 py-2 px-2">
                                <p className="font-thinbold text-base capitalize">Search</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
};

export default SearchBar
;

<div class="flex items-center justify-center w-screen h-screen bg-gray-800">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="border-8 border-red-500 rounded-full bg-white shadow flex w-full">
            <input
                type="text"
                placeholder="Try 'Bagel Seasoning'"
                class="w-full rounded-tl-full rounded-bl-full py-2 px-4" />
            <button class="bg-yellow-300 rounded-tr-full rounded-br-full hover:bg-red-300 py-2 px-4">
                <p class="font-semibold text-base uppercase">Search</p>
            </button>
        </div>
    </div>
</div>