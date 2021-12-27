import React, { useEffect, useState } from "react";
import MetaTags from '../layoutComponents/MetaTags';
import Header from '../layoutComponents/Header';
import Footer from '../layoutComponents/Footer';
import IsLoading from "../layoutComponents/IsLoading";
import { ViewportProvider} from "../../utils/helpers/ViewPortWindow";



const Layout = ({loading, onFirstMount, staggernateContentDelayed, children, currentPage, allPathNames }) => {

  const [loadingOff, setLoadingoff] = useState(false);

  return (
    <>
      <MetaTags/>  

 
              <div className="z- grid grid-row flex-growa flex-cola w-screen h-full relative
                bg-transparent-000
                m-0 p-0
                
              "
              > 
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

                        <div className="z-5az headerWrapper grid-row h-fulla ">
                            <ViewportProvider>  
                            <Header  allPathNames={allPathNames}
                                      currentPage={currentPage}
                                      onFirstMount={onFirstMount}
                                      staggernateContentDelayed={staggernateContentDelayed}
                            />   
                                                     
                            </ViewportProvider>

                          </div>

                          <main className=" flex-1a grid p-0 m-0 bg-transparent-00 h-100vha h-fulla  relative  ">
                            {children} 
                          </main>

                          <div className="z-5a  fixed footerWrapper grid-row m-0 p-0  text-red text-2xl">
                                   <Footer allPathNames={allPathNames} 
                                          currentPage={currentPage}
                                          loading={loading}
                                   />                       
                          
                          </div>

                   </>
                 )
                 
              }
       </div>

    </>
  );
}; 


//_____________no test___



export default Layout;









