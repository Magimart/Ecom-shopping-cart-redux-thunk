import React, { useEffect, useState } from "react";
import MetaTags from './MetaTags';
import Header from './Header';
import Footer from './Footer';
import IsLoading from "./IsLoading";
import { ViewportProvider} from "../utils/helpers/ViewPortWindow";




const Layout = ({loading, onFirstMount, staggernateContentDelayed, children, currentPage, allPathNames }) => {

  return (
    <>
      <MetaTags/>     
          { 
            loading ?
                 (
                   <>
                   <IsLoading />
                   </>
                 )
                 :
                 (
                   <>

                     <div className="z-  grid grid-row flex-grow  flex-col w-100vw h-screen bg-transparent-000
                       m-0 p-0
                    "
                     >
                        <div className="z-5az headerWrapper grid-row  ">
                            <ViewportProvider>  
                            <Header  allPathNames={allPathNames}
                                      currentPage={currentPage}
                                      onFirstMount={onFirstMount}
                                      staggernateContentDelayed={staggernateContentDelayed}
                            />                            
                            </ViewportProvider>

                          </div>

                          <main className=" flex-1a grid p-0 m-0 bg-transparent-00 h-100vh  ">
                            {children} 
                          </main>

                          <div className="z-5a  fixed footerWrapper grid-row m-0 p-0  text-red text-2xl">
                                   <Footer/>
                                   
                          
                          </div>
                      </div>
                   </>
                 )}
      
    </>
  );
}; 


//_____________no test___



export default Layout;









