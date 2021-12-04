import { motion,  useViewportScroll, useTransform, useMotionValue } from "framer-motion";  
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useViewport } from "../../utils/helpers/ViewPortWindow";




const AboutPageModel = ({bounceUpDownFromDown,currentPage, allPathNames,loading,
                          enterFromRight,
                          enterFromLeft, animateFromLeft, 
                          fromUpSlow, fromUp,enterFromLeftSmall,
                          animateFromRight,  animateFromTop,
                          enterFromLeftBig
                          }
                       ) =>  {


                        
        const [ direction, setPage] = useState([0, 0]);
        const [onScrollVelocity, setOnScrollVelocity] = useState(0);

        const { scrollY } = useViewportScroll();

        const y1 = useTransform(scrollY, [0, 300], [0, 200]);
        const y2 = useTransform(scrollY, [0, 300], [0, -100]);

        const exitRight = useTransform(scrollY, [200, -60], [600, 0]);

        const scale = useMotionValue(2.4)
        const x = useMotionValue(0)
        const xRange = [-10, 2]
        const opacityRange = [0, 1]
        const opacity = useTransform(x, xRange, opacityRange)

      const { width } = useViewport();


  useEffect(() => {
    scrollY.onChange(setOnScrollVelocity);

  }, [])


   console.log("thats the velocict<<<<<<<<<------------------" )
   console.log(onScrollVelocity);


  return (
    <>
      oops!!!!!!
    </>
  );

}

export default AboutPageModel;
