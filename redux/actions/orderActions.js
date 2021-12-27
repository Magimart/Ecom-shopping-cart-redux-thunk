import {   NEW_ORDER_SUCCESS,
           NEW_ORDER_REQUEST ,
           NEW_ORDER_FAIL,

           MY_ORDERS_FAIL,
           MY_ORDERS_SUCCESS,

           ORDER_DETAILS_SUCCESS,
           ORDER_DETAILS_FAIL,

           CLEAR_ERRORS

        } from "../constants/orderTypes";
import axios from 'axios';
import absoluteUrl from 'next-absolute-url';


    export const currentUserOrders = (authCookie, req) => async(dispatch ) => {
        try{

            const { origin } = absoluteUrl(req);

            const config = {
                headers: {
                    cookie: authCookie
                }
            }

            const { data } = await axios.get(`${origin}/api/orders/me`, config)
    
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



    //________________get order  details
    export const getOrderDetails = (authCookie, req, id) => async (dispatch) => {
        try {

            // console.log("here is the detail actions _______________id and req")
            // console.log(id)
            // console.log(req)

    
            const { origin } = absoluteUrl(req);
    
            const config = {
                headers: {
                    cookie: authCookie
                }
            }
    
            const { data } = await axios.get(`${origin}/api/orders/${id}`, config)

            console.log("here is the data  from the order details actions _____xxxxxxx______")
            console.log(data)
    
            dispatch({
                type: ORDER_DETAILS_SUCCESS,
                payload: data.order
            })
    
        } catch (error) {

            console.log(error)
    
            // dispatch({
            //     type: ORDER_DETAILS_FAIL,
            //     payload: error.response.data.message
            // })
        }
    }


//___clear errors

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}