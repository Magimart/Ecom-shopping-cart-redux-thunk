import {   NEW_ORDER_SUCCESS,
           NEW_ORDER_REQUEST ,
           NEW_ORDER_FAIL,

           MY_ORDERS_FAIL,
           MY_ORDERS_SUCCESS,

           CLEAR_ERRORS

        } from "../constants/orderTypes";
import axios from 'axios';
import absoluteUrl from 'next-absolute-url';


//    export const currentUserOrders = () => async(dispatch ) => {

 export const currentUserOrders = (authCookie, req) => async(dispatch ) => {
        try{

            const { origin } = absoluteUrl(req);

            console.log("here is the req at cation orders g______________vvvvv")
            console.log(origin)

            const config = {
                headers: {
                    cookie: authCookie
                }
            }


            const { data } = await axios.get(`${origin}/api/bookings/me`, config)
            // const { data } = await axios.get(`/api/bookings/me`)

                   console.log(data)
    
                    dispatch({
                        type: MY_ORDERS_SUCCESS,
                        payload: data.myOrders
    
                    });
                        
            }catch(error){

                
                    dispatch({
                        type: MY_ORDERS_FAIL,
                        payload: error.response.data.message
                      })
               } 
    }



//___clear errors

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}