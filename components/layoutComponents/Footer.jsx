
import { useState, useEffect, useRef } from "react";
 import { animateFromRight, animateFromLeft } from "../../utils/animations/animate";
  import {NextPageButton, PrevPageButton} from '../microComponents/ButtonComponents';
  import { motion,  useViewportScroll, useTransform, useMotionValue } from "framer-motion";  
  import { useInView } from "react-intersection-observer";
import { SocialComponents } from "../microComponents/SocialMediaLinks";

const Footer = ({loading, currentPage, allPathNames}) =>{ 

  
  const [ direction, setPage] = useState([0, 0]);
 

  return (
           <>            
              <footer className="z-0a  relative grid m-0 bottom-0  w-100vw 
                         text-white body-font 
                         footerBg 
              ">
                  <div className="grid z-0  mb-0 ">
                     <section className="nexpPrevBtnWrapper bg-black flex justify-center z- mt-  relative  ">


                       footer links

                     </section>
                       

       
                   </div>
              </footer>
           </>
    )
  };

  export default Footer;


