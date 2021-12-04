import React from "react";
import Link from 'next/link'
import { motion} from "framer-motion";  //____testing
import { ViewportProvider, useViewport } from "../../utils/helpers/ViewPortWindow";

// import { faChevronLeft , faChevronRight} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import NextPageButton from "./NextPageButton";
// import PrevPageButton from "./PrevPageButton";
// import Background from "../pages/background";
// import Menu from "./Menu";


const SafariPage = ({onFirstMount}) => {


    //    const { width } = useViewport();
    //    const breakpoint = 620;
    //     console.log(width)


  return (
           <>              
             <ViewportProvider >
                <MyComponent onFirstMount={onFirstMount}/>
            </ViewportProvider>

           </>
       );
};

export default SafariPage;




    const MyComponent = ({onFirstMount}) => {

     
         const content = (onFirstMount) => ({
          animate: {
            transition: { staggerChildren: 0.1, delayChildren: onFirstMount ? 1.8 : 0 },
          },
        });

        // const contentTest = (onFirstMount) => ({
        //   animate: {
        //     transition: { staggerChildren: 0.1, delayChildren: onFirstMount ? 1.9 : 0 },
        //   },
        // });

        return (
             <>
  
  <motion.section exit={{ opacity: 0 }}>
   <motion.div 
       initial={{ 
                   opacity: 0, y: 400, scale: 90 }}
       animate={{  
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                       duration: .2,
                        type: "spring", stiffness: 10 }
               }
          }

    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}                
   >

     <motion.div
                       initial="initial"
                       animate="animate"
                       variants={content(onFirstMount)}
                       className="space-y-12"
       >
      <section className="grid grid-rows-3 w-100vw  h-screen flex p-2 bg-transparent gap-4">
            
         {/* level 0ne_______________    */}
            <div className="m-2 xs:grid xs:row-span-1 xs:absolute sm:absolute xs:order-last sm:order-last xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12  bg-blue-200">
                 {/* bigTitle comm */}
        <Link href="/about" className="">
       <div className="bg-black h-6 w-max text-white relative mx-16 px-3 flex justify-center">
       <button className="bg-black h-6 w-max t px-3 ">
        about me
      </button>
      </div>
      </Link>
   
             </div>
{/* level two_______________ col-span-2   */}

             <div className="grid row-span-2 
                             xs:row-span-1 xs:col-span-12 
                             sm:col-span-12 
                             md:col-span-3
                             lg:col-span-4
                             xl:col-span-6 
                           bg-white"
               >


              
               <div className="grid-col-3 flex justify-center pt-2 "
              
                >                                                          
                               kama               
                </div>
             </div>
        

{/* level three______________ md:ab md:top-1/2 md:ml-80
*/}
           
             <div className=" grid flex my-10 row-span-2 
                              xs:order-first xs:row-span-1 xs:col-span-12 xs:relative
                              sm:order-first sm:row-span-1 sm:col-span-12 
                              md:col-span-9 
                              lg:col-span-8 
                              xl:col-span-6 
                              
                           bg-yellow-900" 
                              
              >
                 lolo
             </div>
      </section>
      </motion.div>
  </motion.div>
</motion.section>

             </>


        )
    };  












 
   
 











