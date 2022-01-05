import React from "react";
import BackgroundHome from "../components/layoutComponents/BackgroundHome";
import  HomeComponents  from "../components/mainComponents/HomeComponents";
import { dbConnect } from "../config";
import Info from "../models/info";
import { ViewportProvider } from "../utils/helpers/ViewPortWindow";



export default function HomePage ({ infos,  onFirstMount, allPathNames, currentLink}) {

  return (
         <>      


                     <div id="HomeMwrappero"  
                          className=" grid  relative
                          bg-yellow-700a bg-opacity-75  m-0 p-0
                           h-screena w-screen
                          flex-wrap flex-colse
                          bg-gradient-to-r from-transparent via-yellow-700 to-black">

                           "
                      
                     {onFirstMount && <BackgroundHome
                                onFirstMount={onFirstMount}
                    />}
                           <ViewportProvider>
                                   <HomeComponents
                                      onFirstMount={onFirstMount}
                                      currentLink={currentLink}
                                      infos={infos}   
                                    />

                                    
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