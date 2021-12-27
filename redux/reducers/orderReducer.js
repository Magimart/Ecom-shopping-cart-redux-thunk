import {   
         
        //   NEW_ORDER_SUCCESS,
        //    NEW_ORDER_REQUEST ,
        //    NEW_ORDER_FAIL,


           ORDER_DETAILS_SUCCESS,
           ORDER_DETAILS_FAIL,

           MY_ORDERS_FAIL,
           MY_ORDERS_SUCCESS,

          CLEAR_ERRORS
       } from "../constants/orderTypes";



export const myOrderReducer = (state = { orders: [] }, action) => {


    switch (action.type) {

            case MY_ORDERS_SUCCESS:

                try{

                    return {
                        loading: false,
                        orders: action.payload,
                    }

                }catch(error){              
                    console.error(error)

                }


            case MY_ORDERS_FAIL:
                return {
                   loading: false,
                    error: action.payload
                }

            case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null
                }

            default:
                return state
}
}

export const orderDetailsReducer = (state = { order: {} }, action) => {

    
    switch (action.type) {
        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }

        case ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}



// export const orderReducer = (state = { orderPurchase: [] }, action) => {
// switch (action.type) {

// case NEW_ORDER_SUCCESS:

//      try{

//         console.log(action.payload)
//         const purchase = action.payload;

//         return {
//             //loading: false,
//              ...state,
//              orderPurchase: purchase,

//         }

//      }catch(error){              
//         console.error(error)

//      }


// case NEW_ORDER_FAIL:
//     return {
//        // loading: false,
//         error: action.payload
//     }

// case CLEAR_ERRORS:
//     return {
//         ...state,
//         error: null
//     }

// default:
//     return state
// }
// }