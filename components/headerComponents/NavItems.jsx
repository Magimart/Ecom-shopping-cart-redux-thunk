import Link from 'next/link'
import React from 'react';



 export const NavItems = ({allPathNames}) => {

      return (
               <>
                  <div className='bg-black h-full w-full flex text-white'>

                  <ul className=" block mx-5 px-4 text-center list-none text-sm
                                 y-4 divide-white divide-opacity-75 justify-center
                                 relative top-1
                                "
                  >
                     {allPathNames && allPathNames.map((link) => {

                       return (
                               <React.Fragment key={link.pageName}>
                                  <Link   href={link.pathName} passHref>
                                     <li 
                                         className="mx-1 px-3 py- text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                                       >  
                                        {link.pageName}
                                         
                                    </li>
                                  </Link>
                                </React.Fragment>
                        );
                      }
                      )}
                  </ul>
                    <Link href="/shop">
                       <button className='bg-yellow-500 bg-opacity-40 h-full flex w-max px-2 relative 
                          group border-indigo-500 hover:bg-yellow-500 
                          bg-opacity-10  
                          hover:border-transparent
                       '
                        >
                            <span className='flex hover:bg-green-700  hover:shadow-2xl w-max px-1 justify-center items-center h-max mt-11 bg-yellow-600 '>shop</span>
                        </button>
                    </Link>
                  </div>
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






