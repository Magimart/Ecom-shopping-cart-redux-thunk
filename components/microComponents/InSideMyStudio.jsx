import React from "react";

  export const InsindeMyStudio = ( ) => {
    
    return (
 
          <>
           <div className=" p-0 m-0
                          xxs:col-span-fulla
                          xs:col-span-fulla
                          sm:col-span-fulla
                          md:col-span-6a
                          lg:col-span-6a
                          xl:col-span-6a
                          h-full
                          relative
                          w-1/3a
                         bg-indigo-600
                         bg-opacity-40
                         row-span-3 col-span-1
                         xxs:row-span-1 xxs:col-span-3
                         xs:row-span-1 xs:col-span-3
                         sm:row-span-1 sm:col-span-3
                       "
                   >
                     <div className="avatarWrapper text-white sans-serif
                             ">
                              {/* left--- */}

                              <div className="span-cols-full block justify-center bg-opacity-60 rounded-md m-4 
                                          bg-black 
                                          "
                              >
                             <h1 className="text-gray-200 mx-2 my-1 py-1 
                              m-2 p-4  text-3xl
                             ">
                               inside my <span className="font-bold xl:text-6xl xxl:text-6xl
                                                         focus:ring bg-clip-text  
                                                         text-transparent 
                                                         bg-gradient-to-r from-white via-green-300 to-red-500
                                                        "
                                          >
                                 StudioLab
                                 </span><br></br>
                               <span className="text-indigo-400 text-xl py-1 
                               bg-black rounded-full  px-2 bg-opacity-90
                               ">
                                 🔉 Coming<span className="text-red-400">Up</span>!
                               </span>
                             </h1>                       
                               <p className="text-yellow-200 text-xs md:text-base lg:text-base 
                               xl:text-lg xxl:text-lg mx-3 flex justify-center my-3 py-2 ">
                                 <span className="text-2xl mx-2">🎧
                                    </span> stay tuned !
                               </p>

                             </div>             
                      </div>
                   </div>

          </>

)}