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
        {/* <div className="fixed w-screen -z-1 h-screen " >   */}
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

                {/* <Image
                 loader={myLoader}
                 src="elephant.jpg" 
                 alt="Picture of the author"
                 layout="fill"
                 layout="fill"
                 >
               </Image> */}

                  {/* <HomeModel onFirstMount={onFirstMount}/> */}

         </div>
       </>          
       );
}
export default BackgroundHome;



