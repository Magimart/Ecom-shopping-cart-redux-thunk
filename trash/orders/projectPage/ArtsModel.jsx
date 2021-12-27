
import React from "react";
import Link from 'next/link'
import { motion } from "framer-motion";  //____testing
import { useState } from "react";
import { ProjectCards } from "../../../components/microComponents/projects/ProjectsCards";
import { InsindeMyStudio } from "../../../components/microComponents/InSideMyStudio";
// import { SwapSlide } from "../../microComponents/ImageSlider";

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

export  const ArtsModelSection = () => {

  const bioCover ="https://res.cloudinary.com/magimaart/image/upload/v1639695372/backgroundCover/bio-magima_cuin57.jpg"


    return (
          <>
             <motion.div 
               className="-z-5 m-0  
                             h-full

                      "  
                initial={{ 
                    // opacity: 0, y: 60, scale: 2.3 }}good
                          // opacity: 0, y: 60, scale: -1.3 }}better
                          opacity: 0, y: 460, scale: -1.3 }} //BEST
                animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: { type: "spring", stiffness: 15 }
                        }}
                 exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}                
              >

                   <img
                    src={bioCover}
                    alt="magima art-project"
                        className="relativea absolute object-cover  h-full w-full"
                    />

                   <div  className="bg-blac h-full"
                    >


                  <div id="Artsproject"  
                      className="Artsproject col-span-full block gap-x-2 font-sans text-white
                        bg-gradient-to-b from-transparent p-1 via-gray-900  to-transparent
                      
                      mx-4
                      my-0
                     relative  justify-center
  
                       xxs:my-2 xxs:gap-x-2 xxs:text-xl xxs:top-14
                       xs:my-3 xs:mx-10 xs:gap-x-4 xs:text xs:top-8
                       sm:my-5 sm:mx-20 sm:gap-x-0 sm:text sm:top-5
                       md:top-16 md:m-0 md:gap-x-0               
                       lg:h-3/4 lg:top-1 lg:gap-x-1
                       xl:h-max xl:top-20 xl:gap-x-0 
                       

                       bg-indigo-600
                       bg-opacity-40
                  projectCardWrapperOne
                 " >
                  <div className="container -z-5   ">
                       <InsindeMyStudio/>
                  </div>
                  <div className="container ">
                       {/* <SwapSlide/> */}
                  </div>


               </div>
            </div>
                          {/* </img> */}

            </motion.div>
          </>
    );
  };
  



