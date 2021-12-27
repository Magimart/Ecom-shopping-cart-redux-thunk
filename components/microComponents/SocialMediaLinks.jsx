import React, { useState, useEffect, useRef } from "react";

export const SocialComponents = ({tongleOnClick}) => {


 // const mySocialLinks = [ {mediaName: "linkedIn"}];

  return (
          <>

            <div className={` 
                 socialLinks h-12 bg-${tongleOnClick?"white":""} w-full px-7  flex gap-x-1 grid-cols-12 
                text-xs justify-center border-t border-green-600` }
            >
             



               <div className="rounded-md hover:from-gray-100 hover:to-green-900
                  p-2  bg-gradient-to-r from-green-300 to-green-500
                    m-2
                    ">
                        {/* fb */}
                  <a className="text-gray-500 ">
                 <svg
                   fill="currentColor"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   className="w-5 h-5"
                   viewBox="0 0 24 24"
                 >
                   <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                 </svg>
               </a>
              </div>
                        {/* -----git */}
               <div className="text-sm rounded-md hover:from-gray-100 hover:to-green-900
                 p-2 m-2 bg-gradient-to-r from-transparent 
                 to-green-500"
               >
               <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 16 16"
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                className="w-6 h-7"
                viewBox="1 5 14 12"
                >
          <g className="icon-color">
             <path d="M5.9 6.4c.2.2.4.6.4 1.1 0 1.2-1 2-2.4 2-.4 0-.7 0-.9-.1l-.3.5 1.1.1c1.9.1 3.1.2 3.1 1.7 0 1.3-1.1 2-3.1 2S1 13.2 1 12.3c0-.5.2-.8.6-1.1-.4-.2-.5-.4-.5-.7 0-.2.1-.5.3-.7.2-.3.5-.5.7-.8-.5-.3-1-.8-1-1.7 0-1.3.8-2.2 2.5-2.2.5 0 .8 0 1 .1h2.2v.9l-.9.3zm-3.3 5c-.1.2-.3.4-.3.6 0 .4.6.6 1.3.6.6 0 1.5 0 1.5-.6 0-.4-.4-.4-1-.4l-1.5-.2zm1.2-5.1c-.6 0-1.1.3-1.1 1 0 .5.3.9 1 .9.6 0 1-.4 1-.9.1-.6-.2-1-.9-1zM7.4 11v-.9H8c.2 0 .2-.1.2-.2V6.6c0-.1 0-.2-.1-.2l-.7-.3.1-.9h2.3v4.6c0 .2 0 .2.2.2l.6.1v.9H7.4zm1.5-6.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .3 1 1-.4 1-1 1zM15 10.6c-.5.2-1.2.4-1.8.4-1.3 0-1.8-.5-1.8-1.8V6.3c0-.1 0-.1-.1-.1h-.8v-1c1-.1 1.4-.6 1.5-1.8h1V5c0 .1 0 .1.1.1h1.6v1.1H13v2.7c0 .7.2.9.8.9.3 0 .6-.1.9-.2l.3 1z"/>
        </g>
        </svg>
              </div>



                        {/* -----linke */}

              <div className="text-sm rounded-md hover:from-gray-100 hover:to-green-900
                  p-2 m-2 bg-gradient-to-r from-transparent to-green-600">
      <svg xmlns="http://www.w3.org/2000/svg" 
                   fill="currentColor"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="4"
                   className="w-6 h-7"
                   viewBox="1 5 14 12">
              <g className="icon-color">
              <path d="M15 2v12c0 .6-.5 1-1 1H2c-.6 0-1-.5-1-1V2c0-.6.5-1 1-1h12c.5 0 1 .5 1 1zM5.1 6.4h-2V13h2.1V6.4zm.2-2.3c0-.7-.5-1.2-1.2-1.2s-1.2.5-1.2 1.2.5 1.2 1.2 1.2c.6 0 1.2-.5 1.2-1.2zm7.6 4.8c0-2-1.3-2.8-2.5-2.8-.8 0-1.6.4-2.1 1.1v-.8H6.4V13h2.1V9.4C8.3 8.7 8.9 8 9.6 8h.1c.7 0 1.1.4 1.1 1.4v3.5h2.1v-4z"/>
            </g>
        </svg>
             </div>



             <div className="rounded-md hover:from-gray-100 hover:to-green-900
                m-2 p-2 bg-gradient-to-r from-green-300 to-green-900">
               <a className=" text-gray-500">
                 <svg
                   fill="currentColor"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   className="w-5 h-5"
                   viewBox="0 0 24 24"
                 >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                 </svg>
               </a>
             </div>

             <div className="rounded-md hover:from-gray-100 hover:to-green-800
                  bg-gradient-to-r from-green-400 to-black
                  m-2 p-2
                  ">
               <a className=" text-gray-500">
                 <svg
                   fill="none"
                   stroke="currentColor"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   className="w-5 h-5"
                   viewBox="0 0 24 24"
                 >
                   <rect
                     width="20"
                     height="20"
                     x="2"
                     y="2"
                     rx="5"
                     ry="5"
                   ></rect>
                   <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                 </svg>
               </a>
             </div>

             <div className="rounded-md hover:from-gray-100 hover:to-green-900
                p-2 m-2 bg-gradient-to-r from-green-500 to-black">
               <a className=" text-gray-500">
                 <svg
                   fill="currentColor"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   className="w-5 h-5"
                   viewBox="0 0 24 24"
                 >
                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                 </svg>
               </a>
             </div> 
           </div>

         </>
  );
};

