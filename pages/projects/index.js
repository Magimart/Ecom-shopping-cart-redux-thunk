import React from "react";
import Link from 'next/link'
import MetaTags from '../../components/MetaTags';
import { motion } from "framer-motion";  //____testing
import { useState } from "react";
import { UnCoverPage } from '../../components/animationComponents/UnCoverPage';
import BackgroundHome from "../../components/BackgroundHome";
import NextPageButton from '../../components/microComponents/NextButton';
import { ProjectCards } from "../../components/microComponents/projects/ProjectsCards";
import { AppsModelSection } from "../../components/mainComponents/projectPage/AppsModels";
import { ArtsModelSection } from "../../components/mainComponents/projectPage/ArtsModel";

// import SideBar from '../components/SideBar';
// import ContentBox from '../components/ContentBox';




const ProjectPage = ({currentPage, onFirstMount} ) => {


  return (
          <>
      {currentPage && console.log('current path is live at projects')}


              <MetaTags title={"magima's projects"}/>

          <UnCoverPage/>
          {onFirstMount && <BackgroundHome/>} 
              <motion.section
                exit={{ opacity: 0 }}
              >
               <section id="projectWrap" 
                        className=" grid grid-rows-3 grid-flow-col flex-wrap w-screen h-screen               
                    "
                >
                       {/* left_______________ col-span-12  ab  */}

                 <div className=" grid row-span-2 w-full h-full col-span-12 
                              md:col-span-4 md:row-span-3  
                             lg:col-span-5 lg:row-span-3
                             xl:col-span-5 xl:row-span-3                             
                             bg-gradient-to-tr from-transparent via-green-400 to-yellow-900
                             bg-opacity-75                           
                            "
                 >
                         <motion.section>
                                <AppsModelSection/>
                          </motion.section> 
                      </div>      
                                  {/* rigt______________s12*/}
                      <div className="-z-1 row-span-1 w-full h-full col-span-12
                                      xxs:grid xxs:col-span-12
                                      xs:grid xs:col-span-12
                                      sm:grid sm:col-span-12 
                                      md:col-span-8 md:row-span-3
                                      lg:col-span-7 lg:row-span-3
                                      xl:col-span-7 xl:row-span-3 
                                      
                                      bg-gradient-to-tl from-transparent via-green-100 to-yellow-900
                                      bg-opacity-75
                                      
                                      "                                       
                        >
                                <ArtsModelSection/>
                        </div>
                  </section>
                </motion.section>    

          </>
  )
}
export default ProjectPage;
  
















