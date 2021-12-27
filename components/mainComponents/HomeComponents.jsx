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


   const HomeComponents = ({ infos, onFirstMount, allPathNames, currentLink}) => {

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
                  
                                <section id="homeMComponentWrapper" className="grid relative top-4a bg-yellow- bg-opacity-75 md:bg-opacity-50 gap-6a
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
                                                   bg-black
                                                   bg-opacity-40
                                                   top-16a
                                              `}>

                                    </div>
                                               {/* level two_
                                               
                                                   ${width <= breakpoint?(`
                                                   xl:bg-gradient-to-t from-black via-green-800 to-red-400
                                                   bg-white
                                                  `):(``)}
                                               ______________ col-span-2   */}
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
                                              <TitleOne animateHeaderOne={animateHeaderOne}
                                                        infos={infos}
                                              />                             
                                        </div>                                                                              
                                      <div className="bg-transparent-00 grid-col-3 flex justify-center                
                                                      relative bottom-16a
                                                      mb-10 md:mb-0 lg:mb-0 xl:mb-0 xl:mb-0 pb-12a
                                                    "                                   
                                      >  
                                            {
                                              width < breakpoint? ( 
                                                          <motion.div
                                                                initial="initial" 
                                                                animate="animate"
                                                                variants={staggernateContentDelayed(onFirstMount)}
                                                          >
                                                              <SmallDisplay animateSmall={animateSmall}
                                                                                    infos={infos}
                                                              />
                                                        </motion.div>
                                                        ) : 
                                                        (
                                                        <BigDisplay  animateOnDesktop={animateOnDesktop}
                                                                            infos={infos}
                                                        />
                                                        )
                                                        
                                            }                
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
                                                  "                               
                                    >
                                      <a href="/shop" className="bg-black text-white h-8 w-max px-4">
                                      store
                                      </a>
                                    </div>
                              </section>
                         
                  </>
                )
     };  
 
 export default HomeComponents;




