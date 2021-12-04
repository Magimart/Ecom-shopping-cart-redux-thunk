
import {
            PROCCEED_TO_CHECKOUT_SUCCESS,
            PROCCEED_TO_CHECKOUT_FAIL,

            ORDER_SUMMARY_SUCCESS,
            ORDER_SUMMARY_FAIL,

            CLEAR_ERRORS
       } from '../constants/checkoutTypes'


//_____________________save cart and procceed to checkout____________


export const procceedToCheckout = (items, total) => (dispatch) => {

    console.log(items)
    console.log(total)


    try {

      dispatch({
          type: PROCCEED_TO_CHECKOUT_SUCCESS,
          payload: {
              orders: items,
              sum: total
           }
        })

    } catch (error) {

                 console.log(error)
                 dispatch({
                    type: PROCCEED_TO_CHECKOUT_FAIL,
                    payload: error.response.data.message
               })
    }
}


//__________________________order summary
export const orderSummary = (summary) => (dispatch) => {


    console.log("here is the summary at the checkut reducer")
    console.log(summary)


    try {

      dispatch({
          type:   ORDER_SUMMARY_SUCCESS ,
          payload: {
            summary,
           }
        })

    } catch (error) {

                 console.log(error)
                 dispatch({
                    type: ORDER_SUMMARY_FAIL,
                    payload: error.response.data.message
               })
    }
}

//___clear errors

export const clearErrors = () => async (dispatch) => {
    console.log("error at checkout actions")
    dispatch({
        type: CLEAR_ERRORS

    })
}

