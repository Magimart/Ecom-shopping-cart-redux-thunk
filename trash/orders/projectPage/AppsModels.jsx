
import React from "react";
import Link from 'next/link'
import { motion } from "framer-motion";  //____testing
import { useState } from "react";
import { ProjectCards } from "../../microComponents/projects/ProjectsCards";

const mobileVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -6000,
        opacity: 0,
      };
    },
    center: {
      zIndex: -1,
      x: 0,
      opacity: 1,
       y: 15,  //___4 bend animate v2
      transition: { type: "spring", stiffness: 25 }
    },
    exit: (direction ) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : 1000,
        opacity: 0, 
      };
    }
  };




const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? -100 : 1000,
      opacity: 0,

    //   ease: [5.87, 0, 3.13, 6]
    };
  },
  center: {
    zIndex: -1,
    x: 0,
    opacity: 1
  },
  exit: (direction ) => {
    return {
      zIndex: 0,
      x: direction < 0 ? -1000 : 1000,
      opacity: 0, 
    };
  }
};

export  const AppsModelSection = () => {


  const [[page, direction], setPage] = useState([0, 0]);

 
  return (
    <>
        <motion.div
               custom={direction}
               variants={mobileVariants}
               initial="enter"
               animate="center"
               exit="exit"
               transition={{
                 x: { type: "spring", stiffness: 35, damping: 20 },
                 opacity: { duration: 0.2 },
                // ease: [5.87, 0, 3.13, 6]
               }} 
               className=""
         >

             {/* start card section -----------------------*/}
                     <ProjectCards/>
             {/* end card section................................... */}

         </motion.div>


    </>
  )
}











