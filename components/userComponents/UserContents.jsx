import React, { useEffect, useState } from "react";
import Link from "next/link";
import { isCurrentUser } from '../../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors } from "../../redux/actions/productActions";
import { toast } from 'react-toastify';


const  UserContent = () => {

            
            const dispatch = useDispatch()
                    const { product, error, loading } = useSelector(state => state.currentUserProducts)
                    console.log(product )

                useEffect(() => {
                    if (error) {
                        toast.error(error); 
                        dispatch(clearErrors());
                        }

                }, [dispatch, loading, product ])

            return (
                     <>
                        <div className="col-span-full  flex justify-center">

                            <div className="max-w-2xla blocka   h-full  mx-auto py-4 px-4a sm:py-24 lg:max-w-7xl lg:px-8
                                    xl:max-w-7xl xxl:max-w-7xl
                                    col-span-12 xxs:w-screen xs:w-screen sm:w-screen md:w-full
                            ">
                                <div className="text-white bg-gray-200 bg-opacity-10  font-semibold flex justify-center items-center  h-32 w-full mb-10">
                                     <h2 className="sr-onlya ">Your Products listings</h2>
                                </div>
                            <div className="grid grid-cols-full grid-cols-2a 
                                            gap-y-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
                                            gap-x-8  xl:gap-x-10
                                           "
                            > 

                                {
                                 product && product.map((item, i) => {


                                return(
                                    <React.Fragment key={i}>
                                 <div href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200  
                                        overflow-hidden 
                                        lg:rounded-tr-lg xl:rounded-tl-lg xxl:rounded-tl-lg
                                        xl:aspect-w-7 xl:aspect-h-8

                                        "
                                    >
                                    { item && console.log(item && item.imagesOfProduct[0].url) }

                                            {/* <Link href={`/shop/product/${item && item._id}`}> */}

                                                <img src={item.imagesOfProduct[0].url} 
                                                    alt={`${item.user.fName} ${item.user.sName} `}
                                                className="w-full h-full hover:cursor object-center object-cover group-hover:opacity-75"
                                            />
                                            {/* </Link>  */}
                                    </div>
                                    <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                                        <span className="mr-1 p-1 px-2 font-bold"></span>
                                        <span className="mr-1 p-1 px- font-bold border-l border-gray-400 text-xs">Likes</span>
                                        <span className="mr-1 p-1 px- h-6 font-bold border-l border-gray-400 text-xs">Dislikes</span>
                                    </div>
                                    <div className="info-box text-xs block p-1 font-semibold text-gray-500 bg-gray-300">
                                        <div className="mr-1 px-2 font-bold">
                                                <span className="mr-1 p-1 px-2 font-bold justify-start flex">
                                                        title:<span className=" px-1 semi-bold text-gray-400 ">{item.title} </span>
                                                </span>
                                                <span className="mr-1 p-1 px-2 font-bold justify-start flex">
                                                <div className="justify-evena ">
                                                    medium:<span className="  px-1 font-thin ">{item.medium}</span> size:<span className="bg-yellow-5 px-1 font-thin ">
                                                                                    {item.dimenssion.height} <span className="text-gray-600 font-semibold text-xs px-1">x</span>{item.dimenssion.width} <span className="text-gray-600 text-xs">cm</span>
                                                                                 </span>  
                                                 </div>
                                                </span>
                                                <span className="mr-1 p-1 px-2 font-bold justify-start flex">
                                                        Artist: <span className=" px-1 font-thin font-cursive font-style: italic">{item.user.fName}<span className="px-1"></span>{item.user.sName}</span>
                                                </span>
                                                <span className="mr-1 p-1 px-2 font-bold  justify-start flex">
                                                        Country: <span className=" mx-1 font-semibold ">...</span>
                                                </span>
                                                <span className="mr-1 p-1 px-2 font-bold justify-start flex">
                                                    <div className="flex-1">
                                                        Price: <span className=" px-1 text-yellow-700">{item.price}</span><span className="border-l border-gray-400"/> instock:<span className="  px-1 bg-yellow-500 bg-opacity-80 mx-2 h-max px-2 text-red-500"><span className="px-1">{item.countInStock}</span></span>  
                                                    </div>
                                                </span>
                                                <span className=" font-bold  text-sm ">description: <span className="text-xs px-1 font-thin">{item.description.slice(0,80)}...</span>
                                            
                                                </span>
                                        </div>
                                    </div>                        
                               </div>                                
                                                  
                                                  
                                                  
                               </React.Fragment>
                                              )
                                           })
                                }

                               </div>                                       
                           </div>
                        </div>
                    </>
            )
    }
export default UserContent;

  




