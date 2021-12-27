import React from 'react';
import { BackendStack } from './about/BackendStack';
import { FrontendStack } from './about/FrontendStack';
import { motion } from "framer-motion";  


const MyStack = ({myStack,enterFromRight, onScrollVelocity,
                     direction, animateFromLeft, animateFromRight, fromUpSlow
               }) => {

  return (
    <>
       {/* desktop */}
       {
         onScrollVelocity >= 2600 && onScrollVelocity < 3000? ( //2300
          <MyStackWrapper
               direction={direction} 
               animateFromRight={animateFromRight}
               myStack={myStack}
          />
         ): ""
       }
       {/* mobile */}
         {
          onScrollVelocity >  3100? ( 
           <MyStackWrapper
               direction={direction} 
               animateFromRight={animateFromRight}
               myStack={myStack}
               onScrollVelocity={onScrollVelocity}
          /> 
          ): ""
        } 
    </>
  );
}

export default MyStack;


     

  export  const MyStackWrapper = ({direction, onScrollVelocity, animateFromRight, myStack }) => {


      return (

              <>
                <motion.div className="trails-main m-2 h-auto  w-60 bg-yellow-300"
                            custom={direction}
                            variants={animateFromRight}
                            initial={{ 
                                opacity: 0, x: 1000, scale: 1 }}                                            animate="center"
                            exit="exit"
                            transition={{
                            x: { type: "spring", stiffness: 600, damping: 300 },
                            opacity: { duration: 0.5 },
                            }}
                  >
                      <FrontendStack myStack={myStack}
                      />
                      <BackendStack myStack={myStack}
                      />
                </motion.div>
            </>
      )
    }