//________________________________________________leftwidget
import React, {useState, useEffect} from 'react';
import { motion } from "framer-motion";  //____testing
import axios from 'axios';
import { useRouter } from 'next/router'
import { toast } from "react-toastify";
import {useSelector, useDispatch} from 'react-redux';
import { updateAppInfoSectionOne, clearErrors } from "../../redux/actions/appInfoActions";



export const UpdateAppInfoModule = ( ) => {

  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query

  const { success, error, loading } = useSelector(state => state.info)


    const [errorMsg, setErrorMsg] = useState('');
    const [userInputs, setUserInputs] = useState({
                            pageTitle: '',
                             subTitle:'' ,
                             siteIntro: ''
     });

    //  const { loading, error, isUpdated } = useSelector(state => state.info)
    //  const { loading: roomDetailsLoading, error: roomDetailsError, room } = useSelector(state => state.roomDetails)
 





  
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

              dispatch(updateAppInfoSectionOne(userData)); // create header publishheaderInfo function
    
         }catch(err) { 
              console.error(err.message);
         }
      
      };
  
      console.log(errorMsg)
  
    return (
            <>
              <motion.section
                        exit={{ opacity: 0 }}
                        className="relative text-gray-700 body-font bg-blackn"
                      >
  
  
                <div className=" flex items-center justify-center 
                              relative 
                              bg-gray-500 py- h-full
                              sm:px-6 lg:px-8a
                              "
                  >
                  <div className="container bg-black space-y-1a bg-white
                              bg-opacity-40 
                              px-4a mx-4a my-10
                  ">
                      <div className="bg-grey-lighter w-full  flex flex-col">
                        <div className="  mx-autoa flex-1 flexa flex-cola items-centera 
                                          justify-centera px-2a">
                          <div className="bg-black px- py-8  shadow-md text-black w-full
                                        space-y-3 
                                      bg-gradient-to-b from-transparent via-yellow-500 to-black 
                                      p-5 rounded-lg
                                    ">
                                    <h1 className="mb-8 text-3xl text-white text-center">Update Info</h1>
  
                              <form   onChange={handleChange}
                                    onSubmit={handleFormSubmit} 
  
                                    className="mt-8 space-y-6 w-full bg-black bg-opacity-60
                                        bg-gradient-to-b from-green-700 via-transparent to-black
                                        p-2
                                    " 
                                    action="http://localhost:3000/" method="POST
                                    ">
                                <div className="flex justify-items-center w-full">
                                <div className="w-1/2 mx-1">
                                    <input 
                                        type="text"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="pageTitle"
                                        placeholder="page title"
                                    />
                                </div>
  
                                <div className="w-1/2 mx-1">
                                    <input 
                                        type="text"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="subTitle"
                                        placeholder="sub title"
                                    />
                                </div>
                                </div>
  
                                <div>
                                  <div className="mb-3 space-y-4 w-full text-xs px-2">
                                                <label className="font-semibold text-gray-100 py-2 px-2">
                                                Intro text: <abbr ></abbr>
                                                </label>
                                                <textarea required="" 
                                                        className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                                                        placeholder="description of this site(bio)" 
                                                        name="siteIntro"  
                                                      //  value={siteIntro}
                                                      //  onChange={(e) => setDescription(e.target.value)}
                                                  /> 	
                                    </div> 
                                </div>
  
                                <div className="flex justify-center text-center">
                                  <button
                                        type="submit"
                                        className="w-max justify-center text-center 
                                        rounded bg-yellow-500 p-3
                                          text-gray-100 hover:bg-green-700 focus:outline-none my-1"
                                    >
                                        Updating info
                                  </button>
                                </div>    
                              </form>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
              </motion.section>
            </>
    );
  };
  
  