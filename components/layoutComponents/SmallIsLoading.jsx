import React from "react";


const  SmallIsLoading =() =>{
 
  
    return (
      <>
 
      <div className="spinner1 flex w-max h-7 px-2 mt-">
          <span className="spinnerSpan">creating...</span>
              <div className="halfSpinnerSmall h-full px-1 flex justify-center items-center">
                 <div className="complete h-4"></div>
              </div>
        </div> 
    
      </>
    )
  };
  

export default SmallIsLoading;