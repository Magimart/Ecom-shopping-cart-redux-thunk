import React,{useEffect, useState} from "react";
import { useRouter } from 'next/router'
import { motion } from "framer-motion";  //____testing
import {signIn} from 'next-auth/client';
import { ErrorMessage } from "../microComponents/ErrorMessages";
import { ButtonLoader } from "../microComponents/ButtonLoader";



const LoginModel = ( ) => {


    const router  = useRouter();
   
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const [loadingButton, setLoadingButton] = useState(false);
       const [errorMsg, setErrorMsg] = useState('');

    // useEffect(() => {

        const handleFormSubmit = async (e) => {
          try{
              e.preventDefault();
        
               setLoadingButton(true);
    
                 const result = await signIn('credentials', {
                    redirect: false,
                     email,
                     password
                 })
                 
                setLoadingButton(false);
    
                console.log(result)
    
                   if(result.error){
                     console.log(result.error)
                    //  toast.error(result.error);
                     setErrorMsg(result.error);
                    }else{
                           window.location.href = '/'
                          // console.log("rediring to home page")
                    }
                  }catch(err){
                   console.Error(err.message)
                  }

              }    
       //    }, [])  
      


     return(

    <>
        login
    </>
  )
}

export default LoginModel;


