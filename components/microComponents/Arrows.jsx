import React  from "react"
import { motion } from "framer-motion";  


export const GoDownArrow = ({ onScrollVelocity,
                       direction, animateFromLeft, animateFromRight
                    }) =>{

    return (
              <>
                        <>
                           <motion.h2 className="
                                "
                                custom={direction}
                                variants={animateFromRight}
                                initial={{ 
                                opacity: 0, x: 1000, scale: 1.4 }}                                            animate="center"
                                exit="exit"
                                transition={{
                                x: { type: "spring", stiffness: 600, damping: 300 },
                                opacity: { duration: 0.5 },
                                }}
                            >
                                    👇
                            </motion.h2>
                        </>
               </>
    )
}

                                   {/* <span className={`relative text-2xl mx-6 top-${onScrollVelocity >= 400?`64`:`14` } -left-6`}>
                                        👇
                                    </span>  */}