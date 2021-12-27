import { motion,  useViewportScroll, useTransform, useMotionValue } from "framer-motion";  
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Parallax, Background } from "react-parallax";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from 'next/router'
import { wrap } from "popmotion";
import { SwapSlide } from "../../microComponents/SwapSlider";
import { addToCart } from "../../../redux/actions/cartActions";
import { clearErrors, getAllProducts, getProductDetails } from "../../../redux/actions/productActions";
import Link from 'next/link';

const ProductDetailsPage = ({ animateFromRight, enterFromLeft, animateFromLeft }) =>  {


  const [qty, setQty] = useState(1)

  const [artDetails, setArtDetails] = useState({});
  const [ productImages, setProductImages] = useState([]);

    //__display
    const [onScrollVelocity, setOnScrollVelocity] = useState(0);
    const [ direction, setPage] = useState([0, 0]);
    const [[page, slideDirection], setSlideDirection] = useState([0, 0]);
    const [ref, inView, entry] = useInView({
      threshold: 0.5,
      triggerOnce: false
    });
    

  //________hooks
  const router = useRouter();
  const { scrollY } = useViewportScroll();
  const dispatch = useDispatch();
  

  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const exitRight = useTransform(scrollY, [200, -60], [600, 0]);

  const scale = useMotionValue(2.4)
  const x = useMotionValue(0)
  const xRange = [-10, 2]
  const opacityRange = [0, 1]
  const opacity = useTransform(x, xRange, opacityRange)


  let { allProductCount, allStoredProducts, filteredProductCount, resPerPage  }= useSelector(state => state.allProducts);

    const {product, error} = useSelector(state => state.productDetails);
    console.log(product)
    console.log(allStoredProducts)


console.log(router.query)
const {id} = router.query;
console.log(id)

        const addToCartHandler = async(id) => {
           dispatch(addToCart(id));
               router.push('/shop/cart') 
        }



         useEffect(() => {
                  //     // scrollY.onChange(setOnScrollVelocity);
                  // // toast.success("here are safaris based on your request");
                  // // toast.error("oops something went wrong")
            dispatch(clearErrors());
            setArtDetails(product && product )
            setProductImages(product && product.imagesOfProduct)

            if (product && id !== product._id) {
                          // dispatch(getProductDetails(id))
            }
          }, [dispatch, id]);

   console.log(productImages)
   console.log(artDetails)


  return (
   <>    
  
    <div  className="grid m-0 p-0 col-span-12 w-screen  h-100vh bg-yellow-400 bg-opacity-60               
                    "
    >
    <Parallax  
          //  bgImage="{image1}" blur={{ min: -1, max: 3 }}
    >
       <div className="relative h-screen  bg-green-300 bg-opacity-60 ">

        <div className="flex z-10 min-h-xs justify-center bg-black bg-opacity-10 mt-
                  "
        >

          <div className="w-1/2 "        
          >
            {/* style={{ x: y2, y: 400, background: 'salmon' }} */}
            <div className="mt-4  flex-1 justify-center">
               <div className="flex flex-col text-center items-center justify-center
                               mt-16
               ">
                    {
                      onScrollVelocity < 65?(
                        <>
                           <motion.h1 className="
                                   font-hairline text-white text-5xl leading-none
                                   bg-gradient-to-b from-transparent via-green-60 to-transparent
                                   bg-opacity-40
                                   text-opacity-20
                                    px-3 py-4
                                   "
                                            custom={direction}
                                            variants={animateFromLeft}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                              x: { type: "spring", stiffness: 100, damping: 30 },
                                              opacity: { duration: 0.9 }
                                            }}             
                            >                              
                              {product.title}
                            </motion.h1>
                        </>                    
                       ):("")
                    } 
                </div>
            </div>
          </div>
        </div>

        {/* slider section_____________ imagesOfProduct  */}
         { productImages && productImages.length? ( [...productImages].reduce((result, data, i, arr) => {

                          const contentIndex = wrap(0, arr.length, page);
                            const getItemByIndex =  arr.find((el, index) => typeof el._id === "string" && index === contentIndex);
                              result = getItemByIndex;
                              // console.log(result)
                                    
                            return (
                              <>

                                <SwapSlide
                                  page={page}
                                  slideDirection={slideDirection}
                                  setSlideDirection={setSlideDirection}
                                  result={result}
                                />
                              </>
                            )

                          },[])

                         ) : ("")//_______________rm
            } 


    </div>
<div className="flex flex-row  justify-center relative h-screena w-screen  bg-blue-400 bg-opacity-20">

    {/* anim frm right */}
    <motion.div className="w-full  relative flex justify-center  bg-white bg-opacity-30"
                
    >
  <div className="flex mx-4  items-center justify-center">

  <div className="w-screen relative -top-36 block container 
                      bg-gradient-to-b from-transparent via-green-600 to-black
                      bg-opacity-80 p-10 h-full   
                  "
  >
        <div className="relative top-2 c-card bg-white block shadow-md hover:shadow-xl rounded-lg overflow-hidden">
           <div className="p-1 w-full">
             <div className="block md:flex lg:flex xl:flex xxl:flex justify-between ">
                  <div className="xxs:rounded-br-none xxs:rounded-bl-none
                                xs:rounded-br-none xs:rounded-bl-none
                                sm:rounded-br-none sm:rounded-bl-none
                      bg-gradient-to-b from-transparent via-yellow-600 to-black
                    bg-opacity-50 ">
                     <div className="h-max grid block  grid-flow-col ">
                       <div className="p-2">
                         <h3 className="inline-block  px-4 py-6 leading-none bg-orange-200 rounded-full font-semibold capitalize tracking-wide text-xl">
                            {artDetails && artDetails.artistName}
                         </h3>
                          <span className="block w-max p-4  bg-yellow-500 rounded-full m-1 bg-opacity-60 place-content-center h-max" >
                            <ul className="list-none   mx-2  md:list-disc lg:list-disc xl:list-disc text-xs p-1">
                               <li><span className="font-semibold">Title:</span> 
                                        <span className="mx-2 bg-yellow-800 px-2 text-sm text-gray-300 rounded-sm py-0.5">
                                          {artDetails && artDetails.title}
                                        </span>
                               </li>
                               <li>Medium: <span className=" px-2 text-sm rounded-sm ">{artDetails && artDetails.medium}</span></li>
                               <li>In stock: <span className=" ml-4 font-semibold px-1 text-sm ">{artDetails && artDetails.countInStock}</span></li>
                               <li>
                                   Artist is Based in: <span className="text-white mx-1 font-thinbold text-sm">{artDetails && artDetails.address}</span>
                                   <span className="mx-1 text-xs text-gray-300">this artist accepts studio visists</span>
                               </li>
                            </ul>
                          </span>
                          <div className="my-2 px-4 product location bg-white">
                              <h4 className="py-3">
                                 <span className="font-semibold">Citizen of </span>: {artDetails && artDetails.countryOfArtist}
                              </h4>
                          </div>
                       </div>
                      
                    </div>
                  </div>
                 {/* select travel dates   */}
                  <div className="block bg-gradient-to-b from-transparent via-yellow-600 to-black  py-2 px-8
                           bg-white w-full w1/4 
                           justify-center
                           
                            "
                  >
                      <div className=" mt-16   items-center">
                      <h3 className="text-black py-2">
                        <span>Artists Current event
                          <span className="font-thin text-xs">Space for real time artist's current events or exhibitions</span>
                          </span>
                      </h3>
                     </div>
                          <div className="my-1">                      
                               API coming Up
                          </div>                              
                     </div>
                    <div className="block bg-gradient-to-b from-transparent via-yellow-600 to-yellow-600  py-2 px-4
                           bg- wmax  h-1/2 p-2 
                           justify-center
                            "
                            >
                      <div className=" w-64  items-center">
                      <h3 className="text-black py-2">
                        price: <span>$
                           <span className="font-semibold"> {artDetails && artDetails.price}</span></span>
                      </h3>
                     </div>
                      <div className="my-3">
                      <div className="bg-indigo-70 h-8  lg:flex xl:flex xxl:flex justify-center
             ">

   {/* add condition to allow only loged in user to book */}     
              
               <button 
                     onClick={()=> addToCartHandler(id)}
                   className={`
                                     w-max
                                     h-full
                                     text-md px-5
                                      bg-gradient-to-r from-transparent red-300 via-black to-black
                                     hover:from-yellow-500 hover:via-red-600 hover:to-yellow-600                                 
                                     text-white
                                     ring ring-green-600 
                                     ring-offset-1 ring-offset-green-100
                                     rounded-sm       
                                   `}
              >
                         add to cart
                   </button>
            </div>
                        
                      </div>
                      <div className="my-3">
                            more your way
                      </div>                              
                  </div>
             </div>
                <p className="font-semibold  text-md mx-2 my-10 px-6">
                    Description: <span className="font-thin mx-2 ">{artDetails && artDetails.description}</span>
                </p>

        </div>
        <div className="p-4 border-t border-b text-xs text-gray-700">
        <div className="rating-outer">
                            <div
                                className="rating-inner"
                                // style={{ width: `${(safari.rating / 5) * 100}%` }}
                            ></div>
                        </div>
                        <span id="no_of_reviews">( Reviews)</span>


          <span className="flex items-center">
            <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i> rating: 
          </span>        
        </div>

                        <div className="p-2 flex items-center text-sm text-gray-600">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 fill-current text-yellow-500">
                                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z">
                                     </path>
                           </svg>
                           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
                               className="h-4 w-4 fill-current text-yellow-500">
                              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                           </svg> 
                           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
                                   className="h-4 w-4 fill-current text-yellow-500">
                                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z">
                                  </path>
                           </svg>
                           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
                              className="h-4 w-4 fill-current text-yellow-500">
                                   <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z">
                                  </path>
                           </svg>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400">
                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z">
                            </path>
                          </svg>
                          <span className="ml-2 text-red-300" >
                             Reviews
                          </span>
                        </div>
      </div>
      </div>


  {/* product details end */}
                      

        </div>

    </motion.div>
</div>

{/* other similar products section */}
<div className="mt-16  bg-gray-100 opacity-90">
                <h3 className="text-gray-600 text-2xl font-medium mx-10 py-4">More Products</h3>
                <div className="grid   gap-6  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 
                                px-20
                               "
                >

                       {     
                          allStoredProducts && [ ...allStoredProducts].reduce((result, item, i, arr) => {


                                result = arr.slice(0, 4).map((el) => el)
                                 return result.map((el) => {
                                        return (
                                                 <React.Fragment key={el._id}>

                                                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                                                      <div className="flex items-end justify-end h-56 w-full bg-cover" 
                                                        >
                                                        <a href={`/shop/product/${el._id}`}>
                                                           <img src={el && el.imagesOfProduct[0].url}
                                                                alt={el.artistName}  
                                                                className="w-full h-full object-center object-cover group-hover:opacity-75"
                                                             /> 
                                                        </a>  
                                                            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500
                                                                              "
                                                                    onClick={()=> addToCartHandler(el._id)}          
                                                            >
                                                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                                            </button>
                                                        </div>
                                                        <div className="px-5 py-3">
                                                            <h3 className="text-gray-700 uppercase">{el.title}</h3>
                                                            <span className="text-gray-500 mt-2">${el && el.price}</span>
                                                        </div>                                                        
                                                    </div>
                                                    </React.Fragment>
                                                )
                                        }    
                                    )                                   

                          }, [null])
                       
                       
                       }

                </div>
            </div>



<div className="py-12 container mx-auto bg-gray-50a bg-black bg-opacity-80">
<h2 className="text-center font-light font-semibold my-6 text-3xl text-white">Painting of the week</h2>
<div className="flex">
    <motion.div className="w-1/2 my-10 bg-yellow-600"
    >

         <img src="https://res.cloudinary.com/magimaart/image/upload/v1638543787/portfolioApp/painting%20/toxic_man-center-view_dpewwi.jpg" alt=""/>

    </motion.div>
    <div className="w-1/2 flex flex-col mt-10 -ml-12">
            <div className="ml-16 h-8 w-max rounded-full text-white px-5 border border-grey-dark flex items-center justify-center">
                quick tips for our online auctions
            </div>
        <div className="flex items-center mb-10 mt-6">
            <div className="mr-4 h-8 w-8  rounded-full border border-grey-dark flex items-center justify-center">
                1
            </div>
            <p className="text-sm text-black">
              <a className="text-blue font-semibold" href="#"><span className="text-white px-2"> regiter and complete registration proccess</span></a></p>
        </div>
        <div className="flex items-center mb-10">
            <div className="mr-4 h-8 w-8 rounded-full border border-grey-dark flex items-center justify-center">
                2
            </div>
            <p className="text-sm text-black">
            <span className="text-white px-2">navigate to the auction page</span>            </p>
        </div>

        <div className="flex items-center">
            <div className="mr-4 h-8 w-8 rounded-full border border-grey-dark flex items-center justify-center">
                3
            </div>
            <p className="text-sm text-black">
            <span className="text-white px-2">carefully read instructions and place your bid</span>                </p>
        </div>
    </div>

</div>
</div>



{/* recommended based on your interest */}

<div className="py-12 blue-shadow  bg-gray-600 bg-opacity-80">
<div className="container mx-auto">
    <h2 className="text-center font-thin text-4xl text-white mb-10">Most priced paintings</h2>
    <div className="flex">
        <div className="w-1/3 text-center px-8">
            <div className="py-8">
                <h3 className="font-light text-white text-2xl">painting fetched the highest prices</h3>
            </div>
            <p className="leading-normal text-white text-sm">
               the master pieces that fetched the highest prices this week left critics and curators wondering
            </p>
        </div>
        <div className="w-1/3 text-center px-8">
            <div className="py-8">
                <h3 className="font-light text-white text-2xl">The hammour will hammour down in 3 seconds.</h3>
            </div>
            <p className="leading-normal text-white text-sm">
               Art workshops that the community keeping asking for a repeat
            </p>
        </div>
        <div className="w-1/3 text-center px-8">
            <div className="py-8">
                <h3 className="font-light text-white text-2xl">Kenya's most valuable painter has no paintings to sell anymore</h3>
            </div>
            <p className="leading-normal text-white text-sm">
               An Artist in Colgne Germany only opens his studio for viewers for under 20 mins
            </p>
        </div>
    </div>
</div>
</div>

<div className="py-12 flex flex-col items-center justify-center bg-indigo-800 bg-opacity-50">
<div className="w-1/4 text-center bg-green-600 bg-opacity-50 shadow-xl rounded-md">
    <h3 className="font-thin text-grey-lightest text-3xl py-6">
           Register now for our online art Work shops
    </h3>
    <button className="bg-blue-dark text-white text-xs font-semibold shadow py-4 w-full rounded-full">Get Started</button>
</div>
</div>

   </Parallax>


   </div> 
     </>
  );
}

export default ProductDetailsPage;





