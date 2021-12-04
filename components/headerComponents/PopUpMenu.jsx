
import React,{useState, useEffect } from "react";
import { motion } from "framer-motion";  
import { NavItems } from "./NavItems";
// import { handleToggle, onToggle } from "../../utils/helpers/helper";
import Link from 'next/link'
import { SocialComponents } from "../microComponents/SocialMediaLinks";
import { signOut, useSession} from 'next-auth/client';
import { useDispatch, useSelector } from 'react-redux';
import { isCurrentUser } from '../../redux/actions/userActions';
import { SignOut } from "./SignOut";
import SignInLink from "./SignInLink";
// import { handleCloseOpen } from "../../utils/helpers/helper";


 const PopUpMenu = ({allPathNames, onFirstMount} ) =>{
       

    const session = useSession();

    const [liveUser, setLiveUser]  = useState([])

      const dispatch= useDispatch();
      const {user, loading} = useSelector(state => state.isCurrentUser)
      
    useEffect(() => {
      if (!user) {
        dispatch(isCurrentUser())
      }
        setLiveUser(user);

    }, [dispatch, user])

        const [tongleOnClick, setToggleOnClick] = React.useState(false);
      
       const handleCloseOpen = () =>{
         return (
          setToggleOnClick(!tongleOnClick)
         )           
       };


    return (
  

  // <div className={`popupWraper fixed bg-black}  
   <div className={`popupWraper ${tongleOnClick?"fixed bg-black":""}  
                       justify-center w-full h-full 
                       text-black   left-0 m-0 items-center top-0 opacity-90
                     `}
    > 
      {/* ----entire screen blur--//____________menueButton */}
            <div onClick={""}
                    className=" w-8 h-8  
                                 z-10 absolute right-0 mx-4 mt-1 block 
                                bg-white  font-bold text-3xl
                                opacity-9                                                      
                          " 
            >
                  <div className=" w-8 h-8 mx-1 p-1
                                          bg-gradient-to-r from-transparent red-300 via-yellow-600 to-black
                                          hover:from-transparent via-green-200 hover:to-gray-500 text-white text-xs 
                                          ring ring-green-600 
                                          ring-offset-2 ring-offset-green-100                                           
                                      "
                  >
                    {
                     tongleOnClick ? (
                               <h3 className="absolute  bg-yellow-400 w-full h-full  mx-1 top-0 left-0 text-2xl text-white ">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                     <path d="M17.016 15.609l-3.609-3.609 3.609-3.609-1.406-1.406-3.609 3.609-3.609-3.609-1.406 1.406 3.609 3.609-3.609 3.609 1.406 1.406 3.609-3.609 3.609 3.609zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"/>
                                  </svg>
                              </h3>
                            ) :
                            (
                               <svg viewBox="20 0 90 110" width="40" height="40"
                                        className="my- absolute"
                                >
                                     <rect width="30" height="10"></rect>
                                     <rect y="30" width="50" height="10"></rect>
                                     <rect y="60" width="70" margin="1" height="10"></rect>
                                </svg>
                            )
                    }
                    </div>
            </div>
          {
            tongleOnClick && (           
            
            <motion.section 
            exit={{ opacity: 0, scale: -0.5, transition: { duration: 0.6 } }}                
            className="popUpmen relative flex 
               justify-center  w-screen h-screen
               
               "

            >
            

           </motion.section>


          )}  
      </div>

  // </React.Fragment>
  
    );
  }
  
export default PopUpMenu;



 
