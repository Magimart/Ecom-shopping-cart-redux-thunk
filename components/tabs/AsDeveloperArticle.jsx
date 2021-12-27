import React,{useState} from "react";
import { useInView } from "react-intersection-observer";
import { useViewport } from "../../utils/helpers/ViewPortWindow";
import { motion } from "framer-motion";  




const AsDeveloperArticle = ({onScrollVelocity, enterFromLeftSmall, enterFromLeft}) =>{
    

    const {width} = useViewport()

    const [ direction, setPage] = useState([0, 0]);
    const [ref, inView, entry] = useInView({
      threshold: 0.5,
      triggerOnce: false
    });


    return (

        <>

            <motion.article className="articleWrapper
                                        h-full   
                                        cols-span-12
                                        text-white text-sm leading-6
                                        md:text-base
                                        lg:text-base
                                        xl:text-base 
                                        tracking-normal font-normal 
                                        break-normal 
                                        p-16
                                        bg-gradient-to-r from-green-800 via-transparent to-green-900
                                        bg-opacity-80 
                                        "
                        // ref={ref}
                        // // variants={width >= 780? (enterFromLeft): enterFromLeftSmall}
                        // width={width}
                        // initial={{ 
                        //     opacity: 0, x: width <= 640?-100:-300 , scale: 1 
                        // }} 
                        // animate={inView ? "visible" : "hidden"}
                        // transition={{ duration: 0.9, ease: "easeIn" }}
                        // style={{ marginLeft: "1px", 
                        // width:"100%"
                // }}              
            > 
                            <p className=" dark:text-gray-50">
                                {onScrollVelocity}
                            <span className="text-gray-400 font-bold">
                                CEO and Founder,
                                </span>   
                            <span className="font-semibold mx-2 text-gray-300 opacity-70"> 
                                    Majabu Safaris  April/2014 –  Sep/2020.
                                </span>
                                <br></br>
                                Designed, maintained our travel website and promoted
                                sales with online marketing tools such as Google
                                analytics, Google Ads, Facebook’s Open Graph to
                                improve our site SEO.
                            </p>  
                            <br></br>
                            <p className=" dark:text-gray-50">   
                            <span className="text-gray-400 font-bold">
                                CEO-Founder EqutorPlus
                                <span className="font-semibold mx-2 text-gray-300 opacity-70"> 
                                    Software Designing Company Aug/2012 - Feb/2015 
                                </span>
                                </span> 
                                        As a Co-founder played a lead role of designing
                                        Websites, system analysis, and IT support for different
                                        companies.               
                            </p> 
                            <br></br>
                            <p className=" dark:text-gray-200">
                            <span className="text-gray-400 font-bold">
                                UI and UX designing
                                <span className="font-semibold mx-2 text-gray-300 opacity-70"> 
                                MTN-Uganda June 2012  –  Sep 2014 </span>
                                </span>  <br></br> 
                                    User interaction and design/user experience, rapid prototyping and development control.
                                    Working part time as a UI/UX designer in a team of six 
                                    helped shape my understanding of designs in an application. As my teams main focus was to improve user interfaces for the best
                                    user experience on mobile money services. 
                                    <br></br>
                                    </p>    
                                    <br></br>
                                    <p className=" dark:text-gray-400">  
                                    <span className="text-gray-400 font-bold">
                                    Founder and CEO Magima Art Gallery
                                    <span className="font-semibold mx-2 text-gray-300 opacity-70"> 
                                    Artist and Founder of Magima Art Gallery Aug/2008 – Oct/2020
                                    </span>
            
                                </span>  
            
                                    As Artist and Curator worked with Visual artists to
                                    improve their skills.
                                    As self sponsored throughout college and University
                                    generating funds from art sales, I developed strong
                                    desires to others with similar skills in understanding
                                    market needs.
            
                                    <span className="text-yellow-300 text-xs mx-2 ">
                                        read more on my Artistic expeirence on the next tab
                                    </span>
                                </p>   
            
                        <p className=" dark:text-gray-500"> 
                        <span className="text-gray-400 font-bold">
                            Gardener and General Service US embassy(Kampala)
                                <span className="font-semibold mx-2 text-gray-300 opacity-70"> 
                            April/2000  –  Jan 2003
                                </span>
                            </span>  
                                Workings as a garden at the US embassy draw me
                                closer to nature thus became more passionate to the
                                ecosystem {onScrollVelocity}
                            </p>   
                        </motion.article>

        </>
    )
}

export default AsDeveloperArticle;