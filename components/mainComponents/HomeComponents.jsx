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

         return (
                   <>

                  </>
                )
     };  
 
 export default HomeComponents;




