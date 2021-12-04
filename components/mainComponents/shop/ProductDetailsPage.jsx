import { motion,  useViewportScroll, useTransform, useMotionValue } from "framer-motion";  
import { useState, useEffect, useRef, useMemo } from "react";
import { Parallax, Background } from "react-parallax";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from 'next/router'
// import { checkSafariBookingAvailability } from "../../../redux/actions/checkBookingActions";
// import { SwapSlide } from "../../../commons-components/SwapSlider";
import { wrap } from "popmotion";
import { SwapSlide } from "../../microComponents/SwapSlider";
import { addToCart } from "../../../redux/actions/cartActions";
import { clearErrors, getAllProducts, getProductDetails } from "../../../redux/actions/productActions";
// import { useHistory } from "react-router-dom";



const ProductDetailsPage = ({ animateFromRight, enterFromLeft, animateFromLeft }) =>  {

  const [addedItem, setAddedItem] = useState([]);

   const [selectedCartId, setSelectedCartId] = useState([]);
  // const [selectedItems, setSelectedItems] = useState([]);
  // const [allProductIds, setAllProductIds] = useState([]);
  const [qty, setQty] = useState(1)
  const [ startSafariDate, setStartSafariDate] = useState();
  const [ endSafariDate, setEndSafariDate] = useState();
  const [daysOfTravel, setDaysOfTravel] = useState()
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

  console.log(product)
  

  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const exitRight = useTransform(scrollY, [200, -60], [600, 0]);

  const scale = useMotionValue(2.4)
  const x = useMotionValue(0)
  const xRange = [-10, 2]
  const opacityRange = [0, 1]
  const opacity = useTransform(x, xRange, opacityRange)


  // let { allStoredProducts  }= useSelector(state => state.allProducts);
    const {product, error} = useSelector(state => state.productDetails);
    console.log(product)
     const {productDetails} = product;
 

console.log(router.query)
const { id } = router.query;
 console.log(id)

        useEffect(() => {
                        //     // scrollY.onChange(setOnScrollVelocity);
                        // // toast.success("here are safaris based on your request");
                        // // toast.error("oops something went wrong")
                dispatch(getAllProducts());
                dispatch(clearErrors());

                if (productDetails && id !== productDetails._id) {
                     dispatch(getProductDetails(id))
                 }
         }, [dispatch, product]);
      // }, [dispatch, router,  product ]);


        const addToCartHandler = async() => {

         // dispatch(addToCart(productDetails._id, qty));   //_____________ch!!
           dispatch(addToCart(productDetails._id));

          router.push('/shop/cart') 
        }


    const handleNewBooking = async( ) => {

      const travelData = {
        safari: router.query.id,
        startSafariDate,
        endSafariDate,
        amountPaid:40,
        daysOfTravel,
        paymentInfo: {
          id: "paypal",
          status: "completed"
        }
      }

       try{
           
            // set headers to the post resquests
            const config = {
              headers: {
                'Content-Type' : 'application/json',     
              }
            }

           const {data} = await axios.post('/api/bookings', travelData, config) 
           
           console.log(data);

       }catch(error){
          console.error(error.message)
       }
    }
   


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
                                   bg-gradient-to-b from-transparent via-green-600 to-transparent
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
                              {/* {product.countryOfArtist} */}
                              name
                            </motion.h1>
                        </>                    
                       ):("")
                    } 
                </div>
            </div>
          </div>
        </div>

        {/* slider section_____________ imagesOfPainting  */}
         { product && productDetails.imagesOfPainting? [...productDetails.imagesOfPainting].reduce((result, data, i, arr) => {

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

              },[null]) //_______________rm

              : (null)
              } 


    </div>
<div className="flex flex-row  justify-center relative h-screena w-screen  bg-blue-400 bg-opacity-20">

    {/* anim frm right */}
    <motion.div className="w-full  relative flex justify-center  bg-white bg-opacity-30"
                variants={animateFromRight}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                      x: { type: "spring", stiffness: 100, damping: 30 },
                      opacity: { duration: 0.9 }
                }}
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
                            {productDetails.artistName}
                         </h3>
                          <span className="block w-max p-4  bg-yellow-500 rounded-full m-1 bg-opacity-60 place-content-center h-max" >
                            <ul className="list-none   mx-2  md:list-disc lg:list-disc xl:list-disc text-xs p-1">
                               <li><span className="font-semibold">Title:</span> 
                                        <span className="mx-2 bg-yellow-800 px-2 text-sm text-gray-300 rounded-sm py-0.5">
                                          {productDetails.title}
                                        </span>
                               </li>
                               <li>Medium: <span className=" px-2 text-sm rounded-sm ">{productDetails.medium}</span></li>
                               <li>In stock: <span className=" ml-4 font-semibold px-1 text-sm ">{productDetails.countInStock}</span></li>
                               <li>
                                   Artist is Based in: <span className="text-white mx-1 font-thinbold text-sm">{productDetails.address}</span>
                                   <span className="mx-1 text-xs text-gray-300">this artist accepts studio visists</span>
                               </li>
                            </ul>
                          </span>
                          <div className="my-2 px-4 product location bg-white">
                              <h4 className="py-3">
                                 <span className="font-semibold">Citizen of </span>: {productDetails.countryOfArtist}
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
                           <span className="font-semibold"> {productDetails.price}</span></span>
                      </h3>
                     </div>
                      <div className="my-3">
                      <div className="bg-indigo-70 h-8  lg:flex xl:flex xxl:flex justify-center
             ">

   {/* add condition to allow only loged in user to book */}
   {/* handle roomavailabity 9:00 */}
             {/* {
                available === true && <div className="z-99 absolute text-white -top-1 w-40 h-10 bg-black p-2 m-4">
                       is available
                  </div>                                       
              } */}
        
       
              {/* {
                available && user &&               
                 <button onClick={handleNewBooking}
                    className={`
                                  w-20
                                  h-full
                                  text-sm px-1
                                   bg-gradient-to-r from-transparent red-300 via-green-400 to-black
                                  hover:from-yellow-500 hover:via-red-600 hover:to-yellow-600                                 
                                  text-white
                                  ring ring-green-600 
                                  ring-offset-1 ring-offset-green-100       
                                `}
           >
                      book safari
                </button>                                      
              } */}
              
               <button 
                   onClick={addToCartHandler}
                //    onClick={handleNewBooking}
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
                    Description: <span className="font-thin mx-2 ">{productDetails.description}</span>
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
            <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i> raring: 
            {/* {safari && safari? ( safari.rating + " " + safari.numberOfReviews): ("nothin")} */}
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
<div className="mt-16">
                <h3 className="text-gray-600 text-2xl font-medium">More Products</h3>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover" 
                        >
                                  <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" 
                                        alt="Hand holding black machined steel mechanical pencil with brass tip and top." 
                                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                                    />

                            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">Chanel</h3>
                            <span className="text-gray-500 mt-2">$12</span>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover" 
                        >
                                  <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" 
                                        alt="Hand holding black machined steel mechanical pencil with brass tip and top." 
                                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                                    />

                            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">Chanel</h3>
                            <span className="text-gray-500 mt-2">$12</span>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover" 
                        >
                                  <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" 
                                        alt="Hand holding black machined steel mechanical pencil with brass tip and top." 
                                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                                    />

                            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">Chanel</h3>
                            <span className="text-gray-500 mt-2">$12</span>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover" 
                        >
                                  <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" 
                                        alt="Hand holding black machined steel mechanical pencil with brass tip and top." 
                                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                                    />

                            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div className="px-5 py-3">
                            <h3 className="text-gray-700 uppercase">Chanel</h3>
                            <span className="text-gray-500 mt-2">$12</span>
                        </div>
                    </div>



                </div>
            </div>



<div className="py-12 container mx-auto bg-green-300 bg-opacity-40">
<h2 className="text-center font-light font-semibold my-6 text-3xl text-white">Safari itinerary details</h2>
<div className="flex">
    <motion.div className="w-1/2 my-10 bg-yellow-200"
                 ref={ref}
                 variants={enterFromLeft}
                 animate={inView ? "visible" : "hidden"}
                 transition={{ duration: 0.5, ease: "easeOut" }}
                 style={{ marginLeft: "50px" }}
    
    >

         <img src="https://res.cloudinary.com/magimaart/image/upload/v1628754038/safariBooking/body/Chimpanzees_Kibale_National_Park_voat81.jpg" alt=""/>

    </motion.div>
    <div className="w-1/2 flex flex-col mt-10 -ml-12">
        <div className="flex items-center mb-10 mt-6">
            <div className="mr-4 h-8 w-8 rounded-full border border-grey-dark flex items-center justify-center">
                1
            </div>
            <p className="text-sm text-black">Set up <a className="text-blue font-semibold" href="#">a business account.</a></p>
        </div>
        <div className="flex items-center mb-10">
            <div className="mr-4 h-8 w-8 rounded-full border border-grey-dark flex items-center justify-center">
                2
            </div>
            <p className="text-sm text-black">
              choose your ouwn dirrection but let the choice be done with equal respect
            </p>
        </div>

        <div className="flex items-center">
            <div className="mr-4 h-8 w-8 rounded-full border border-grey-dark flex items-center justify-center">
                3
            </div>
            <p className="text-sm text-black">
            choose your ouwn dirrection but let the choice be done with equal respect
                </p>
        </div>
    </div>

</div>
</div>



{/* recommended based on your interest */}

<div className="py-12 blue-shadow  bg-blue-300 bg-opacity-80">
<div className="container mx-auto">
    <h2 className="text-center font-thin text-4xl text-white mb-10">Most booked Safaris Simmilar to your interests</h2>
    <div className="flex">
        <div className="w-1/3 text-center px-8">
            <div className="py-8">
                <h3 className="font-light text-white text-2xl">Best offers in South Africa</h3>
            </div>
            <p className="leading-normal text-white text-sm">
               dont let the best tour operators pass you by....
            </p>
        </div>
        <div className="w-1/3 text-center px-8">
            <div className="py-8">
                <h3 className="font-light text-white text-2xl">Rwanda in 10 days.</h3>
            </div>
            <p className="leading-normal text-white text-sm">
               Genocides dont just happened, they are planned, financed and ......
            </p>
        </div>
        <div className="w-1/3 text-center px-8">
            <div className="py-8">
                <h3 className="font-light text-white text-2xl">look at Kenya´s best sold Safaris</h3>
            </div>
            <p className="leading-normal text-white text-sm">
               if the time ever comes for liberation, then trust your mind this should be it.....
            </p>
        </div>
    </div>
</div>
</div>

<div className="py-12 flex flex-col items-center justify-center bg-yellow-300 bg-opacity-40">
<div className="w-1/4 text-center">
    <h3 className="font-thin text-grey-darkest text-3xl py-6">
           We the pride because in us came you
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





