import React,{useEffect, useState} from "react";
import { useRouter } from 'next/router'
import router from 'next/router';
import { motion } from "framer-motion";  //____testing
import Link from "next/link";
// import { ButtonLoader } from "../commons-components/Loader";
import {useSelector, useDispatch} from 'react-redux';
import { updateUserProfile, clearErrors } from "../../redux/actions/userActions";
import { toast } from "react-toastify";
import axios from 'axios'; //remove
import { UPDATE_PROFILE_RESET } from "../../redux/constants/userTypes";
import { ButtonLoader } from "../microComponents/ButtonLoader";



const ProfileModel = () => {

     const dispatch = useDispatch();
     const router = useRouter();

    const [user, setUser] = useState( {
          fName: "",
          sName: "",
          email: "",
          password:""
        });

     const {fName, sName, email, password} = user
 
     const [avatar, setAvatar]  = useState('');
     const [avatarPreview, setAvatarPreview]  = useState('/images/lake.jpg');

    const { user: loadedUser, loading } = useSelector(state => state.auth);
    const { isUpdated, error, loading: updateLoading } = useSelector(state => state.user);

     useEffect(() => {

         if(loadedUser){
                  setUser({ 
                        fName: loadedUser.fName,
                        sName: loadedUser.sName,
                        email: loadedUser.email
                    })
           }
           setAvatarPreview(loadedUser && loadedUser.avatar.url)
         if(error)toast.error(error)
         dispatch(clearErrors);

         if(isUpdated){
             console.log(isUpdated)
             router.push("/");
             dispatch({type: UPDATE_PROFILE_RESET})
         }
     }, [dispatch, isUpdated, error, loadedUser]);
     
       
    const handleFormSubmit = async (e) => {
        e.preventDefault();
     try { 
         
           const userData = { fName, sName, email, password, avatar}
             dispatch(updateUserProfile(userData))
      
       }catch(err) { 
            console.error(err.message);
       }
    
    };

    const handleChange = (e) => {

           if(e.target.name === "avatar") {
               const reader = new FileReader();

               reader.onload = ()=>{
                   if(reader.readyState === 2){

                       setAvatar(reader.result);
                       setAvatarPreview(reader.result);
                       console.log(reader)
                   }
               }

            //    reader.readAsDataURL(e.target.files[0])
               const urlData = reader.readAsDataURL(e.target.files[0])
               console.log(urlData)
           }else{
              setUser({ ...user, [e.target.name]: e.target.value })
           }

      };

    // console.log(avatarPreview)

    return (
        <>

      <motion.section
                  exit={{ opacity: 0 }}
                 className="relative text-gray-700 body-font"
                >
   
   <div className=" flex items-center justify-center bg-gray-0 py-4
         px-4 sm:px-6 lg:px-8">
          {/* <div>
        <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
      
      </div> */}
  
      <div className="bg-grey-lighter   flex flex-col">
              <div className="container  mx-auto flex-1 flex flex-col items-center justify-center px-2">
                  <div className="bg-white px-6 py-8  shadow-md text-black w-full
                       max-w-md  space-y-8 
                       bg-gradient-to-b from-transparent via-yellow-50 to-black p-5 rounded-lg
                     ">
                      <h1 className="mb-8 text-3xl text-center">Updating Your Profile</h1>
  
              <form   
                      onSubmit={handleFormSubmit} 
  
                      className="mt-4 space-y-6" action="http://localhost:3000/" method="POST">
                <div className="flex justify-items-center w-full">
                <div className="w-max mx-1">
                     <input 
                          type="text"
                          className="block border border-grey-light w-full p-2 rounded mb-1"
                          name="fName"
                          value={fName}
                          placeholder="First Name"
                          onChange={handleChange}
                      />
                </div>
                <div className="w-max mx-1">
                     <input 
                          type="text"
                          className="block border border-grey-light w-full p-2 rounded mb-1"
                          name="sName"
                          value={sName}
                          placeholder="Second Name"
                          onChange={handleChange}
                      />
                </div>
                </div>
  
                <div>
                   <input id="email-address" name="email" type="email" autoComplete="email" 
                         required className="appearance-none rounded-none relative block w-full px-3 py-2 border
                                   -gray-300 placeholder-gray-500 text-gray-900 rounded-t-md
                                   focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                       placeholder="email"
                       value={email}
                       onChange={handleChange}

                   />
                </div>
  
                <div>
                    <input id="password" name="password" type="password"
                           autoComplete="current-password" 
                           required className="appearance-none rounded-none relative block w-full px-3 py-2 border
                                        border-gray-300 opacity-40 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none 
                                        focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                          placeholder="password"
                          value={password}
                          onChange={handleChange}

                   />
                </div>


                <div className="flex justify-items-center w-full">
                <figure className="w-14 h-14 rounded-full border-2  mx-1 bg-gray-300 bg-opacity-30 ">
                    <img src={avatarPreview}>
                    </img>
                </figure>
                <div className="w-max mx-1">
                    <input type="file" 
                    className="w-full text-gray-700 px-3 py-2 border rounded"
                    name="avatar"
                    accept="images/*"
                    onChange={handleChange}
                />
                </div>
                </div>
                      <button
                          type="submit"
                          className="w-full text-center  rounded bg-yellow-500 p-3 text-gray-500 hover:bg-green-dark focus:outline-none my-1"
                      >
                     {updateLoading ? <ButtonLoader /> : 'UPDATE'}

                      </button>
                      </form> 
                  </div>
  
              </div>
          </div>
  </div>
  
            
        {/* </motion.div> */}
      </motion.section>        </>
    )
}


export default ProfileModel;