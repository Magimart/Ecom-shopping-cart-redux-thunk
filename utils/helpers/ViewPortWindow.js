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




//________________window Dimensions----use thus instead---------------------


 const screenDimmenssionContext = React.createContext({});

export const UseWindowSize = ({children}) => {

   const [screenSize, setScreenSize] = useState([0, 0]);

    useLayoutEffect(() => {
        const updateSize = () => {
           setScreenSize([window.innerWidth, window.innerHeight]);
       }
          window.addEventListener('resize', updateSize);
         updateSize();
            return () => window.removeEventListener('resize', updateSize);
       }, []);

   //  console.log(screenSize)
    const [width, height] = screenSize;
  
      return (
      <screenDimmenssionContext.Provider value={{width, height}}>
           {children}
      </screenDimmenssionContext.Provider>
      )
}

export const useViewDimenssion = () => {
    const {width, height } = React.useContext(screenDimmenssionContext);
   //  console.log(width)
    return {width, height} ;
};
  