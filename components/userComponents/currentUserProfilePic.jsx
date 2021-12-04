
import React, { useEffect, useState } from "react";
import { motion} from "framer-motion";  
import { useDispatch, useSelector } from 'react-redux';
import {useSession} from 'next-auth/client';
import { isCurrentUser } from '../../redux/actions/userActions';



export const CurrentUserImage = ()=> {

       const defaultImage = '/images/user_profile/default-user-image.png';
       const session = useSession();

       const [liveUser, setLiveUser]  = useState("")
       const [userImage, setUserImage]  = useState("")

   
         const dispatch= useDispatch();
         const {user, loading} = useSelector(state => state.isCurrentUser)
         
       useEffect(() => {
         if (!user) {
           dispatch(isCurrentUser())
         }
           setLiveUser(user && user.fName);
           setUserImage(user && user.avatar.url);
          
       }, [dispatch, user])

    return (
            <figure className="fixed w-8 h-8  rounded-full 
                               bg-gradient-to-r from-transparent red-300 via-yellow-600 to-black
                            hover:from-transparent via-green-100 hover:to-gray-500                            text-white text-xs 
                            ring ring-yellow-600
                             ring-offset-1 
                            ring-offset-green-100
                            box-content 
                            relative top-1
                        "
            >                 
                <>
                   
                      <img className="object-cover h-full  w-full rounded-full"
                          src={user? userImage : defaultImage} 
                          alt={liveUser}
                       />                 
                </>

            </figure>
    )
}