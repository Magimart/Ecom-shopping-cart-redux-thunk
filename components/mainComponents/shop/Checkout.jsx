import { motion } from "framer-motion";  //____testing
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef, useCallback } from "react";
import { clearErrors, orderSummary } from "../../../redux/actions/checkoutActions";
import { useRouter } from 'next/router'
import SwitchToggleBtn from "../../microComponents/ToggleSwitch";


//________________________________________________leftwidget
export const CheckoutPageModel = () => {

    
    //hooks
    const dispatch = useDispatch();
    const router = useRouter();
    const [itemsToOrder, setItemsToOrder] = useState([]);
    const [totalSum, setTotalSum] = useState(0);
 
    const [shippingAddress, setShippingAddress] = useState(
                                        // {name: ""},
                                        // {email: ""},
                                        // {address: ""},
                                        // {city: ""},
                                        // {state: ""},
                                        // {zip: 0},
                                        // {country: ""}
                                        {name: "",
                                        email: "",
                                        address: "",
                                        city: "",
                                        state: "",
                                        zip: 0,
                                        country: ""}
                                    )
    const [paymentMethod, setPaymentMethod] = useState({
                                                         id: "",
                                                         status:""
                                              })
    // const [cardInfo, setCardInfo] = useState({
    //                                            cardNumber: "",
    //                                            expiryDate: "",
    //                                            cardCvc: ""   ,
    //                                       });

   


    const fetchOrder = useSelector((state) => state.checkout.newOrder); 
    console.log(fetchOrder)
     
     const {orders, sum} = fetchOrder;

     console.log(orders)
       


     useEffect(() => {

                if(!sum){
                 router.push('/shop/cart') 
                }
                 setItemsToOrder(orders && orders)
                 setTotalSum(sum && sum)

                    dispatch(clearErrors());
        }, [dispatch, itemsToOrder, sum, fetchOrder ]);


      
    const submitHandler = (e) => {
        // e.preventDefault() 
    try {

                const newOrder = {
                        shippingAddress, 
                        paymentMethod,
                        itemsToOrder,
                        totalSum               
                }

                console.log(newOrder)

                   if( orders && shippingAddress ){
                       dispatch(orderSummary(newOrder))
                            router.push('/shop/order-summary') 
                     dispatch(clearErrors());
                    }
                    return undefined; // add component!!
                  

         } catch (error) {
            console.error(error.message)
        }
   }





   const runSubmitHandler = ( ) => submitHandler()

const handlerChange = async(e)=> {

           //________shipping info
           if(e.target.name === "name"){
                setShippingAddress({
                    ...shippingAddress, [e.target.name]: e.target.value,
                } );
           }
            if(e.target.name === "email"){
                setShippingAddress({
                    ...shippingAddress, [e.target.name]: e.target.value,
                } );
            }
            if(e.target.name === "address"){
                    setShippingAddress({
                        ...shippingAddress, [e.target.name]: e.target.value,
                    } );
            }
            if(e.target.name === "city"){
                setShippingAddress({
                    ...shippingAddress, [e.target.name]: e.target.value,
                } );
           }
           if(e.target.name === "state"){
                setShippingAddress({
                    ...shippingAddress, [e.target.name]: e.target.value,
                } );
           }
           if(e.target.name === "zip"){
                setShippingAddress({
                    ...shippingAddress, [e.target.name]: e.target.value,
                } );
          }
          if(e.target.name === "country"){
                setShippingAddress({
                    ...shippingAddress, [e.target.name]: e.target.value,
                } );
           } 
           
           
             //    cardInfo
        //    if(e.target.name === "cardNumber"){
        //         setCardInfo({
        //             ...cardInfo, [e.target.name]: e.target.value,
        //         } );
        //     } 
        //     if(e.target.name === "expiryDate"){
        //         setCardInfo({
        //             ...cardInfo, [e.target.name]: e.target.value,
        //         } );
        //     } 
        //     if(e.target.name === "cardCvc"){
        //         setCardInfo({
        //             ...cardInfo, [e.target.name]: e.target.value,
        //         } );
        //     } 

           
  
}



 console.log(paymentMethod)

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
                    <div className="rounded-md">
                        <form id="payment-form" method="POST" action=""
                            onSubmit={submitHandler} encType="multipart/form-data"
                        >
                            <section>
                          {/* shipping ____info ________________________*/}
                            <div className="my-10">
                            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Shipping & Billing Information</h2>
                            </div>
                                <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600"

                                >
                                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                        <span className="text-right px-2">Name</span>
                                        <input className="focus:outline-none px-3"
                                               placeholder="your name" required="" 
                                               name="name" 
                                               value={shippingAddress.name} 
                                               onChange={handlerChange}
                                        />
                                    </label>
                                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                        <span className="text-right px-2">Email</span>
                                        <input type="email" className="focus:outline-none px-3" 
                                               placeholder="try@example.com" required="" 
                                               name="email" 
                                               value={shippingAddress.email} 
                                               onChange={handlerChange}                                        />
                                    </label>
                                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                        <span className="text-right px-2">Address</span>
                                        <input className="focus:outline-none px-3"
                                               placeholder="your street address" 
                                               name="address" 
                                               value={shippingAddress.address} 
                                               onChange={handlerChange}                                        />
                                    </label>
                                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                        <span className="text-right px-2">City</span>
                                        <input className="focus:outline-none px-3" 
                                               placeholder="your city"
                                               name="city"
                                               value={shippingAddress.city} 
                                               onChange={handlerChange}                                         />
                                    </label>
                                    <label className="inline-flex w-2/4 border-gray-200 py-3">
                                        <span className="text-right px-2">State</span>
                                        <input className="focus:outline-none px-3"
                                               placeholder="your State"
                                               name="state"
                                               value={shippingAddress.state} 
                                               onChange={handlerChange}                                        />
                                    </label>
                                    <label className="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3">
                                        <span className="text-right px-2 xl:px-0 xl:text-none">ZIP</span>
                                        <input className="focus:outline-none px-3"
                                               placeholder="your zip code"
                                               name="zip"
                                               value={shippingAddress.zip} 
                                               onChange={handlerChange}                                        />
                                    </label>
                                  
                                   {/* select country__________ */}
                                    <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                                        <span className="text-right px-2">Country</span>
                                            <div className="w-full flex flex-col mb-3">
                                            
                                                <select className="block w-full h-max bg-ligher-grey text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " 
                                                        required="required" 
                                                        id="countryOfShipping"
                                                        name="country"  
                                                        value={shippingAddress.country} 
                                                        onChange={handlerChange}
                                                >
                                                    {
                                                        [  "Australia" , "Belgium", "Brazil", "Canada", "China ", "Denmark ", "Germany", 
                                                                "Hong Kong",  "Ireland ", "Italy ", "Japan ", "Luxembourg ", "Mexico ", "Netherlands", "Poland ", "Portugal", "Singapore",
                                                                "Uganda", "Tunisia", "United Kingdom ","Rassia", "Spain", "Tanzania","United States","Kenya",
                                                            ].map(country => (
                                                            <option key={country}
                                                            value={country}
                                                            > 
                                                                {country}
                                                            </option>

                                                        ))
                                                    }
                                                </select>

                                                <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                                            </div>
                                    </label>
                                </fieldset>
                            </section>
                        </form>
                    </div>
                    <div className="rounded-md">
{/* payment method */}
         <section>   
             <div className="my-10">
                 <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Payment Method</h2>
              </div>
              <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700  max-width: 600px">
                    <div className="grid mb-8  cols-span-full justify-center        
                                       "
                            >
                               <div className="w-full h-full flex justify-center mx-2 px-6  my-6
                                             group border-indigo-500 hover:bg-yellow-900 
                                             bg-opacity-10  
                                             hover:shadow-2xl hover:border-transparent rounded-lg
                                           "
                                >
                                    <div className="block justify-center  my-10  ">
                                               <div className=" flex w-full
                                                ">
                                                    <label className=" text-md items-center py-4  mx-2  text-gray-700
                                                           group-hover:text-gray-200 
                                                           text-lg
                                                            justify-center
                                                     ">
                                                   select a payment option                                          
                                                </label>                                                
                                                </div>
                                                <div className="relative justify-center flex w-full
                                                ">
                                                   <SwitchToggleBtn
                                                        paymentMethod={paymentMethod}
                                                        setPaymentMethod={setPaymentMethod}
                                                   />
                                                </div>

                                    </div> 
                                        
                             </div>
                         </div>   
                 </div>
           </section>


          {/* end payment method */}

            {/* <section className="py-10">

                    {
                        paymentMethod && paymentMethod.id === "stripe"? (
                            <>
                             <div className="my-10 ">
                                  <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Payment Information</h2>
                              </div>
                              <fieldset className="mb-3 bg-white py-10 shadow-lg rounded text-gray-600">
                                <form className="flex flex-wrap gap-3 w-full p-5">
                                    <label className="relative w-full flex flex-col">
                                        <span className="font-bold mb-3">Card number</span>
                                        <input className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                                                type="text" 
                                                placeholder="0000 0000 0000"
                                                name="cardNumber" 
                                                value={cardInfo.cardNumber}
                                                onChange={handlerChange}
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </label>

                                    <label className="relative flex-1 flex flex-col">
                                        <span className="font-bold mb-3">Expire date</span>
                                        <input className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300" 
                                                type="text" 
                                                placeholder="MM/YY"
                                                name="expiryDate"
                                                value={cardInfo.expiryDate}
                                                onChange={handlerChange}
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </label>

                                    <label className="relative flex-1 flex flex-col">
                                        <span className="font-bold flex items-center gap-3 mb-3">
                                        CVC/CVV
                                        <span className="relative group">
                                            <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white"> Hey ceci est une infobulle !</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </span>
                                        </span>
                                        <input className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                                                type="text"
                                                placeholder="&bull;&bull;&bull;"
                                                name="cardCvc"
                                                value={cardInfo.cardCvc}
                                                onChange={handlerChange}
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </label>
                               </form>
                             </fieldset>
                            </>
                        ): (""
                        )
                    }
            </section> */}
                        </div>
                        
                        </div>  
                    </div>

            {/* right________ */}
            <div className="summaryWrapper xxs:order-first xs:order-first sm:order-first  block col-span-3  md:col-span-1 lg:col-span-1 xl:col-span-1 xxl:col-span-1 w-full bg-yellow-400 bg-opacity-10 py-16 px-3">
                <div className="col-span-1 bg-white lg:block hiddenvv">
                    <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Your Order Summary</h1>
                    <ul className="py-6 border-b space-y-6 px-8">

                        {

                          orders && orders.map((item) => {
                            console.log(item)

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
                         onClick={()=> runSubmitHandler()}
                         >
                            {/* Pay € <span className="px-1 text-gray-200 ">{totalSum && totalSum}</span> */}
                            continue with purchase
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
  





  
  