import React, { Fragment } from "react";
import {motion} from "framer-motion";  


 export const TitleOne = ({infos, animateHeaderOne}) => {

    
   let pageTitle = infos && infos.map((title)=> {
    return title.pageTitle
   }) 
   
         let [info] = pageTitle.map(el=>[...el])
           console.log(info)
    return (       
               <motion.h1 variants={animateHeaderOne } 
               className="text-4xl
                        relative   
                      font-extrabold text-center">
                    <div className="gridn justify-center grid-col-3 m-0                       
                        md:py-4 
                        lg:py-4 lg:text-5xl 
                        xl:py- xl:text-6xl                               
                    ">
                            <span className="focus:ring bg-clip-text 
                                            flex text-transparent 
                                            bg-gradient-to-r from-white to-black                                            
                                            md:block md:-mt-40
                                            lg:block lg:-mt-40 
                                            xl:block xl:-mt-40                                                                                                    
                            ">
                                {
                                  info && info.map((el, i)=> {
                                   return(
                                    <Fragment key={i}>
                                    <div className="xxs:mb-20a
                                               xs:mb-20a sm:mb-0
                                          "
                                    >{el}</div>
                                    </Fragment>
                                   )
                                  })
                                }                             
                            </span>                        
                        </div>  
              </motion.h1>
          
    );
}





export const SmallDisplay = ({infos, animateSmall}) =>{

  let subTitle = infos && infos.map((title)=> {
    return title.subTitle
   }) 
 
   let [info] = subTitle.map(el=>[...el])
   console.log(info)
    
    return (
            <>
         <motion.h2  
                  variants={animateSmall()}
                 >                                                             
          <div className=" 
                         focus:ring bg-clip-text flex text-transparent
                          bg-gradient-to-r from-white to-blue-500
                          text-3xl font-normal lg:text-4xl xl:text-5xl
          ">
                    {
                      info && info.map((el, i)=> {
                        return(
                             <Fragment key={i}>
                             {el}
                            </Fragment>
                        )
                      })
                    }
            </div>
         </motion.h2>
                
            </>
    )

  }

   
 
  export const BigDisplay = ( {infos, animateOnDesktop}) => {
      
    let subTitle = infos && infos.map((title)=> {
      return title.subTitle
     }) 
   
     let [info] = subTitle.map(el=>[...el])
     console.log(info)

    return   (
         <>
                 <motion.h2  
                 variants={animateOnDesktop()}
                  className=" focus:ring bg-clip-text flex text-transparent
               bg-gradient-to-r from-white to-blue-800
               text-5xl font-normal                                                 
             ">                                                             
                  <div className=" ">
                  {
                      info && info.map((el, i)=> {
                        return(
                            <Fragment key={i}>
                             {el}
                            </Fragment>
                        )
                      })
                    }
                  </div>
               </motion.h2>
         </>

      )
   }



