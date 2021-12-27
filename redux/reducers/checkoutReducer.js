import { 
            PROCCEED_TO_CHECKOUT_SUCCESS,
            PROCCEED_TO_CHECKOUT_FAIL,

            ORDER_SUMMARY_SUCCESS,
            ORDER_SUMMARY_FAIL,

            CLEAR_ERRORS
        } from "../constants/checkoutTypes";
 
        import { getLocalOrder } from "../../utils/helpers/cartHelpers";

 
 export const checkoutReducer = (state = { newOrder: [] }, action) => {
    switch (action.type) {

        case PROCCEED_TO_CHECKOUT_SUCCESS:

             try{

                console.log(action.payload)
                const purchase = action.payload;

                  function storeOnLocal ( data){
                        return localStorage.setItem('order', JSON.stringify(data));
                  }
                //   console.log(purchase && storeOnLocal(purchase))
 
                return {
                    //loading: false,
                     ...state,
                     newOrder: purchase && storeOnLocal(purchase),
                     newOrder: getLocalOrder()
                }

             }catch(error){              
                console.error(error)

             }


        case PROCCEED_TO_CHECKOUT_FAIL:
            return {
               // loading: false,
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


//______________________ordersummary____________

export const orderSummaryReducer = (state = { newOrderSummary: [] }, action) => {
    switch (action.type) {

        case ORDER_SUMMARY_SUCCESS:

             try{
                const summary = action.payload;
                 
                return {
                    //loading: false,
                     ...state,
                     newOrderSummary: summary,
                }

             }catch(error){              
                console.error(error)

             }


        case ORDER_SUMMARY_FAIL:
            return {
               // loading: false,
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