import { projectDataOne, projectDataTwo } from "../../../models/projects"
import Link from 'next/link'
import { ProjectLink, ProjectLinkTwo } from "./ProjectLink"



export const ProjectCards = () => {

    return (
        <> 
           <div className="grid grid-cols-1 mt-4 divide- 
                             mx-10 md:mx-0 
                             divide-yellow-500
                           relative
                          -top-2 xs:top-8 sm:top-5 md:top-6 lg:top-6 xl:top-7 xxl:top-8

                         "
            >
              <div  className="my-10 flex mx-auto md:mx-0  sm:mx- sm:my-1  ">
                 {projectDataOne && 
                   projectDataOne.map((data) => {         
                 return (
                  <>
                    <div 
                       id="projectCardWrapperOne"  
                       className="relative inline-flex gap-x-4a font-sans text-white
                            bg-gradient-to-l from-black via-black to-transparent 
                            bg-yellow-400  
                            bg-opacity-10  
                            mx-2 xs:mx-6 sm:mx-3 md:mx-14 lg:mx-20 lg:mx-5 xl:mx-5 
                            my-0
                            p-1
                            top-2 
                            xxs:text-xs xxs:h-32 xxs:w-32 xxs:my-1 xxs:p-2 
                            xs:text-xs xs:h-32 xs:w-32  xs:my- xs:p-4 
                             sm:w-40 sm:my-5 sm:mx-16 sm:text 
                            md:h-42 md:w-48   md:my-2 md:p-1  
                            lg:h-42 lg:w-48   lg:my-5  xl:h-full lg:text lg:top-2
                            xl:top-4  xl:w-52 xl:h-full xl:mx-16 xl:my-5
                            rounded-xl
                            projectCardWrapperOne
                        "
                    >
                       {/* <Link href="/projects/safari-sharing-app">      */}
                       <ProjectLink 
                             projectDataOne={projectDataOne}
                             data={data}
                       />   
               </div> 
              </>
           ) 
         })   
         } 
         </div>
          {/* row two____________ */}

          <div  className="my-10 flex mx-auto md:mx-0  sm:mx- sm:my-1  ">
                 {projectDataTwo && 
                  projectDataTwo.map((data) => {         
                 return (
                  <>
                    <div 
                       id="projectCardWrapperTwo"  
                       className="relative inline-flex gap-x-4a font-sans text-white
                            bg-gradient-to-l from-black via-black to-transparent 
                            bg-yellow-400  
                            bg-opacity-10  
                            mx-2 xs:mx-6 sm:mx-3 md:mx-14 lg:mx-20 lg:mx-5 xl:mx-5 
                            my-0
                            p-1
                            top-2 
                            xxs:text-xs xxs:h-32 xxs:w-32 xxs:my-1 xxs:p-2 
                            xs:text-xs xs:h-32 xs:w-32  xs:my- xs:p-4 
                             sm:w-40 sm:my-5 sm:mx-16 sm:text 
                            md:h-42 md:w-48   md:my-2 md:p-1  
                            lg:h-48 lg:w-48   lg:my-5  xl:h-full lg:text lg:top-2
                            xl:top-4  xl:w-52 xl:h-full xl:mx-16 xl:my-5
                            rounded-xl
                        projectCardWrapperTwo
                        "
                    >
                       {/* <Link href="/projects/safari-sharing-app">      */}
                       <ProjectLinkTwo 
                             ProjectLinkTwo={ProjectLinkTwo}
                             data={data}
                       />                       
               </div> 
              </>
           ) 
         })   
         } 
         </div>
        </div>
      </>
    )
}





















