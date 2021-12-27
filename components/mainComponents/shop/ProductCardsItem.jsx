import React from "react";
import Link from "next/link"



export const ProductCardsItem = ({item, addToCartHandler})=> {


            const [images] = item.imagesOfProduct;




            
            return (
                <React.Fragment key={item._id}>
                     <div href="#" className="group">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-tr-lg rounded-tl-lg 
                                overflow-hidden 
                                xl:aspect-w-7 xl:aspect-h-8
                                "
                                >
                                    <Link href={`/shop/product/${item && item._id}`}>

                                    <img src={images && images.url}
                                        alt={item.artistName}
                                        className="w-full cursor-pointer h-full text-xs object-center object-cover group-hover:opacity-75" 
                                    />
                                    </Link>                            
                               </div>
                         <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                                 <span className="mr-1 p-1 px-2 font-bold"></span>
                                 <span className="mr-1 p-1 px- font-bold border-l border-gray-400 text-xs">Likes</span>
                                 <span className="mr-1 p-1 px- h-6 font-bold border-l border-gray-400 text-xs">Dislikes</span>
                                 <span className="mr-1 p-1 px- h-6 font-bold border-l border-gray-400 text-xs">
                                 <Link href={`/shop/product/${item && item._id}`}>
                                     <a className="bg-gray-400 px-1 cursor-pointer text-yellow-700 bg-opacity-50">view details</a>
                                 </Link>                                
                               </span>
                         </div>
                         <div className="info-box text-xs block p-1 font-semibold text-gray-500 bg-gray-300">
                         <div className="mr-1 px-2 font-bold">
                             <span className="mr-1 p-1 px-2 font-bold justify-start flex">
                                     title:<span className=" px-1 semi-bold text-gray-400 ">{item.title}</span>
                             </span>
                             <span className="mr-1 p-1 px-2 font-bold justify-start flex">
                                <div className="justify-evena flex">
                                                    medium:<span className=" px-2 font-thin ">{item.medium}</span> size:<span className="bg-yellow-5 px-2 font-thin ">
                                                                    {item.dimenssion.height} <span className="text-gray-600 font-semibold text-xs px-1">x</span>{item.dimenssion.width} <span className="text-gray-600 text-xs">cm</span>
                                                            </span>  
                                </div>
                             </span>
                             <span className="mr-1 p-1 px-2 font-bold justify-start flex">
                                 Artist: <span className=" px-1 font-thin font-cursive font-style: italic">
                                        {/* {item && item.user.fName} */}....
                                     <span className="px-1"></span>
                                        {/* {item && item.user.sName} */}
                                     </span>
                             </span>
                             <span className="mr-1 p-1 px-2 font-bold  justify-start flex">
                                     Country: <span className=" mx-1 font-semibold ">...</span>
                             </span>
                             <span className="mr-1 p-1 px-2 font-bold justify-start flex">
                             <div className="justify-evena flex">
                                    Price: <span className="px-1 text-yellow-700">{item.price}</span> | available :<span className="bg-yellow-500 mx-2 px-2 text-red-500">in stock</span>  
                                </div>
                             </span>
                             <span className=" font-bold  text-sm ">description
                                 <span className="description font-thin text-xs mx-1  ">
                                     {item.description.slice(0,60).concat("...")}
                                     <Link href={`/shop/product/${item && item._id}`}>
                                        <a className="text-yellow-700 mx-1">
                                            read more
                                        </a>
                                     </Link>                                
                                 </span>
                             </span>
                         </div>



                          <div className="mr-1 p-1 flex  justify-center px- h-8 font-bold border-l border-gray-400 text-xs">
                                <button className="bg-black px-2 h-full rounded-md  
                                                  "
                                       onClick={()=>addToCartHandler(item._id)}           
                                >
                                     add to card
                                 </button>
                         </div>
                         </div>                        
                    </div> 
                 </React.Fragment>
            );

};



export const ShopCardItemsTest = ( )=> {



    return (


        <>

            <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
                <div className="relative m-3 flex flex-wrap mx-auto justify-center">

                    <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                        <div className="overflow-x-hidden rounded-2xl relative">
                        <img className="h-40 rounded-2xl w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg"/>
                        <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </p>
                        </div>
                        <div className="mt-4 pl-2 mb-2 flex justify-between ">
                        <div>
                            <p className="text-lg font-semibold text-gray-900 mb-0">Product Name</p>
                            <p className="text-md text-gray-800 mt-0">$340</p>
                        </div>
                        <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second card----------- */}
            
            <div class="heading text-center font-bold text-2xl m-5 text-gray-100">Full Responsive Video Cards</div>
            <div class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">

                <div class="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                    <img class="w-full" src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg" alt="" />
                    <div class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">Live</div>
                    <div class="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                    <span class="mr-1 p-1 px-2 font-bold">105 Watching</span>
                    <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">105 Likes</span>
                    <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">105 Dislikes</span>
                    </div>
                    <div class="desc p-4 text-gray-800">
                    <a href="https://www.youtube.com/watch?v=dvqT-E74Qlo" target="_new" class="title font-bold block cursor-pointer hover:underline">Pubg Mobile Custom Room (Unlimited)</a>
                    <a href="https://www.youtube.com/user/sam14319" target="_new" class="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer">@dynamo_gaming</a>
                    <span class="description text-sm block py-2 border-gray-400 mb-2">lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !</span>
                    </div>
                </div>
            </div>  

        </>
    )
}





