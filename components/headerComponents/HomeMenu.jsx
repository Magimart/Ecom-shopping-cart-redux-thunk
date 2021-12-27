import React from "react";
import Image from 'next/image';
import {NavItems} from './NavItems';



const HomeMenu = ({allPathNames}) => {
    

    return (

        <>


            <div id="menuWrapper" className="h-44 
                           w-100vw
                           relative
                             mt-5
                              "> 
              
               <div className="holder  h-full grid                 
                               "
               >
              {/*<div id="lower" className="pageHolder h-9 w-80  absolute rounded-2xl md:rounded-none lg:rounded-none xl:rounded-none 
                                        sm:w-96  sm:h-40

                                        "
               >  {/* pagehold *}
                  {/* <div className="page"> {/* page*}
                       <div className="front
                             bg-gradient-to-r from-white to-green-900
                             "
                                 // img src='images/chimp' 
                        >                                                   {/*front*}

                           <div className="text-center grid-cols-1 divide-y divide-white-500">
                               <div>
                                   <span className=" bg-clip-text text-transparent bg-gradient-to-r from-white to-green-900">
                                       Video stream :)
                                   </span>
                               </div>
                          </div>
                          <div className="backHolder ">
                             <div className="back"  
                                    // style="background-image: url('images/chimp')"
                               >
                             </div>
                          </div>
                       </div>
                   </div>  *}
              </div>      mx-4  w-11/12 h-5/6            */}
               <div id="upper"   className="
                                            pageHolder m-auto  w-11/12 h-5/6  -mt-1 my-1 relative rounded-lg 
                                            xxs:h-4/6 xxs:top-2
                                            xs:h-5/6 xs:w-9/12
                                            sm:h-full sm:w-7/12
                                            md:h-full md:w-7/12 md:rounded-none 
                                            lg:h-full lg:w-7/12 lg:rounded-none 
                                            xl:h-full xl:w-6/12 xl:rounded-none 
                                        "               
                >
                    <div className="page">
                       <div className="front" 
                           src="images/giraf"
                       >
                           <div className="backHolder">
                               <div className="back" 
                                    src="images/giraf"
                                >
                                   <NavItems allPathNames={allPathNames}/>
                               </div>
                           </div>

                           <div className="frontCover grid grid-cols-1 divide-y divide-white-
                                            bg-gradient-to-r from-white to-green-900
                                            p-2
                                            rounded-tl-2xl
                                            rounded-tr-lg
                                        text-2 absolute top-10 left-12"                                         
                           >
                                <div className="bg-gradient-to-r from-yellow-100 to-green-600
                                                   rounded-full p-2 px-2
                                                  "
                                >
                                   <span className="bg-clip-text text-white text-2xl" >                                     
                                       
                                         <p>Look me :)</p>
                                         <p></p>
                                  </span>
                                </div>
                          </div> 
                       </div>
                   </div>
             </div>
             </div>
          </div>



        </>
    )
};

  export default HomeMenu;










