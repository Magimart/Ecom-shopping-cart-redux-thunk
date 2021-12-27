import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";  
import { Parallax, Background } from "react-parallax";
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from "next/router";
// import Pagination from "react-js-pagination";
import { clearErrors } from "../../../redux/actions/productActions";
import { ProductCardsItem } from "./ProductCardsItem";
import { addToCart } from "../../../redux/actions/cartActions";
import SearchBar from "../../headerComponents/SearchBar";


  const ShopItemsModel = ( )=> {

              const image4 ="https://res.cloudinary.com/magimaart/image/upload/v1639695360/backgroundCover/image-four_b1nac2.jpg";
              const image3 ="https://res.cloudinary.com/magimaart/image/upload/v1639695375/backgroundCover/image-three_bjzjgh.jpg";

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


     const dispatch = useDispatch();
     const router = useRouter();

        let { allProductCount, allStoredProducts, filteredProductCount, resPerPage  }= useSelector(state => state.allProducts);

        let {location, page = 1} = router.query;
        page = Number(page)
    
                      
          useEffect(() => {
                 
                 dispatch(clearErrors());
       }, [router, dispatch]);


                //____________pagination
                const handlePagination = (pageNumber) => {
                        
                    console.log("here is the new page ________xxx___________________")
                    console.log(pageNumber)
                        router.push(`/shop/?page=${pageNumber}`);
                    }

                  let searchResult = allProductCount;
                  if(location){
                      searchResult = filteredProductCount;
                  }
        
                  //_________________________addto cart
                  const addToCartHandler = async(id) => {

                    dispatch(addToCart(id));
                        // router.push('/shop/cart').then(()=>router.reload())
                        router.replace('/shop/cart')
                }

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
                            <h2 className="text-gray-50 font-sans text-xl"> to bring out the never seen </h2>

                        <br />
                        <div>
                          <SearchBar/>
                        </div>

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

                              console.log(item)

                                return (
                                        <React.Fragment key={item._id}>
                                               <ProductCardsItem 
                                                    item={item}
                                                    addToCartHandler={addToCartHandler}
                                               />
                                        </React.Fragment>
                                );
                            })}
                                                         
                {/* end product section  */}

                        
                        </div>
                    </div>
                </div>
                </div>


                    {/* pagination  */}

                       {/* {
                           resPerPage < searchResult && 
                           <div className="relative  py-4 bottom-10 mx- z-99 right-0  h-max w-screen mt-6 ">
                                   <Pagination 
                                       innerClass="flex flex-row   py-3 w-full justify-center px-10 bg-yellow-800 bg-opacity-30"
                                       activePage={page}
                                       itemsCountPerPage={resPerPage}
                                       totalItemsCount={allProductCount}
                                       onChange={handlePagination}
                                       nextPageText={"next"}
                                       prevPageText={"prev"}
                                       firstPageText={"1st"}
                                       lastPageText={"end"}
                                       itemClass={"pagination-item bg-yellow-500 px-10 py-2   flex relative"}
                                       linkClass={"page-link bg-yellow-800 bg-opacity-40 text-white bg-white px-2  rounded-sm"}
                                   />
               
                           </div>
                       }  */}


            </Parallax> 




  
        </>
    )
}

export default ShopItemsModel;



