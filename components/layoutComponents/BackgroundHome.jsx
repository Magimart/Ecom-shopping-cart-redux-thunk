import react, { useState, useEffect, useRef  } from "react";
import MetaTags from './MetaTags';
// import Image from 'next/image';



   // const myLoader = ({ src, width, quality }) => {
   //        return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
   // }


const BackgroundHome = ({onFirstMount} ) => {

    const backgroundClip ="https://res.cloudinary.com/magimaart/video/upload/v1639697561/backgroundCover/backgroundClip1_hrpdt5.mp4"

       const videoRef = useRef();

      //      useEffect(() => {
      //        setInterval(()=>{
      //           videoRef.current.play()
      //       },5000)
      //   }, []);


  return (
        <>
        <div id="HomeBgWrapper" className="fixed -z-3  w-screen  h-screen ">  

         {
            onFirstMount && onFirstMount? (
               <video  
               ref={videoRef}
               muted
               autoPlay
               layout="cover"
                width=""
                   height=""
             >
                <source src={backgroundClip} type="video/mp4"/>
           </video>
            ) :""
         } 
         </div>
       </>          
       );
}
export default BackgroundHome;
