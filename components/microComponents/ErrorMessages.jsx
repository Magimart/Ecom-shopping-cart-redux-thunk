import React from 'react';


export const ErrorMessage = ({errorMsg} ) => {


    return (
        <div className="absolute z-10 top-10">
        <h1 className="text-red-400  py-  bg-black px-4 m-2 bg-opacity-60">
          {
            errorMsg && errorMsg                     
          }
        </h1>
        
       </div>
    )
}