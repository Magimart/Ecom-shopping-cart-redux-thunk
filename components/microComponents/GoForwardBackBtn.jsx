import React from 'react';

  export const GoForward = ({currentPage}) => {
    return (
      <>

         <div className="nextButton
                      absolute
                      h-10
                      w-10
                      p-0
                      z-1
                      md:right-0a
                      bottom-20
                     ">
            {currentPage && currentPage === "/"?  ("👉") : ("👈")}
         </div>

      </>
    )
  }


  
  export const GoBack = ({currentPage}) => {
    return (
      <>
           {console.log(currentPage)}
         <div className="nextButton
                      absolute
                      h-10
                      w-10
                      p-0
                      md:right-0
                      bottom-20
                    ">
            {currentPage && currentPage === "/contact"?  "👈" : ""}
         </div>

      </>
    )
  }