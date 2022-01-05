import axios from 'axios'
import absoluteUrl from 'next-absolute-url';
import {

        ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL,
        PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL,
        NEW_PRODUCT_REQUEST, NEW_PRODUCT_SUCCESS, NEW_PRODUCT_FAIL, NEW_PRODUCT_RESET,
        CURRENT_USER_PRODUCTS_REQUEST, CURRENT_USER_PRODUCTS_SUCCESS, CURRENT_USER_PRODUCTS_FAIL,

     CLEAR_ERRORS

} from "../constants/productsTypes";


    //________________get current user products   =>   /api/products/current-user-products
export const CurrentUserProducts = (authCookie, req) => async(dispatch ) => {

       try{
                const { origin } = absoluteUrl(req);
    
                        const config = {
                    headers: {
                        cookie: authCookie
                    }
                }
    
                const { data } = await axios.get(`${origin}/api/products/current-user-products`, config)
            
                        dispatch({
                            type: CURRENT_USER_PRODUCTS_SUCCESS,
                            payload: data.myProducts
        
                        });                            
           }catch(error){
                    console.log(error)                    
                        dispatch({
                            type: CURRENT_USER_PRODUCTS_FAIL,
                            payload: error.response.data.message
                          })
            } 
        }

// export const getAllProducts = (req, currentPage = 1, location='', artistName, category) => async(dispatch ) => {
    export const getAllProducts = (req) => async(dispatch ) => {
        try{
    
                const { origin } = absoluteUrl(req);
    
                // let link = `${origin}/api/products?page=${currentPage}&location=${location}`
    
                // if (artistName) link = link.concat(`&artistName=${artistName}`);
                // if (category) link = link.concat(`&category=${category}`);
    
                //          const {data} = await axios.get('http://localhost:3000/api/products')
                // const {data} = await axios.get(link);
                const {data} = await axios.get(`${origin}/api/products`)
                console.log(data)
                
                        dispatch({
                            type: ALL_PRODUCT_SUCCESS,
                            payload: data
                        })
    
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

        const { origin } = absoluteUrl(req);

        let url;

        if (req) {
            url = `${origin}/api/products/product_details/${id}`
        } else {
            url = `/api/products/product_details/${id}`
        }

        const {data} = await axios.get(url)

                dispatch({
                    type: PRODUCT_DETAILS_SUCCESS,
                    payload: data.productDetails

                }); 

    //-------problem is here------------------------
        }catch(error){
            console.log(error)
                dispatch({
                    type: PRODUCT_DETAILS_FAIL,
                    payload:
                      error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
                  })
        } 
}


export const newProduct = (formData) => async (dispatch) => {
    try {


        dispatch({ type: NEW_PRODUCT_REQUEST })

        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/products`, formData, config)


        console.log("here is the data from the new adding product at actions")
        console.log(data)

        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log(error)

        dispatch({
            type: NEW_PRODUCT_FAIL,
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