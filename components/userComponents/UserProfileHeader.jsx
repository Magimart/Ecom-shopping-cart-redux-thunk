import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {useSession} from 'next-auth/client';
import { isCurrentUser } from "../../redux/actions/userActions";
import Link from "next/link";

const UserProfileHeader = ( ) => {

    const defaultImage = '/images/user_profile/default-user-image.png';
    const [liveUser, setLiveUser]  = useState([]);
    const [userImage, setUserImage]  = useState("")
    const dispatch = useDispatch();
      
    const {user, loading} = useSelector(state => state.isCurrentUser)
    
  useEffect(() => {
    if (!user) {
      dispatch(isCurrentUser())
    }
      setLiveUser(user && user.fName);
      setUserImage(user && user.avatar.url);
     
  }, [dispatch, user])


    return (

        <>                            
           <div className="headerWrpper  flex justify-end h-90 bg-gray-300  bg-opacity-10">
                       
                       <div className="imageCover relative top-44 justify-center w-max h-20 ">
                           <h1 className="imageCoverTitle mx-2 text-5xl text-gray-100 opacity-20 ">
                               add your cover image
                           </h1>
                       </div>
                   <header className="  block  m-6 bg-blue-400 bg-opacity-90 p-4 rounded-md md:py-8">
   
                   <div className="md:w-3/12 mx-16 "  >
                         {/* <img className="w-40 h-40 md:w-40 md:h-40 object-cover rounded-full
                               border-2 border-yellow-600 p-1" 
                               src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="profile"
                          /> */}
                      <img className="object-cover rounded-full w-40 h-40 md:w-40 md:h-40 border-2 border-yellow-600 p-1"
                          src={user? userImage : defaultImage} 
                          alt={liveUser}
                       /> 
                   </div>
                            
                  <div className=" my-4   w-max bg-blue-300">
                     <div className="    flex-wrap items-center ">
                         <div className="min-h-xs w-full hero-image px-12 bg-black bg-opacity-">

                            <div className="signedAsWrap flex justify-end bg-whit h-10 w-full mt-6 
                            bg-gradient-to-r from-transparent via-white to-transparent
                            ">
                            <div>
                            {/* reserv */}
                            </div>
                            <div className=" bg-gray-900  w-max">
                                        <p className=" text-yellow-100 justify-self mx-6 text-xl
                                       ">
                                    Signed in as <span className="text-red-500">user</span>
                                 </p> 
                            </div>
                            <div className="mr-6 ml-2 w-max z-10">
                                more
                                 </div>
                                       </div>
                                           <div className="min-h-md justify-center mt-5">
                                                <div>
                                                    <ul className="bg-white flex space-x-2 p-1 h-8 w-max bg-opacity-20">
                                                        <li className="bg-yellow-400 w-max ">
                                                        <span className="text-xs font-semibold  p-1" >1365</span>
                                                                posts
                                                        </li>
                                    
                                                        <li className="bg-yellow-400 w-max">
                                                        <span className="text-xs font-semibold p-1">40.5k</span>
                                                                followers
                                                        </li>
                                                        <li className="bg-yellow-400 w-max">
                                                        <span className="text-xs font-semibold p-1">302</span>
                                                                following
                                                        </li>
                                                    </ul>
                                                </div>
                                
                                                <div className="">
                                                    <span className="text-white py-2">Travel, Nature and Music
                                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                                    </span>
                                                </div>
                                           </div>
                                       </div>
                                  </div>
                              </div>
   
                              <div className=" text-sm m-1 p-4 bg-yellow-100 bg-opacity-20">
                            <ul className="bg-white flex space-x-2 p-1 w-max bg-opacity-20">
                                <li className="bg-yellow-400 w-max">
                                    <span className="text-xs font-semibold p-1">
                                        {/* my orders_____ */}
                                        {user?(<Link href='/orders/me'>
                                                    <button className="dropdown-item">your orders</button>
                                                </Link>) : ("")
                                            }
                                    </span>
                                    </li>
                                    <li className="bg-yellow-400 w-max">
                                    <span className="text-xs font-semibold  p-1" >products</span>
                                    </li>
            
                                    <li className="bg-yellow-400 w-max">
                                    <span className="text-xs font-semibold p-1">dashboard</span>
                                    </li>
                                    <li className="bg-yellow-400 w-max">
                                    <span className="text-xs font-semibold p-1">settings</span>
                                    </li>
                            </ul>
                   </div>
   
                   </header>
               </div>

        </>
    )
}
export default UserProfileHeader;