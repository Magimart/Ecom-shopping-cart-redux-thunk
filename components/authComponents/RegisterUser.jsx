import React,{useEffect, useState} from "react";
import { useRouter } from 'next/router'
import router from 'next/router';
import { motion } from "framer-motion";  //____testing
import Link from "next/link";
// import { ButtonLoader } from "../commons-components/Loader";
import {useSelector, useDispatch} from 'react-redux';
import { registerUser, clearErrors } from "../../redux/actions/userActions";
import { toast } from "react-toastify";


const RegisterUserModel = () => {

    const defaultImage = "images/user_profile/default-user-image.png"

    const dispatch = useDispatch();
    const router = useRouter();

    const [user, setUser] = useState( {
          fName: "",
          sName: "",
          address:"",
          country:"",
          email: "",
          password:""
        });

 
     const [avatar, setAvatar]  = useState('');
     const [avatarPreview, setAvatarPreview]  = useState(defaultImage);

    //  const { success, error, loading } = useSelector(state => state.auth)
    // const success = useSelector(state => state.auth)
     const { success, error, loading } = useSelector(state => state.newUser)


    useEffect(() => {
         if(success)  {
             router.push('/login')
        //  console.log(success)
        }
          if(error)toast.error(error)
         dispatch(clearErrors);

     }, [dispatch, error, success]);


     const {fName, sName, email, country, address, password} = user

  
    const handleFormSubmit = async (e) => {
            e.preventDefault();
        try { 
         
             const userData = { fName, sName, country, address, email, password, avatar}

               console.log(userData)
            dispatch(registerUser(userData))

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
                   }
            }

            //    reader.readAsDataURL(e.target.files[0])
               const urlData = reader.readAsDataURL(e.target.files[0])
            //    console.log(urlData)


           }else{
              setUser({ ...user, [e.target.name]: e.target.value })
         
           }
      };

    console.log(user)
    // console.log(avatarPreview)

    return (
        <>
             
              add
        </>
    )
}


export default RegisterUserModel;