
import { useState, useEffect, useRef } from "react";
 import { animateFromRight, animateFromLeft } from "../utils/animations/animate";
  import {NextPageButton, PrevPageButton} from './microComponents/ButtonComponents';
  import { motion,  useViewportScroll, useTransform, useMotionValue } from "framer-motion";  
  import { useInView } from "react-intersection-observer";
import { SocialComponents } from "./microComponents/SocialMediaLinks";

const Footer = ({loading, currentPage, allPathNames}) =>{ 

  
  const [ direction, setPage] = useState([0, 0]);
 

  return (
           <>            
              <footer className="z-0a  relative grid m-0 bottom-0  w-100vw 
                         text-white body-font 
                         footerBg 
              ">
                  <div className="grid z-0  mb-0 ">
                     <section className="nexpPrevBtnWrapper z- mt-  relative -top-20 sm:-top-32">


                          <motion.div className="z-100
                                   font-hairline text-white  leading-none"
                                            custom={direction}
                                            variants={animateFromLeft}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                              x: { type: "spring", stiffness: 100, damping: 30 },
                                              opacity: { duration: 0.9 }
                                            }}                                          
                            >
                          
                          
         
                           </motion.div>

                           <motion.div className="z-
                                   font-hairline text-white  leading-none"
                                            custom={direction}
                                            variants={animateFromRight}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                              x: { type: "spring", stiffness: 100, damping: 30 },
                                              opacity: { duration: 0.9 }
                                            }}                                          
                            >

                             
                            </motion.div>
                     </section>


       
                   </div>
              </footer>
           </>
    )
  };

  export default Footer;


