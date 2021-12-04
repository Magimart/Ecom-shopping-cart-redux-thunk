import axios from 'axios'
import absoluteUrl from 'next-absolute-url';



import {

    ALL_PRODUCT_REQUEST,
     ALL_PRODUCT_SUCCESS,
     ALL_PRODUCT_FAIL,
    
     PRODUCT_DETAILS_REQUEST,
     PRODUCT_DETAILS_SUCCESS,
     PRODUCT_DETAILS_FAIL,
 
     NEW_PRODUCT_REQUEST,
     NEW_PRODUCT_SUCCESS,
     NEW_PRODUCT_FAIL,


     CLEAR_ERRORS


} from "../constants/productsTypes";




export const getAllProducts = (req, currentPage = 1, country='', category) => async(dispatch ) => {

    try{

        // console.log(req)
        dispatch({
            type: ALL_PRODUCT_REQUEST,
          })

          const {data} = await axios.get('http://localhost:3000/api/products')
         
         
          console.log("herre is the fetched data with all query string")
          console.log(data);
                dispatch({
                    type: ALL_PRODUCT_SUCCESS,
                    payload: data
                })

    //-------problem is here------------------------
        }catch(error){
             console.log(error)
                dispatch({
                            type: ALL_PRODUCT_FAIL,
                            payload: error.response.data.message
                });
        } 
}


//_____get product details

export const getProductDetails = (req, id) => async(dispatch ) => {

    try{

        console.log("here is the id in the product action______________vvvvv")
         console.log(id) 
        //  console.log(req.query) 


        dispatch({
            type: PRODUCT_DETAILS_REQUEST,
          });


       const {origin} = absoluteUrl(req)

        const {data} = await axios.get(`${origin}/api/products/product_details/${id}`)
        //const {data} = await axios.get(`/api/products/product_details/${id}`)

        console.log("here details from get products Details<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
        console.log(data)


                dispatch({
                    type: PRODUCT_DETAILS_SUCCESS,
                    payload: data

                }); 

    //-------problem is here------------------------
        }catch(error){
             console.log("some error is here ---------------------------xxxxxxxxxxxxxxxx_____deb")
            console.log(error)
                // dispatch({
                //             type: PRODUCT_DETAILS_FAIL,
                //             // payload: error.response.data.message
                //             payload: error.response.data.message

                // })
                dispatch({
                    type: PRODUCT_DETAILS_FAIL,
                    payload:
                      error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
                  })
        } 
}





//___clear errors

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}