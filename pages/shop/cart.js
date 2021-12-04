import { useDispatch, useSelector } from 'react-redux';
 import { clearErrors, removeFromCart, increaseCartQuantity, decreaseCartQuantity} from '../../redux/actions/cartActions';
 import { procceedToCheckout} from '../../redux/actions/checkoutActions';

import  Link  from 'next/link';
import React, {useEffect, useState, useMemo, useCallback} from 'react';
import { CartItem } from '../../components/microComponents/cart/cartItem';
import { useRouter } from 'next/router'
import { addToCart } from "../../redux/actions/cartActions";
import { getLocalState } from '../../utils/helpers/cartHelpers';


// import { getAllProducts } from "../../redux/actions/productActions"; //trial


  const CartPage = () =>  {

    //___states
    const [selectedItems, setSelectedItems ] = useState([]);
    const [qty, setQty ] = useState(1);
    const [ cartOrder, setCartOrder] = useState([]);



    //___hooks
     const router = useRouter();
    // const {id} = router.query;
    const dispatch = useDispatch();


    const inCart = useSelector((state) => state.cart); 

    console.log(inCart)
     const cartItems = inCart.cartItems;
        
      // const cartItems = [];


        useEffect(() => {

              const isLocalItem =  JSON.parse(localStorage.getItem("cart"));
                  setSelectedItems( inCart && cartItems);  // setselectedItems(isLocalItem);
                  setCartOrder( isLocalItem && isLocalItem);
                    dispatch(clearErrors());

               //     }, [dispatch, id, router, cartItems ]);
        }, [dispatch, qty ]);


        const procceedToCheckouthandler = async() => {

          if( cartItems && cartItems.length ){
            let totalPrice = await getTotalAmount()
               dispatch(procceedToCheckout( selectedItems, totalPrice))
               router.push('/shop/checkout') 
             dispatch(clearErrors());
            }
            return undefined; // add component!!
          }
          
                console.log(inCart)
                console.log(cartItems)

  {selectedItems && console.log(selectedItems)}
                          

               //____________________make all dispatch in an useEffectHook!!!
                  const qtyChangeHandler = (id, qty) => {
                    dispatch(addToCart(id, qty))
                  }


                  const removeHandler = (id) => {
                    console.log(id)
                    dispatch(removeFromCart(id))
                  }

             //____increase qty

               const increaseHandler = (id) => {
                    console.log(id)             
                     dispatch(increaseCartQuantity(id, qty))
               }
             //____decrease qty
               const decreaseHandler = (id) => {
                    dispatch(decreaseCartQuantity(id, qty))
               }
        

              //_______total sum of all items
                const getTotalAmount = () => selectedItems && [ ...selectedItems].reduce((result, item ) => {
                          let sum =  result + item.price * item.qty;
                        return sum;
                }, 0)

  //____________________procceec to checkout


  // const handleOrderPurchase = async( ) => {
  //          try{      
  //         // set headers to the post resquests
  //         const config = {
  //           headers: {
  //             'Content-Type' : 'application/json',     
  //           }
  //         }

  //        const {data} = await axios.post('/api/orders', selectedItems, config) 
         
  //       console.log(data);

  //    }catch(error){
  //       console.error(error.message)
  //    }
  //   }


          return (

                    <div className="grid h-full w-screen  bg-yellow-900 bg-opacity-20 ">
                      
                        <div className="grid grid-cols-3 gap-1 p-2  ">
                            <div className=" col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 xxl:col-span-2 
                                         w-full bg-gray-600 bg-opacity-20 py-10 px- 
                                         
                                       "
                            >
                                <div className="cartItemWrapper">
                                    <div className="justify-center items-center mx-20 px-10 py-10">
                                         <h1 className="my-5 ">Your Shopping Cart</h1>

                                          <Link href={`/shop`} className="cartItem__name "> 
                                                        <p className="cartItem__name bg-gray-400 text-white  px-10 py-2 w-max ">
                                                          back to shop
                                                        </p>
                                          </Link>
                                   </div>

                                            {
                                              // selectedItems && selectedItems.selectedItems.length?  (
                                                selectedItems && selectedItems.length?  (

                                                      <>                    
                                                        {
                                                          selectedItems.map((item)=> {
                                                            console.log(item.qty)
                                                              return (
                                                                    <React.Fragment key={item._id}>
                                                                        <CartItem item={item} 
                                                                          qtyChangeHandler={qtyChangeHandler}
                                                                          removeHandler={removeHandler}
                                                                          increaseHandler={increaseHandler}
                                                                          decreaseHandler={decreaseHandler}
                                                                        />
                                                                    </React.Fragment> 
                                                                  )
                                                          })
                                                        }
                                                      </>
                                                    ): (
                                                      <>
                                                      </>
                                                  )
                                          }
                                </div>
                            </div>
                            <div className="block col-span-3  md:col-span-1 lg:col-span-1 xl:col-span-1 xxl:col-span-1 w-full bg-yellow-400 bg-opacity-10 py-16 px-3">
                                    <div className="w-full mt-6 py-3 bg-white flex justify-center bg-gray-700  text-white rounded-md">
                                      Checkout
                                    </div>
                                <div className="px-10 bg-gray-800 bg-opacity-70 rounded-md py-4 justify-center block mt-16 mx-2">
                                    <div className="cartscreenInfo   ">
                                    <h3 className="text-xl  font-bold py-5">
                                        Sub quantity: 
                                        {/* ({getCartCount()}) */}
                                        
                                        </h3>
                                         <h4 className="py-4 justify-center flex font-bold text-lg"> Price: € 
                                            <span className="text-white bg-gray-700 mx-4 px-6 py-1 ">
                                             { getTotalAmount() }
                                            </span>
                                          </h4>
                                    </div>
                                    <div className="flex justify-center py-6">
                                          <button className="bg-green-800 px-4 py-2 rounded-md text-white 
                                                            ring-4 ring-yellow-500 ring-opacity-50"
                                            onClick={procceedToCheckouthandler}              
                                          >
                                                       Proceed To Checkout
                                          </button>
                                    </div>
                                </div>                
                            </div>
                        </div>
                    </div>
               )
}

export default CartPage;



