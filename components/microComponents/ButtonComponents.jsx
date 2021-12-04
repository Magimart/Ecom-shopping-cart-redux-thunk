import React from 'react';
import Link from 'next/link';
// import styles from '../styles/test.module.css';
import IsLoading from '../IsLoading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import { GoBack, GoForward } from './GoForwardBackBtn';



export const  NextPageButton = (({ allPathNames, currentPage }, ref) => {
  
    const [nextPage, setPage] = React.useState([currentPage]);
   
  


    //  const tempLoading = [];
    //  {currentPage? (tempLoading.push(currentPage)) : (undefined)} 

    //  console.log(tempLoading);


        const nextPageLink = React.useEffect(() =>{ 
          
        
      setPage(() =>
              allPathNames && allPathNames.reduce((result, path, index, arr) => {}, null)
             
           )
       }
            ,  
            [currentPage, nextPage]
            );
  
  
          
        return (
                 <> 
                   .................
  
                 </>
                  
           );
   
  });
  
  


  export const  PrevPageButton = (({loading, allPathNames, currentPage }, ref) => {
    
    const [prevPage, setPrevPage] = React.useState([currentPage]);
  
   
  
        const prevPageLink = React.useEffect(() =>{ 
            
        
      setPrevPage(() =>
              allPathNames && allPathNames.reduce((result, path, index, arr) => {}, null)
           )
       }
            ,  
            [currentPage, prevPage]
            );
  
            // console.log(prevPage);
  
  
  
          
        return (
  
                 <> 
  
                  <div  className="
                                 flex
                                 left-8
                                 relative -top-3 
                                 z-1
                                 "
                  >

                      <React.Fragment >
                         
                         

                         {
                         currentPage && currentPage === "/"? (<GoForward currentPage={currentPage}/> ) 
                         :
                         (

                            <Link href={prevPage && typeof prevPage == "string"? prevPage : "/"}>
                                {/* as={/${props.id}__resarch                                      */}
                           <button className="prevButton
                                              absolute
                                              h-10
                                              w-10
                                              p-0
                                              z-99
                                              -left-3
                                              md:left-0
                                              bottom-20
                                              bg-gradient-to-r from-transparent via-yellow-300 to-gray-600                    
                                            " 
                            onClick={prevPageLink}>
                           <FontAwesomeIcon id="prevButtonIcon"
                                    className="prevButtonIcon
                                               relative
                                               m-auto
                                               h-4
                                               w-4
                                               text-xs
                                               md:text-sm
                                              text-white z-1 "
                            icon={faChevronLeft}/>
                           </button>
                        </Link> 
                         )
                         }

                      </React.Fragment>
                 </div>

  
                 </>
                  
           );
   
  });
  
  
  