import { Link } from 'next/link';
import React from "react";



export const CartItem = ({ item, 
                            removeHandler,
                            increaseHandler,
                            decreaseHandler,
                            
                       }) => {
   

              return (
                      <div className="cartItem bg-yellow-400 w-full h-32  
                                            grid grid-flow-col grid-cols-12 grid-rows-1
                                            border-b-yellow-400 border-2 
                                          "
                                        >
                                          {/* span 1____________ */}
                                          
                                          <div className="col-span-2 flex justify-center items-center  w-full bg-gray-100 h-20 py-0">
                                                <div className="w-20 h-16 bg-gray-100  p-1">
                                                        <img 
                                                              src={item && item.imagesOfProduct[0].url} alt={item.artistName} 
                                                              className='object-cover h-16 w-20'
                                                        />
                                                </div>
                                          </div>
                                        {/* span 1_____________  */}
                                          <div className="col-span-3  w-full text-gray-400  text-xs md:text-sm lg:text-sm xl:text-sm font-semibold bg-gray-800 bg-opacity-80  
                                                   h-full px-1  py-6 md:px-3 lg:px-4 xl:px-4 "
                                                  //  onClick={()=> <Link href={`/shop/product/${item && item._id}`}/>}
                                           >                      
                                                  <h3 className=" pb-1 mx-1 " >Title: 
                                                      <span className="font-thin text-white mx-1">
                                                          {item.title}
                                                      </span>
                                                  </h3>
                                                  <h3 className=" pb-1 mx-1 " >
                                                      Artist: <span className="font-thin  mx-1 text-white ">
                                                              {item.artistName } 
                                                        </span>
                                                </h3>
                                            {/* span 3 _____________*/}
                                          </div>                                         


                                          <div className="col-span-2  w-full bg-gray-500 h-full bg-opacity-30 py-12 px-2 mx-1  justify-center">
                                                <h3 className="px-2">Price: €
                                                    <span className="text-gray-100 sm:font-bold md:font-bold lg:font-bold xl:font-bold xxl:font-bold">
                                                    {item.price}
                                                    </span>
                                                </h3>
                                          </div>

                                          {/* span 6_____ */}
                                      <div className="col-span-5 mx-1 w-full bg-gray-100 h-full  flex justify-evenly">
                                                <div className="bg-gray-800 bg-opacity-90 h-full  w-full">
                                                    <div className=" block  md:flex  lg:flex xl:flex xxl:flex md:justify-center xl:justify-center  xl:justify-center w-full h-full 
                                                      text-white  md:py-4 lg:py-4 xl:py-4"
                                                    >
                                                                  <p className=" text-xs  px-2 py-3 md:py-6 lg:py-6 xl:py-6 xxl:py-6 ">
                                                                      qty <span className="px-3 bg-red-400 font-bold">
                                                                      { item && item.qty > 0 && item.qty < 10? item.qty: "stock limit"}
                                                                       x
                                                                        </span>
                                                                  </p>
                                                                  <span className="bg-black w-full justify-center flex py-3 md:py-6 lg:py-6 xl:py-8 xxl:py-8 ">
                                                                    <span className="  px-1  text-red-400"> [</span>
                                                                          {item._id && item.price * item.qty}
                                                                    <span className=" px-1  text-red-400"> ]</span>
                                                                  </span>
                                                    </div>
                                                </div>


                                                {/* delete, reduce, add button */}
                                                <div className="bg-yellow-300 text-xs p-2 md:p-0 lg:p-0 xl:p-0 xxl:p-0  w-full h-full block md:flex lg:flex xl:flex xxl:flex ">
                                                        <button className="icon-markup    p-2 bg-red-600 bg-opacity-70 w-14 md:w-16   lg:w-16 xl:w-16 xxl:w-16   text-white  "
                                                          onClick={() => item && item.qty <= 10? increaseHandler(item._id) : undefined}
                                                        >
                                                          {/* {() => item.qty >= 10? increaseHandler(item._id) : undefined} */}
                                                                <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="-1 0 18 16">
                                                                    <path d="M12.5 9H9v3.5c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5V9H3.5c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5H7V3.5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5V7h3.5c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5z"/>
                                                                </svg>
                                                        </button> 
                                                        <button className="icon-markup p-2 bg-gray-400 bg-blac w-14 md:w-16  lg:w-16 xl:w-16 xxl:w-16  text-white "
                                                            onClick={() => decreaseHandler(item._id)}
                                                        >
                                                              <span className="icon icon-size-small icon-state-small text-xs">
                                                                  <span className="icon-markup">
                                                                      <svg className="icon-color text-xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16">
                                                                        <g className="icon-color text-xs"><path d="M12.5 9h-9c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h9c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5z"/></g></svg>
                                                                  </span>
                                                              </span>    
                                                        </button> 
                                                </div>
                                                <div className=" bg-gray-500 bg-opacity-50 h-full w-full py-3 px-2 md:p-5  lg:p-5  xl:p-5  xxl:p-5 ">
                                                    <button
                                                        className="bg-white xxs:-ml-2 xs:-ml-2  xxs:mt-5 xs:mt-5 sm:mt-5 bg-opacity-60 w-12 md:w-20 lg:w-20 xl:w-20 xxl:w-20 h-12 xl:h-20 md:h-20 lg:h-20 xl:h-20 xxl:h-20
                                                         p-3 md:p-4 lg:p-4 xl:p-4 xxl:p-4  items-center  rounded-full justify-center "
                                                         onClick={() => removeHandler(item._id)}
                                                      >
                                                         <i className="fas text-white ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0  16 34 ">
                                                              <g className="icon-color text-xs">
                                                                <path d="M7 5H6v8h1zM10 5H9v8h1z"/>
                                                                <path d="M13 3h-2v-.75C11 1.56 10.44 1 9.75 1h-3.5C5.56 1 5 1.56 5 2.25V3H3v10.75c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25V3zm-7-.75A.25.25 0 0 1 6.25 2h3.5a.25.25 0 0 1 .25.25V3H6v-.75zm6 11.5a.25.25 0 0 1-.25.25h-7.5a.25.25 0 0 1-.25-.25V4h8v9.75z"/>
                                                                <path d="M13.5 4h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1z"/></g></svg>
                                                         </i>
                                                      </button>
                                                </div>

                                          </div>
                      </div>                                  
                    )
}

