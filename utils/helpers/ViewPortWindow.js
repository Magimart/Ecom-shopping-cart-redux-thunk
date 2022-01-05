import React, { useLayoutEffect, useState } from 'react';


 const viewportContext = React.createContext({});

export const ViewportProvider = ({ children }) => {


  const [width, setWidth] = React.useState({width:'undefined'});
  const [reSizedWidth, setReSizedWidth] = React.useState([]);

   
      React.useEffect(() => {

         if (typeof window !== 'undefined') {
             setWidth(window.innerWidth);
          }

         const handleWindowResize = () => {
            setReSizedWidth(width);
         };


          window.addEventListener("resize", handleWindowResize);
          handleWindowResize()  //___not ts!!
             return () => window.removeEventListener("resize", handleWindowResize);
       }, [width]);



      return (
               <viewportContext.Provider value={{ width }}>
                    {children}
               </viewportContext.Provider>
    );
};


export const useViewport = () => {
  const { width } = React.useContext(viewportContext);
  return { width };
};


