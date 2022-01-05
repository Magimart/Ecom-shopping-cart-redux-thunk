//________________________________________________leftwidget
import React, {useState, useEffect} from 'react';
import { motion } from "framer-motion";  //____testing
import axios from 'axios';
import { useRouter } from 'next/router'
import { toast } from "react-toastify";
import {useSelector, useDispatch} from 'react-redux';
import { publishheaderInfo, clearErrors } from '../../redux/actions/appInfoActions';


{publishheaderInfo }
export const PublishAppInfoModule = ( ) => {

  const dispatch = useDispatch();
  const router = useRouter();
  const { success, error, loading } = useSelector(state => state.info)


    const [errorMsg, setErrorMsg] = useState('');
    const [userInputs, setUserInputs] = useState({
                            pageTitle: '',
                             subTitle:'' ,
                             siteIntro: ''
     });


    // const {pageTitle, subTitle, siteIntro } = info


  useEffect(() => {
       if(success)  {
           router.push('/about')
      }
       if(error)toast.error(error)
       dispatch(clearErrors);

  }, [dispatch, error, success, router]);


  
       const handleChange = (e) => {
  
         setUserInputs({
           ...userInputs,   [e.target.name]: e.target.value
         });
       };

       console.log(userInputs)
  
      const handleFormSubmit = async (e) => {
          e.preventDefault();
       try {                                                              
              
        const {pageTitle, subTitle, siteIntro} = userInputs;
        // const userData = { pageTitle: userInputs.pageTitle, subTitle: userInputs.subTitle, siteIntro: userInputs.siteIntro}


        const userData = { pageTitle, subTitle, siteIntro}

        console.log("here are the user info data------------------------")
        console.log(userData)

              dispatch(publishheaderInfo(userData)); // create header publishheaderInfo function
    
         }catch(err) { 
              console.error(err.message);
         }
      
      };
  
      console.log(errorMsg)
  
    return (
            <>
            add something
            </>
    );
  };
  
  