import { motion } from "framer-motion";  //____testing
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef, useCallback } from "react";
import { clearErrors} from "../../../redux/actions/checkoutActions";
import { useRouter } from 'next/router'
// import { newOrderPurchase } from "../../../redux/actions/orderActions";
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';


//________________________________________________leftwidget
export const OrderSummaryPageModel = () => {

    
    //hooks
    const dispatch = useDispatch();
    const router = useRouter();
    const [productOrder, setProductOrder] = useState([]);
    const [totalSum, setTotalSum] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState({});
    const [shippingAddress, setShippingAddress] = useState({})


    const [loading, setLoading] = useState(false);


    const orderSummary = useSelector((state) => state.orderSummary.newOrderSummary); 
      const data = orderSummary.summary;
    //   console.log(data)

    

      
    const submitHandler = async(e) => {
        // e.preventDefault() 
        try {

                const purchaseOrder =  {
                        purchasedProduct: productOrder && productOrder,
                        shippingAddress, 
                        paymentMethod,
                        amountPaid: totalSum               
                }

                console.log(purchaseOrder)

                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
        
                   const {data} = await axios.post(`/api/order`, purchaseOrder, config)
        
                       console.log("here details from oders <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
                       console.log(data)
            
           } catch (error) {
            console.error(error.message)
        }
   }


   //____________stripe checkout_____
//    const publishableKey = process.env.STRIPE_PUBLIC_KEY;
   const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);
   const createCheckOutSession = async () => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
     setLoading(true);

     const stripe = await stripePromise;
     const checkoutSession = await axios.post('/api/create-stripe-session',
                  productOrder, config );
       
     console.log("here is the checkout session _________________--xx")             
    console.log(checkoutSession)

     const result = await stripe.redirectToCheckout({
       sessionId: checkoutSession.data.id,
     });
     if (result.error) {
       alert(result.error.message);
     }
     setLoading(false);
   };


        useEffect(() => {

            // if(!sum){
            //  router.push('/shop/cart') 
            // }
            setProductOrder(data && data.itemsToOrder)
            setTotalSum(data && data.totalSum)
            setShippingAddress( data && data.shippingAddress )
            setPaymentMethod(data && data.paymentMethod )

                dispatch(clearErrors());
        }, [dispatch, orderSummary, data ]);



    return (
      <>
         <motion.section
              className="relative text-gray-700 body-font"
         >
          <div className=" flex items-center justify-center 
                              relative 
                              bg-gray-500 py- h-full
                              sm:px-6 lg:px-8a
                              "
          >
            <motion.div className="checkOutWrapper bg-black space-y-1a bg-white
                              bg-opacity-10 
                              px mx-4a my-8
                              relative 
                  "
                initial={{ 
                  height: "1%", 
                  opacity: 0, 
                  // x: 60, scale: -0.6 }} no sale on small screens
                  x: -1000,
                    scale: 0.6
                  }}
               animate={{
                  height: "100%", 
                  width: "100%", 
                    opacity: 1,
                    // x: -447,small
                    x: 0,
                    // y:0,
                    scale: 0.9,
                    boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)",
                    transition: {
                      duration: 1,
                         scale: 5, 
                        // type: "tween", stiffness: -10 } gd
                        type: "spring", stiffness: 10 }
  
                  }
                }
                exit={{ opacity: 0, scale: -0.5, transition: { duration: 0.6 } }}                 
            >
         {/* start model */}

<section>
    <div className="grid grid-cols-3 gap-1 p-2 ">

            <div className="checkOutFormWrapper col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 xxl:col-span-2 
                                    w-full bg-gray-60 bg-opacity-10 py-10 px-                                          
                            "
            >
                {/* left_________ */}

                <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
                    <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                        <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                            <div className="text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="text-sm font-medium ml-3">Checkout</div>
                        </div>
                        <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Complete your shipping and payment details below.</div>
                        <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                    </div>
                    <div className="my-10">
                        <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Shipping Address</h2>
                    </div>
                    <div className="rounded-md">
                        <div className="bg-white p-2 rounded mt-1 border-b border-grey hover:bg-grey-lighter">
                            {/* /apply map() */}
                           <p className="px-1">Name :  {shippingAddress && shippingAddress.name} </p>
                           <p className="px-1">Email : {shippingAddress && shippingAddress.email}  </p>
                           <p className="px-1">Address: {shippingAddress && shippingAddress.address}</p>
                           <p className="px-1">City : {shippingAddress && shippingAddress.city}  </p>
                           <p className="px-1">State : {shippingAddress && shippingAddress.state} </p>
                           <p className="px-1">Country : {shippingAddress && shippingAddress.country} </p>
	                   </div>
                    </div>
                    <div className="rounded-md">

                        {/* payment method */}
                        <div className="my-10">
                            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Payment Method</h2>
                        </div>
                        <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700  max-width: 600px">
                            <div className="grid mb-8  cols-span-full justify-center        
                                            "
                            >
                                   <div className="block justify-center  my-10  ">
                                            <div className=" flex w-full
                                                ">
                                                <p className=" text-md items-center py-4  mx-2  text-gray-700
                                                        group-hover:text-gray-200 
                                                        text-lg
                                                            justify-center
                                                    ">
                                                payment : {paymentMethod && paymentMethod.id}                                         
                                                </p>                                                
                                            </div>                                                          
                                    </div>                                                     
                            </div>   
                        </div>

                        {/* end payment method */}
                        <section className="py-10">
                            some more
                        </section>
                 </div>                       
                </div>  
           </div>

            {/* right________ */}
            <div className="summaryWrapper xxs:order-first xs:order-first sm:order-first  block col-span-3  md:col-span-1 lg:col-span-1 xl:col-span-1 xxl:col-span-1 w-full bg-yellow-400 bg-opacity-10 py-16 px-3">
                <div className="col-span-1 bg-white lg:block hiddenvv">
                    <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Your Order Summary</h1>
                    <ul className="py-6 border-b space-y-6 px-8">

                        {

                          productOrder && productOrder.map((item) => {

                            return (
                                <React.Fragment key={item._id}>
                                <li className="grid grid-cols-6 gap-2 border-b-1"
                                      
                                    >
                                            <div className="col-span-1 self-center">
                                               <img 
                                                    src={item && item.imagesOfPainting[0].url} alt={item.artistName} 
                                              />                                            </div>
                                            <div className="flex flex-col col-span-3 pt-2">
                                                <span className="text-gray-600 text-md font-semi-bold">title: {item.title}</span>
                                                <span className="text-gray-400 text-sm inline-block pt-2">artist: {item.artistName}</span>
                                            </div>
                                            <div className="col-span-2 pt-3">
                                                <div className="flex items-center space-x-2 text-sm justify-between">
                                                    <span className="text-gray-400"> { `${item.qty}   x   ${item.price}`} </span>
                                                    <span className="text-pink-400 font-semibold inline-block">{`${item.qty * item.price}`}</span>
                                                </div>
                                            </div>
                                        </li>

                                        </React.Fragment >
                            )                              
                           }) 

                        }
                   </ul>
                    <div className="px-8 border-b">
                        <div className="flex justify-between py-4 text-gray-600">
                            <span>Subtotal</span>
                            <span className="font-semibold text-pink-500">{totalSum && totalSum}</span>
                        </div>
                        <div className="flex justify-between py-4 text-gray-600">
                            <span>Shipping</span>
                            <span className="font-semibold text-pink-500">Free</span>
                        </div>
                    </div>
                    <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                        <span>Total</span>
                        <span>€{totalSum && totalSum}</span>
                    </div>
                </div> 
                <div className="paybtnWrpper py-10 flex justify-center  ">
                      <button className="submit w-max transition ease-in duration-700 
                        px-16 py-3 rounded-full bg-green-800 bg-opacity-80 text-white
                         focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
                         type="submit"
                         onClick={()=> submitHandler()}
                        // onClick={()=> createCheckOutSession()}

                         >
                            {/* Pay € <span className="px-1 text-gray-200 ">{totalSum && totalSum}</span> */}
                            pay
                       </button>
                </div>
            </div>
    </div>
</section>


{/* end model */}
            </motion.div>
         </div>
      </motion.section>
  
          </>
    );
  };
  





  
  