
 import React from 'react';
 import { useState } from "react";
 import { motion, AnimatePresence } from "framer-motion";
//  import { wrap } from "popmotion";
//  import { content } from "../ContentData";
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image'

 

const variants = {
    // enter: (direction) => {
     enter: (slideDirection) => {
      return {
        x: slideDirection > 0 ? 1000 : -1000,
        opacity: 0,
        height: "10%",


      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,

      position:"relative",
      height:"80%",
      width:"100%"


    },
    exit: (slideDirection) => {
      return {
        zIndex: 0,
        x: slideDirection < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };
  
  
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  

  
 export const  SwapSlide = ({page, slideDirection, setSlideDirection, result}) => {

      const paginate = (newDirection) => {
        setSlideDirection([page + newDirection, newDirection]);
       };
  
     return (
      <>

        <AnimatePresence initial={false} custom={slideDirection} >
           <div className="slideWrapper relative z-0  -top-40 grid col-span-12 bg-opacity-20 bg-yellow-500 h-screen
                "
           >
                <React.Fragment>

                    <div className=" object-cover flex-wrap 
                          h-max 
                    ">
                        <motion.img
                          key={page}
                          src={result.url}
                          custom={slideDirection}
                          variants={variants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 }
                          }}
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={1}
                          onDragEnd={(e, { offset, velocity }) => {
                             const swipe = swipePower(offset.x, velocity.x);
                               if (swipe < -swipeConfidenceThreshold) {
                                 paginate(1);
                               } else if (swipe > swipeConfidenceThreshold) {
                                   paginate(-1);
                               }
                          }}
                       />   
                   </div>
               </React.Fragment>
                    <div id="" className="next relative mx-4 " onClick={() => paginate(1)}>
                      {"‣"}
               </div>
               <div className="prev relative  mx-4" onClick={() => paginate(-1)}>
                     {"‣"}
              </div>
      </div>

  
        </AnimatePresence>

  
  
      </>
    );
  };
  