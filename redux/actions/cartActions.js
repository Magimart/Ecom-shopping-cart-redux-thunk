import axios from 'axios';
import absoluteUrl from 'next-absolute-url';


import {  ADD_TO_CART, 
          REMOVE_FROM_CART,
          INCREASE_QUANTITY,
          DECREASE_QUANTITY,
          PROCCEED_TO_CHECKOUT,
          ADD_CART_FAIL,
           CLEAR_ERRORS
        } from '../constants/cartTypes'

export const addToCart = (id) => async (dispatch, getState) => {
    let qty = 1

    try {
        
           console.log(id)

            const {data} = await axios.get(`/api/products/product_details/${id}`)

                 console.log(data)

                   console.log(qty)

                  dispatch({
                    type: ADD_TO_CART,
                    payload:{
                                _id: data.productDetails._id,
                                title: data.productDetails.title,               
                                artistName: data.productDetails.artistName,
                                price: data.productDetails.price,               
                                countInStock: data.productDetails.countInStock,
                                imagesOfProduct: data.productDetails.imagesOfProduct,
                                qty
                           }
                })


        //   localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
        //  localStorage.setItem('cart', JSON.stringify(data.productDetails))        
    } catch (error) {

                     console.log(error)

                            dispatch({
                                type: ADD_CART_FAIL,
                                payload: error.response.data.message
                           })
        
    }
}

export const removeFromCart = (id) => (dispatch) => {

    try {

        console.log("here is the payload id at reducer actions_______________delete**_________________")

        console.log(id)
        dispatch({
            type: REMOVE_FROM_CART,
            payload: id,
          })

    } catch (error) {
         console.log(error)

         //__________add dispatch for error payload_____________________________________check
         dispatch({
            type: REMOVE_FROM_CART,
            payload: error.response.data.message
       })
         
    }
  
}

        
export const increaseCartQuantity = (_id, qty) => (dispatch) => {

    try {

          console.log("here is the payload id at reducer actions_______________incese**_________________")
          console.log(_id)

        dispatch({
            type: INCREASE_QUANTITY,
            payload: {
                _id,
                qty
            }
          })

    } catch (error) {

        console.log(error)
                 dispatch({
                    type: INCREASE_QUANTITY,
                    payload: error.response.data.message
               })
    }

}


export const decreaseCartQuantity = (_id, qty ) => (dispatch) => {

    try {

        console.log("here is the payload id at reducer actions_______________incese**_________________")
        console.log(_id)

      dispatch({
          type: DECREASE_QUANTITY,
          payload: {
              _id,
              qty
          }
        })

    } catch (error) {

                 console.log(error)
                 dispatch({
                    type: DECREASE_QUANTITY,
                    payload: error.response.data.message
               })
    }
}



export const clearErrors = () => async (dispatch) => {
    console.log("error at action")
    dispatch({
        type: CLEAR_ERRORS

    })
}











//_________________________-bk


// import axios from 'axios';
// import absoluteUrl from 'next-absolute-url';


// import {  ADD_TO_CART, 
//           REMOVE_FROM_CART,
//           INCREASE_QUANTITY,
//           DECREASE_QUANTITY,
//           ADD_CART_FAIL,
//            CLEAR_ERRORS
//         } from '../constants/cartTypes'

// export const addToCart = (id, qty) => async (dispatch, getState) => {

//     try {
        
//             const {data} = await axios.get(`/api/products/product_details/${id}`)
//                  console.log(data)

//                   dispatch({
//                     type: ADD_TO_CART,
//                      payload: data.productDetails,
//                     qty,
//                 })

//         //   localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
//         //  localStorage.setItem('cart', JSON.stringify(data.productDetails))        
//     } catch (error) {

//                     //  console.log(error)

//                             dispatch({
//                                 type: ADD_CART_FAIL,
//                                 payload: error.response.data.message
//                            })
        
//     }
// }

// export const removeFromCart = (id) => (dispatch) => {

//     try {

//         console.log("here is the payload id at reducer actions _________________")
//         console.log(id)
//         dispatch({
//             type: REMOVE_FROM_CART,
//             payload: id,
//           })

//     } catch (error) {
//          console.log(error)

//          //__________add dispatch for error payload_____________________________________check
//          dispatch({
//             type: ADD_CART_FAIL,
//             payload: error.response.data.message
//        })
         
//     }
  
// }


// export const increaseQuantity = (id ) => (payload) => {

//     try {

//         console.log("here is the payload id at reducer actions _________________")
//         console.log(id)
//         dispatch({
//             type: INCREASE_QUANTITY,
//             payload: id,
//           })
        
//         return{
//             type: INCREASE_QUANTITY,
//             payload
//         }
//     } catch (error) {

//         console.log(error)
//             //      dispatch({
//             //         type: ADD_CART_FAIL,
//             //         payload: error.response.data.message
//             //    })
//     }

// }
// export const decreaseQuantity = (id ) => (payload) => {

//     try {

        
//         console.log("here is the payload id at reducer actions _________________")
//         console.log(id)
//         dispatch({
//             type: DECREASE_QUANTITY,
//             payload: id,
//           })

//         return{
//             type: DECREASE_QUANTITY,
//             payload
//         }

//     } catch (error) {
//                  console.log(error)

//             //      dispatch({
//             //         type: ADD_CART_FAIL,
//             //         payload: error.response.data.message
//             //    })
//     }
// }


// //___clear errors

// export const clearErrors = () => async (dispatch) => {
//     console.log("error at action")
//     dispatch({
//         type: CLEAR_ERRORS

//     })
// }