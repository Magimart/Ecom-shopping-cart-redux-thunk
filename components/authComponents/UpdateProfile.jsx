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
       update
      </>
    )
}


export default ProfileModel;