import React  from "react";
import Link from 'next/link'



export const ProjectLink = ({projectDataOne, data}) => {

    
    return (
        <>
           <Link href={projectDataOne && data.projectLink}> 
   
                <div className="col-span-6  p-2 relative
                           rounded-xl
                           bg-gradient-to-b from-gray-600 via-yellow-500  to-transparent
                            hover:from-transparent hover:to-gray-900 
                           bg-opacity-25
                           m-2 h-max
                          w-4/6 
                          bg-red-800
                          xxs:grid   xxs:rounded-tr-none xs:-left-3
                          xs:grid  xs: xs:rounded-tr-none 
                          sm:grid   sm:w-1/2 sm:rounded-tr-none
                          md:grid   md:w-1/2 md:rounded-tr-none
                          lg:grid   lg:w-4/6 lg:h-48 lg:rounded-tr-none
                          xl:grid   xl:w-4/6 xl:h-32 xl:rounded-tr-none
                         shadow-4xl
                       "
                >
                   <div className="relative my-1 mx-0.5  flex-shrink-grow  h-full 
                                xxs:my-2 xxs:h-20 xs:w-20  xxs:mx-0 xxs:top-0 xxs:left-1
                                xs:my-2 xs:h-20 xs:w-20  xs:mx-0 xs:top-0 xs:left-1
                                sm:my-2 sm:h-28 sm:w-28  sm:mx-0 sm:left-5
                                md:my-2 md:h-28 md:w-28  md:mx-0 md:left-5
                                lg:my-2 lg:h-28 lg:w-28  lg:mx-0 lg:left-8 lg:top-6
                                xl:my-2 xl:h-32 xl:w-32 xl:mx-0 xl:left-8  lg:top-6 xl:top-5
                               shadow-xl
                               
                               bg-circle rounded-full opacity-75 
                               xxs:w-20
                               xs:w-20
 
                            "
                    >
                   <div className="relative m-2 p-3 left-5 top-7
                                  xxs:-top-2 xxs:left-0   
                                  xs:-top-2 xs:left-0   
                                 "
                    >
                       <div className=" text-black opacity-80 relative left-1
                                         xxs:-top-2 
                                         xs:-top-2 
                                         sm:-top-7 sm:-left-2
                                         md:-top-7 md:-left-2
                                         lg:-top-7 lg:-left-2
                                         xl:-top-7 xl:-left-2
                       ">
                           <span  className="text-2xl font-semibold
                                                  xxs:text-lg 
                                                  xs:text-lg 
                                             " >{data.projectName }</span>
                                <span className=" mx-1 ml-5  bg-black text-white 
                                                     relative top-5 border-4 border-yellow-600
                                                     px-1 py-0.5 rounded-full
                                                     hover:bg-green-900 hover:text-blue-200 
                                                     -left-12 top-6 
                                                     sm:-left-16 sm:top-9
                                                     sm:text-sm  sm:px-2 sm:py-1 sm:py-1 
                                                     md:text-sm md:px-2 md:py-1 md:top-8
                                                     lg:text-sm lg:px-2 lg:py-1 lg:top-8
                                                     xl:text-sm xl:px-2 xl:py-1 xl:top-8
                                                    ">
                                      {data.subtitle[0]}
                                </span>
                        </div>
                     <div className="text-md opacity-75 mt-3 ml-5  font-semibold"><span className="text-red-50 relative top-1">{data.subtitle[1]}</span></div>
                  </div>
               </div>
              </div>
             </Link>
        </>

)}





export const ProjectLinkTwo = ({projectDataTwo, data}) => {
    
    return (
        <>

           <Link href={projectDataTwo && [...data.projectLink]?("/" ):("/about")}> 
   
                <div className="col-span-6  p-2 relative
                           rounded-lg
                           bg-gradient-to-b from-green-600 via-blue-500  to-transparent
                            hover:from-transparent hover:to-gray-900 
                           bg-opacity-25
                           m-2 h-max 
                          w-4/6
                          bg-red-800
                          xxs:grid   xxs:rounded-tr-none xs:-left-3
                          xs:grid  xs: xs:rounded-tr-none
                          sm:grid   sm:w-1/2 sm:rounded-tr-none
                          md:grid   md:w-1/2 md:rounded-tr-none
                          lg:grid   lg:w-4/6 lg:h-38 lg:rounded-tr-none
                          xl:grid   xl:w-4/6 xl:h-32 xl:rounded-tr-none
                         shadow-4xl
                       "
                >
                   <div className="relative my-1 mx-0.5 -top-1 flex-shrink-grow  
                   h-full 
                                xxs:my-2 xxs:h-20 xs:w-20  xxs:mx-0 xxs:top-0 xxs:left-1
                                xs:my-2 xs:h-20 xs:w-20  xs:mx-0 xs:top-0 xs:left-1
                                sm:my-2 sm:h-28 sm:w-28  sm:mx-0 sm:left-5
                                md:my-2 md:h-28 md:w-28  md:mx-0 md:left-5
                                lg:my-2 lg:h-28 lg:w-28  lg:mx-0 lg:left-8 lg:top-6
                                xl:my-2 xl:h-32 xl:w-32 xl:mx-0 xl:left-8  lg:top-6 xl:top-5
                               shadow-xl

                               bg-circle rounded-full opacity-75 
                               xxs:w-20
                               xs:w-20
 
                            "
                    >
                   <div className="relative m-2 p-3 left-5 top-7
                                  xxs:-top-2 xxs:left-0   
                                  xs:-top-2 xs:left-0   
                                 "
                    >
                       <div className=" text-black opacity-80 relative left-1
                                         xxs:-top-2 
                                         xs:-top-2 
                                         sm:-top-7 sm:-left-2
                                         md:-top-7 md:-left-2
                                         lg:-top-7 lg:-left-2
                                         xl:-top-7 xl:-left-2
                       ">
                           <span  className="text-2xl font-semibold
                                                  xxs:text-lg 
                                                  xs:text-lg 
                                             " >{data.projectName }</span>
                                <span className=" mx-1 ml-5  bg-black text-white 
                                                     relative top-5 border-4 border-yellow-600
                                                     px-1 py-0.5 rounded-full
                                                     hover:bg-green-900 hover:text-blue-200 
                                                     -left-12 top-6
                                                     sm:-left-16 sm:top-9
                                                     sm:text-sm  sm:px-2 sm:py-1 sm:py-1 
                                                     md:text-sm md:px-2 md:py-1 md:top-8
                                                     lg:text-sm lg:px-2 lg:py-1 lg:top-8
                                                     xl:text-sm xl:px-2 xl:py-1 xl:top-8
                                                    ">
                                      {data.subtitle[0]}
                                </span>
                        </div>
                     <div className="text-md opacity-75 mt-3 ml-5  font-semibold"><span className="text-red-50 relative top-1">{data.subtitle[1]}</span></div>
                  </div>
               </div>
              </div>
             </Link>
        </>

)}








