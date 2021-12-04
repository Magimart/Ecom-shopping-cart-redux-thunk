import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";  
import { Parallax, Background } from "react-parallax";
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from "next/router";
import { getAllProducts } from "../../../redux/actions/productActions";
import Pagination from "react-js-pagination";
import { clearErrors } from "../../../redux/actions/productActions";
import ReactPaginate from 'react-paginate'; // can remove if not working 
import Link from "next/link";
import { ProductCardsItem } from "./ProductCardsItem";


  const ShopItemsModel = ( )=> {


    const dispatch = useDispatch();
     const router = useRouter();

    let {country, page = 1} = router.query;
    page = Number(page)
 

    
        // const {safaris, responsePerPage, filteredSafarisCount, safarisCount, error } = useSelector(state => state.allSafaris);
        // const {allStoredPaintings, allPaintingsCount, resPerPage, filteredPaintingCount,  error } = useSelector(state => state.allProducts);
       let { allProductCount, allStoredProducts, filteredProductCount, resPerPage  }= useSelector(state => state.allProducts);

              const image4 ="/images/image-four.jpg";
              const image3 ="/images/image-three.jpg";

              const CardVariants = {
                beforeHover: {},
                onHover: {
                  scale: 1.1
                }
              };
              
              const IconVariants = {
                beforeHover: {
                  opacity: 0,
                  y: -50
                },
                onHover: {
                  opacity: 1,
                  y: 0,
                  scale: 1.5,
                  transition: {
                    type: "tween"
                  }
                }
              };


        
                          
          useEffect(() => {
             dispatch(getAllProducts());
                 dispatch(clearErrors());
       }, [dispatch]);



    //____________pagination
       const handlePagination = (pageNumber) => {
           pageNumber = page //___________________testing
         router.push(`/shop/product?page=${pageNumber}`);
     }

     let searchResult = allProductCount;
     if(country){
         console.log(`here is the all product count ${allProductCount}`)
         searchResult = filteredProductCount;
     }
     console.log(`here is the search results ${searchResult}`)
     console.log(`here is the all product count ${allProductCount}`)
        

    return (


        <>
                
            <Parallax strength={500}
                    bgImage={image4}
            >

                <Background className="custom-bg">
                    <div
                    />
                </Background>

                
                <div className="grid text-center h-80 w-screen bg-black bg-opacity-70">
                        <br />
                        <h1 className="text-gray-50 font-sans text-3xl"> I need a little extra time </h1>
                        <br />
                            <h2 className="text-gray-50 font-sans text-xl"> to bring out the never unseen </h2>
                        <br />

                </div>
            </Parallax>

                {/* products section---- */}

             <Parallax strength={500}
                    bgImage={image3}
            >
            <Background className="custom-bg">
                    <div
                    />
            </Background>

              {/* start product section */}
                <div className="grid text-center h-80a h-auto w-screen bg-black bg-opacity-70">
                               {/* <div className="bg-white"> * */}
                <div className="bg-whitea">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8
                               xl:max-w-7xl xxl:max-w-7xl
                    ">
                        <h2 className="sr-only text-black">Products</h2>

                        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        

                            {allStoredProducts && allStoredProducts.map((item)=> {

                                return (
                                        <React.Fragment key={item._id}>
                                               <ProductCardsItem item={item}/>
                                        </React.Fragment>
                                );
                            })}
                                                         
                              {/* end product section  */}
      
                        </div>
                    </div>
                </div>
                </div>


                    {/* pagination  */}

                    {
                  resPerPage < searchResult && 
                    <div className="relative bottom-10 text-white mx- z-99 right-0  h-max w-screen ">
                    <Pagination
                        innerClass="flex flex-row  w-full justify-center px-10 bg-white"
                        activePage={page}
                        itemsCountPerPage={resPerPage}
                        totalItemsCount={allProductCount}
                        onChange={handlePagination}
                        nextPageText={"next"}
                        prevPageText={"prev"}
                        firstPageText={"1st"}
                        lastPageText={"end"}
                        itemClass={"pagination-item bg-yellow-600 px-1  flex relative"}
                        linkClass={"page-link bg-yellow-80 f"}
                    />

                    </div>
                } 


            </Parallax> 




  
        </>
    )
}

export default ShopItemsModel;


