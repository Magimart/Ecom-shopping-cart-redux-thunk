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
      <motion.section
            exit={{ opacity: 0 }}
            className="relative text-gray-700 body-font"
       >
            <motion.div className=" flex  justify-center bg-gray-300a py-1
                        px-2 sm:px-6 lg:px-8 
                        relative -top-5
                        bg-gradient-to-b from-transparent via-transparent to-gray-600
                        bg-opacity-80
                        "
        
            >
                  <ErrorMessage errorMsg={errorMsg}/>       
              <motion.div className="max-w-xl w-full space-y-8 
                        bg-white px-12 pt-32 rounded-lg self-center
                        bg-gradient-to-b from-transparent via-yellow-500 to-black
                  " 
                                        
                >
                  <div>
                       {/* <img className="mt-3 mx-auto h-12 w-auto" src="my-logo"/> */}
                       <h2 className="mt-3 p-4 text-center text-2xl font-semibold text-white
                           decoration-clone 
                            bg-gradient-to-b from-yellow-400 to-red-500 text-transparent
                             bg-opacity-5
                       ">
                            
                            {loadingButton? (
                            "loading..."
                            ): "Sign in"}

                       </h2>
                  </div>

                {/* form signing--- */}

                   <div className="justify-center bg-yellow-200
                               p-10  rounded-sm opacity-70 h-max
                               "
                    >
                      <div className="emailWrapper">
                          <form 
                                     onSubmit={handleFormSubmit} 
                                      className="mt-8 space-y-6" action="http://localhost:3000/" method="POST">
                              <div>
                                  <label  className="text-black"  >Email</label>
                                   <input id="email-address" name="email" 
                                          type="email" 
                                          autoComplete="none" 
                                           required className="appearance-none rounded-none relative block w-full px-3 py-2 border
                                           -gray-300 placeholder-gray-500 text-gray-900 rounded-t-md
                                           focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                           placeholder="your email"
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                   />
                              </div>

                               <div>
                                   <label  className="text-black"  >Password</label>
                                   <input id="password" name="password" type="password"
                                           autoComplete="none" 
                                           required className="appearance-none rounded-none relative block w-full px-3 py-2 border
                                          border-gray-300 opacity-40 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none 
                                           focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                           placeholder="password"
                                           value={password}
                                           onChange={(e) => setPassword(e.target.value)}

                                   />
                               </div>
                               <div>
                                   <button type="submit" className="group relative h-12 w-full flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white 
                                              bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    disabled={loadingButton?true : false}
                                    >
                                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                           <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" 
                                               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" 
                                               fill="currentColor" aria-hidden="true"
                                            >
                                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" 
                                                    clipRule="evenodd" />
                                            </svg>
                                      </span>
                                      {loadingButton?"loading..." : "Sign in"}
                                   </button>
                                </div>               
                          </form>
                      </div>
                   </div>
               </motion.div>
            </motion.div>

       </motion.section>

    </>
  )
}

export default LoginModel;


