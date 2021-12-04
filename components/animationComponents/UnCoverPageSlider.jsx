import React from "react";
import { motion } from "framer-motion";




const showPage = {

  };


const UnCoverPageSlide = () => {
    // prevent user from seeing footer by scrolling down
    React.useState(() => {
      typeof windows !== "undefined" && window.scrollTo([0]);
    }, []);
  
    return (
      <motion.div
        className="relative z-50 flex items-center justify-center w-full bg-black"
        initial="initial"
        animate="animate"
        variants={showPage}
        onAnimationStart={() => document.body.classList.add("opacity")}
        onAnimationComplete={() =>
          document.body.classList.remove("opacity")
        }
      >
     
      </motion.div>
    );
  };

export default UnCoverPageSlide;



