import React from 'react';
import Link from 'next/link';
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
              allPathNames && allPathNames.reduce((result, path, index, arr) => {
  
                        //  console.log(arr);
             
                const currentIndex = arr.findIndex((index)  =>  (index.pathName === currentPage));
                  //  console.log(`${currentIndex} current index`);
                  //  console.log(`${currentPage} current page`);
  
                const getNextIndex = currentIndex < 3? (currentIndex + 1 ) : (currentIndex + 0);    
                  // console.log(`${getNextIndex} next index`);
                  const getNextPage =  arr.find((el, index, arr) => typeof el.pageName === "string" && index === getNextIndex);
                  // console.log(getNextPage);
  
               if(getNextPage && getNextPage.pathName) return result = getNextPage.pathName;

                return (console.log(result))

                   

             }, null)
             
           )
       }
            ,  
            [currentPage, nextPage]
            );
  
  
          
        return (
                 <> 
                  <div   className="
                                   flex
                                    justify-end right-8
                                   relative -top-3 z-0
                                ">
    <React.Fragment >
      {/* {
       currentPage && nextPage?
       ( tempLoading && tempLoading === "/"? (console.log('temp is empty')) : (console.log('now full')) )
     : (<IsLoading/>) //___not tested yet!!
       } */}
         {
           currentPage && currentPage === "/contact"? (
            <GoBack currentPage={currentPage}/>
             ): (
            <Link href={nextPage && typeof nextPage === "string"? nextPage : "/"}>
  
               <button id="" 
                 className="nextButton
                           absolute
                           h-10
                           w-10
                           p-0
                           md:right-0a
                           bottom-20
                           bg-gradient-to-r from-transparent via-yellow-300 to-gray-900 
     
                         " onClick={nextPageLink}>
               <   FontAwesomeIcon id="nextButtonIcon"
                         className="prevButtonIcon relative
                                    m-auto
                                   h-4
                                   w-4
                                   text-xs
                                   md:text-sm
                                  text-white 
                                      
                                "
                        icon={faChevronRight}/>
            </button>
           </Link>
           )
         }

  
  
  
  </React.Fragment>
  
  
             </div> 
  
                 </>
                  
           );
   
  });
  
  


  export const  PrevPageButton = (({loading, allPathNames, currentPage }, ref) => {
    
    const [prevPage, setPrevPage] = React.useState([currentPage]);
  
   
  
        const prevPageLink = React.useEffect(() =>{ 
            
        
      setPrevPage(() =>
              allPathNames && allPathNames.reduce((result, path, index, arr) => {
               
                const currentIndex = arr.findIndex((index)  =>  (index.pathName === currentPage));
                    // console.log(`${currentIndex} current index`);
                    // console.log(`${currentPage} current page`);
  
                const getPrevIndex = currentIndex <= 0 || currentIndex > 3? (currentIndex + 0) : (currentIndex - 1  );    
                    // console.log(`${getPrevIndex} prev index`);
  
                  const getPrevPage =  arr.find((el, index, arr) => typeof el.pageName === "string" && index === getPrevIndex);
                    // console.log(getPrevPage);
  
               if(getPrevPage && getPrevPage.pathName) return result = getPrevPage.pathName; 
  
                return result;
             }, null)
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
  
  
  