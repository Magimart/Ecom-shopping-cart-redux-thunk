import {motion} from "framer-motion";  //____testing
import React, {useState, useEffect } from "react";
 import HomeMenu from "../headerComponents/HomeMenu";
import { useViewport } from "../../utils/helpers/ViewPortWindow";
import { fromUp} from "../../utils/animations/animateUpDown";
import { staggernateContent, staggernateContentDelayed } from "../../utils/animations/staggernate";
import { animateHeaderOne, animateSmall, animateOnDesktop} from "../../utils/animations/animateTexts";
import {TitleOne, SmallDisplay, BigDisplay} from "../microComponents/Titles";
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../../redux/actions/userActions';
import { signIn, signOut, useSession } from 'next-auth/client';


   const HomeComponents = ({ infos, onFirstMount, currentLink}) => {

        const { width } = useViewport();
          const breakpoint = 768;

          console.log("here is the width at home")
          console.log(width)
          // const router = useRouter();

          const session = useSession();
          const [liveUser, setLiveUser]  = useState([])
    
            const dispatch= useDispatch();
            // const {user, loading} = useSelector(state => state.isCurrentUser)
            
          // useEffect(() => {
          //      if (!user) {
          //          dispatch(currentUser())
          //       }

          //       setLiveUser(user);
    
          // }, [dispatch, user]);
       

         return (
                   <>
                  
                                <section id="homeMComponentWrapper" 
                                          className="grid relative top-4a 
                                                    bg-yellow-400a bg-opacity-75 md:bg-opacity-50 gap-6a
                                                      grid-rows-3 w-100vwa   h-100vha h-screen p-0 m-0                                                    
                                                     ">
                                  
                                    {/* level 0ne______reserve_________    */}
                                    <div className={`m-2a
                                                  xxs:grid xxs:row-span-1 xxs:absolutea  xxs:order-last xxs:col-span-12 
                                                  xs:grid xs:row-span-1 xs:absolute  xs:order-last xs:col-span-12
                                                  sm:absolute sm:order-last sm:col-span-12 
                                                  md:col-span-12 
                                                  lg:col-span-12
                                                  xl:col-span-12  
                                                   relative
                                                   bg-opacity-40
                                                   top-16a
                                              `}>

                                                <div className="flex w-screen h-max  justify-center py-28">
                                                        <h1 className="text-white via-yellow-500 text-3xl opacity-50 ">
                                                                  Welcome
                                                        </h1>

                                                </div>

                                    </div>
                                               {/* level two__________ col-span-2   */}
                                    <div className="grid row-span-2 
                                                    xxs:row-span-1 xxs:col-span-12 
                                                    xs:row-span-1 xs:col-span-12 
                                                    sm:col-span-12 sm:mt-13
                                                    md:col-span-3
                                                    lg:col-span-4
                                                    xl:col-span-6 
                                                   justify-center
                                                   md:mt-24 lg:mt-24 xl:mt-24 xxl:mt-24
                                                   xxs:mx-10 xs:mx-10 sm:mx-10
                                                   
                                                  "            
                                      > 
                                         <div className="pb-10a  xxs:mt-10 xs:mt-10 sm:mt-10  relative">
                                               
                                                <div>
                                                     <div className="text-3xl  
                                                                      focus:ringa bg-clip-texta px-20 py-10 rounded-md
                                                                      bg-gradient-to-r from-white via-purple-700 to-black">
                                                         <span className=" focus:ring bg-clip-text flex text-transparent
                                                                          bg-gradient-to-r from-red-400  via-green-500 to-yellow-500
                                                                          text-5xl font-normal lg:text-4xl xl:text-5xl
                                                                          py-3
                                                             "
                                                          > 
                                                                <span className="py-1">
                                                                studioS3
                                                                </span>
                                                          </span>
                                                      </div>
                                                </div>                            
                                          </div>                                                                              
                                      <div className="bg-transparent-00 grid-col-3 flex justify-center                
                                                      relative bottom-16a
                                                      mb-10 md:mb-0 lg:mb-0 xl:mb-0 pb-12a
                                                    "                                   
                                      >  
                                         <div>
                                               <h2 className="text-white bg-yellow-500 px-4 py-7 text-3xl "><a href="/shop" className="bg-black text-white h-8 w-max px-4">
                                                      shop Now
                                                      </a>
                                               </h2>
                                          </div>                
                                      </div>
                                    </div>
                              
                                                    {/* level three______________ md:ab md:top-1/2 md:ml-80*/}
                                    <div className=" grid  m-0 row-span-2 
                                                    xxs:order-first xxs:row-span-1 xxs:col-span-12 
                                                    xs:order-first xs:row-span-1 xs:col-span-12 
                                                    sm:order-first sm:row-span-1 sm:col-span-12                               
                                                    md:col-span-9 md:-mt-10
                                                    lg:col-span-8  lg:-mt-10
                                                    xl:col-span-6  xl:-mt-10
                                                    w-full
                                                    mt-16
                                                    relative  
                                                    justify-center                                                 
                                                  "                               
                                    >
                                      {/* reserve */}
                                    </div>
                              </section>
                         
                  </>
                )
     };  
 
 export default HomeComponents;




