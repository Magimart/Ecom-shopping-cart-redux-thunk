import Link from 'next/link'
import React from 'react';



 export const NavItems = ({allPathNames}) => {

      return (
               <>
                  <ul className=" block m-2 text-center list-none text-sm
                                 y-4 divide-white divide-opacity-75 justify-center
                                 relative top-3
                                "
                  >
                     {allPathNames && allPathNames.map((link) => {

                       return (
                               <React.Fragment key={link.pageName}>
                                  <Link   href={link.pathName} passHref>
                                     <li 
                                         className="mx-3 text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                                       >  
                                        {link.pageName}
                                         
                                    </li>
                                  </Link>
                                </React.Fragment>
                        );
                      }
                      )}
                  </ul>
               </>
      );
}

export const FooterNav = ({allPathNames } ) => {

  return (
           <>
             <ul   className=" flex text-center list-none text-sm
                               divide-white divide-opacity-75 justify-center right-8
                               relative -top-3 z-10
                               rounded-md 
                               px-4 bg-gradient-to-r from-transparent to-green-900
                               w-1/4 h-6
                            ">
                 {allPathNames && [...allPathNames].map((link) => {

                     return (
                             <React.Fragment key={link.pageName}>
                                {/* <Link   href={link.pathName} passHref> */}
                                <Link   href={link.pathName} >

                                   <li 
                                       className="mx-3 text-center 
                                                  bg-gradient-to-r from-green-400 to-blue-500
                                                hover:from-pink-500 hover:to-yellow-500"
                                   >  
                                      {link.pageName} 
                                   </li>
                                </Link>
                              </React.Fragment>
                      );
                    }
                  )}
             </ul>
           </>
  );

};






