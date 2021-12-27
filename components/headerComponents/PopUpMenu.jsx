
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


 const PopUpMenu = ({allPathNames} ) =>{
       

    const session = useSession();

    const [liveUser, setLiveUser]  = useState([])

      const dispatch= useDispatch();
      const {user, loading} = useSelector(state => state.isCurrentUser)
      
    useEffect(() => {
      if (!user) {
        dispatch(isCurrentUser())
      }
        // setLiveUser(user);

    // }, [dispatch, user])
  }, [dispatch, user])


        const [tongleOnClick, setToggleOnClick] = React.useState(false);
      
       const handleCloseOpen = () =>{
         return (
          setToggleOnClick(!tongleOnClick)
         )           
       };

  
      //  console.log("here is the current logged in  user -------------------------------xx")
      //  console.log(liveUser);


    return (
      <>
      menu
      </>
  
    );
  }
  
export default PopUpMenu;



 
