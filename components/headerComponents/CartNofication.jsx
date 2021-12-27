import Link from 'next/link'
import React, {useCallback} from 'react';
 import { getLocalState } from '../../utils/helpers/cartHelpers';
 import { useSelector } from 'react-redux';


const CartNotication = ({onFirstMount, currentPage}) => {

    const inCart = useSelector((state) => state.cart); 

    console.log(inCart)
    //  const cartItems = inCart.cartItems;
    //  console.log(cartItems)


    return (

        <>
            <div className="fixed w-max py-1 px-1 flex space-x-12 items-center rounded-md bg-gray-300
                            ring-offset-2 ring-offset-green-100 
                            bg-gradient-to-r from-transparent red-300 to-yellow-600 
                            hover:from-transparent via-green-200 hover:to-gray-500                                
                           "
            >
                <Link className="hidden xl:flex items-center text-gray-600 space-x-5 items-center"
                    href={`/shop/cart`}
                >        
                    <a className="flex items-center hover:text-gray-900" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="absolute flex ml-4 -mt-5">
                            {/* <span className={`  ${cartItems.length ||  getLocalState().length? ( "animate-ping h-6 w-6" ) : ("") }  absolute inline-flex rounded-full bg-green-500 opacity-75
                                            `}
                            ></span> */}
                            <span className="h-4 w-4 relative inline-flex rounded-full bg-green-600 text-black ">
                                 <span className="cartNotification text-white text-xs p-1 -mt-1">
                                   {/* { onFirstMount && getLocalState().length? getLocalState().length : "" } */}
                                   {/* {cartItems.length} */}2
                                 </span>
                            </span>
                        </span>
                    </a>
                </Link>
            </div>
        </>
    )
};

export default CartNotication;