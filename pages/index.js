import {motion} from "framer-motion";  //____testing
import React from "react";
import UnCoverPageSlide from "../components/animationComponents/UnCoverPageSlider";
import BackgroundHome from "../components/BackgroundHome";
import IsLoading from "../components/IsLoading";
import  HomeComponents  from "../components/mainComponents/HomeComponents";
import { dbConnect } from "../config";
import Info from "../models/info";
import { ViewportProvider } from "../utils/helpers/ViewPortWindow";



export default function HomePage ({ currentPage, infos,  onFirstMount, allPathNames, currentLink}) {

  return (
        <>                   
                     <div id="HomeMwrapper"  
                          className="z-1a m-0  grid h-100vh relative
                          bg-green-700 bg-opacity-75 
                           "
                      >
                           <ViewportProvider>
                    
                                    <div className="flex justify-center  text-3xl items-center">
                                    <h1>Online Art Store</h1>
                                    </div>
                                   
                            </ViewportProvider>
                       </div>      
          
        </>
  )
}

export async function getServerSideProps(context) {
     dbConnect();

  try{
       const data = await Info.find({}).exec();
       const siteInfo = JSON.parse(JSON.stringify(data));

         return {
                  props: {
                        infos: siteInfo,
                  },
          };
     }catch(error){
           console.error(error.message);
     }

}