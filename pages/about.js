import React from "react";
import BackgroundHome from "../components/layoutComponents/BackgroundHome";
import { dbConnect } from "../config";
import Product from "../models/product";
import { ViewportProvider } from "../utils/helpers/ViewPortWindow";



export default function HomePage ({ products,  onFirstMount, allPathNames, currentLink}) {


    //    const [images] = products.imagesOfProduct;


  return (
               <>  
                     <div id="HomeMwrappero"  
                          className=" grid  relative
                          bg-yellow-700 bg-opacity-75  m-0 p-0
                           h-screena w-screen
                          flex-wrap flex-colse
                           "
                      >
                     {onFirstMount && <BackgroundHome
                                onFirstMount={onFirstMount}
                    />}
                           <ViewportProvider>

                           <>
             
             {/* start product section */}
               <div className="grid text-center h-80a h-auto w-screen bg-black bg-opacity-70">
               <div className="bg-whitea">
                   <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8
                              xl:max-w-7xl xxl:max-w-7xl
                   ">
                       <h2 className="sr-only text-black">Products</h2>

                       <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                       

                           {products && products.map((item)=> {

                                      const [images] = item.imagesOfProduct;


                             console.log(item)

                               return (
                                <React.Fragment key={item._id}>
                                <div href="#" className="group">
                                           <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-tr-lg rounded-tl-lg 
                                           overflow-hidden 
                                           xl:aspect-w-7 xl:aspect-h-8
                                           "
                                           >
                                               <a href={`/shop/product/${item && item._id}`}>
           
                                               <img src={images && images.url}
                                                   alt={item.artistName}
                                                   className="w-full cursor-pointer h-full text-xs object-center object-cover group-hover:opacity-75" 
                                               />
                                               </a>                            
                                          </div>
                                    <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                                            <span className="mr-1 p-1 px-2 font-bold"></span>
                                            <span className="mr-1 p-1 px- font-bold border-l border-gray-400 text-xs">Likes</span>
                                            <span className="mr-1 p-1 px- h-6 font-bold border-l border-gray-400 text-xs">Dislikes</span>
                                            <span className="mr-1 p-1 px- h-6 font-bold border-l border-gray-400 text-xs">
                                            <a href={`/shop/product/${item && item._id}`}>
                                                <a className="bg-gray-400 px-1 cursor-pointer text-yellow-700 bg-opacity-50">view details</a>
                                            </a>                                
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
                                                <a href={`/shop/product/${item && item._id}`}>
                                                   <a className="text-yellow-700 mx-1">
                                                       read more
                                                   </a>
                                                </a>                                
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
                           })}
                                                        
                       
                       </div>
                   </div>
               </div>
               </div>
       </>

                                  
                            </ViewportProvider>
                            
                       </div>      
          
        </>
  )
}

export async function getStaticProps(context) {
     dbConnect();

     
  try{
      const data = await Product.find({}).exec();
       const items = JSON.parse(JSON.stringify(data));

        //  console.log(items)
         return {
                  props: {
                        products: items,
                  },
          };
  }catch(error){
           console.error(error.message);
  }

}



