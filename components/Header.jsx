import PopUpMenu from "./headerComponents/PopUpMenu";
import Logo from "./Logo"
import React, { useEffect, useState } from "react";
import { motion} from "framer-motion";  
import { useViewport, ViewportProvider } from "../utils/helpers/ViewPortWindow";
import CartNotication from "./headerComponents/CartNofication";
import { CurrentUserImage } from "./userComponents/currentUserProfilePic";
import { useDispatch, useSelector } from 'react-redux';
import {useSession} from 'next-auth/client';
import { isCurrentUser } from '../redux/actions/userActions';
import { useRouter } from 'next/router'
import SignInLink from "./headerComponents/SignInLink";
import { SignOut } from "./headerComponents/SignOut";
import Link from 'next/link'



const Header = ({currentPage, onFirstMount,allPathNames, staggernateContentDelayed}) => {
      
          const { width } = useViewport();
          const breakpoint = 768;
          const session = useSession();
          const dispatch= useDispatch();
          const router = useRouter();


          const [liveUser, setLiveUser]  = useState([])
      
            const {user, loading} = useSelector(state => state.isCurrentUser)
            
          useEffect(() => {
            if (!user) {
              dispatch(isCurrentUser())
            }
              setLiveUser(user);
      
          }, [dispatch, user])

   
    return (
             <>
                <motion.div exit={{ opacity: 0 }}
                            initial="initial"
                            animate="animate"
                            variants={staggernateContentDelayed(onFirstMount)}
                 >

                  <section className="z-1 grid grid-flow-col gap-1 grid-cols-12 grid-rows-1 h-full bg-yellow-40 sticky
                    justify-between mx-6 my-0
                    "
                  >
                    <div className="brandWrapper  w-max col-span-2   ">
                      <Logo />
                    </div>
                    <div  className="provisionWraper col-span-2 text-indigo-40 bg-blue-00 ">
                         {/* more nav items-- */}
                    </div>
                    <div  className="provisionWraper col-span-1 text-indigo-40 bg-blue-40 ">
                         {/* more nav items-- */}
                    </div>
                    <div  className="provisionWraper col-span-1 text-indigo-0 bg-blue-40 ">
                           {/* more nav items-- */}
                    </div>
                    <div  className="provisionWraper col-span-1 text-indigo-40  ">
                         {/* more nav items-- */}
                    </div>
                    <div  className="provisionWraper col-span-1 text-indigo-40 bg-blue-4 ">
                          {/* more nav items-- */}
                    </div>
                    <div  className="provisionWraper col-span-1 text-indigo-40 ">
                        {/* more nav items-- */}
                    </div>
                    <div  className="provisionWraper col-span-1 text-indigo-40 ">
                                <Link href='/bookings/me'>
                                    <button className="dropdown-item">My Bookings</button>
                                </Link>
                    </div>

                    <div className="MenuWrapper col-span-2 bg-green-40 p-1  absolutea relative h-full ">
                           <div className="cartMenuWrapper mx- bg-blue-30 ">
                              <div className={`flex justify-evenly space-x-1 `}
                              >
                                <div className={`userWrapper fixed w-max mr-1a right-44 `}>
                                    <CartNotication
                                       currentPage={currentPage}
                                       onFirstMount={onFirstMount}
                                    />
                                </div>
                              <div className={`menuWrapper fixed w-max right-24   bg-yellow-30`}>
                                 <CurrentUserImage
                                 />
                                 
                              </div>
                              <div className="menuWrapper   bg-yellow-300">
                                    <div className="w-max fixed right-8 ">
                                        {currentPage && currentPage === "/" && !liveUser && width > breakpoint? <SignInLink/> :"" }
                                        {currentPage && currentPage === "/" && liveUser && width > breakpoint? (<SignOut/>) :"" }
                                        {currentPage && currentPage !== "/"? <PopUpMenu 
                                                                              allPathNames={allPathNames}
                                                                              onFirstMount={onFirstMount}
                                                                              /> 
                                                              : (
                                                               <>                                                                                                                             

                                                                    {(
                                                                      width >= breakpoint? " "
                                                                          : (
                                                                             <PopUpMenu allPathNames={allPathNames}
                                                                                    onFirstMount={onFirstMount}
                                                                          />)                                                          
                                                                    )}

                                                               </>

                                                              )
                                        }
                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>                   
                  </section> 


                </motion.div>

                </>
    );
  };

  export default Header;