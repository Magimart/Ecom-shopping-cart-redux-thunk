import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect, useState, useMemo, useCallback} from 'react';
import UserSideNav from './UserSideNav';
import UserContent from './UserContents';
import UserProfileHeader from './UserProfileHeader';
// import { CurrentUserImage } from "../userComponents/currentUserProfilePic";

  const UserProfileModels = () =>  {    

          return (
                   <div className="grid  h-full w-full  bg-gray-900 b bg-opacity-80 ">
                            <div className="userContentWrapper ">
                                <UserProfileHeader/>
                            </div>                      
                    <div className="grid grid-cols-3 gap-1 md:p-2 md:p-2 lg:p-2 xl:p-2 xxl:p-2">
                               <div className="block col-span-3  md:col-span-1 lg:col-span-1 xl:col-span-1 xxl:col-span-1 
                                               w-full bg-gray-400 bg-opacity-20 py-16
                                               md:px-3 lg:px-3 xl:px-4 xxl:px-6
                                              "
                                >
                                   <div className=" mt-6 py-3 bg-white bg-gray-700  text-white md:rounded-md lg:rounded-md xl:rounded-md xxl:rounded-md">
                                        <UserSideNav/>
                                    </div>
                                    <div className=" mt-6 py-3 px-6 bg-white bg-gray-700  text-white md:rounded-md lg:rounded-md xl:rounded-md xxl:rounded-md">
                                           more items                                       
                                    </div>
                              </div>
                              <div className="userContentWrapper  col-span-2a  md:col-span-2 lg:col-span-2 xl:col-span-2 xxl:col-span-2                                    
                                           w-full bg-gray-600a bg-black bg-opacity-20 py-10 
                                           sm:flexa justify-centera  
                                           xxs:w-screen xs:w-screen sm:w-screen                                        
                                        "                            >    
                                    <div className=' xxs:w-screen xs:w-screen sm:w-screen'>
                                        <UserContent/> 
                                    </div>                              
                               </div>
                        </div>
                    </div>
               )
}

export default UserProfileModels;



