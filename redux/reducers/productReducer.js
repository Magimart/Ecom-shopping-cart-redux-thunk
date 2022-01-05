
import {
   
        ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL,
        PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL,
        NEW_PRODUCT_REQUEST, NEW_PRODUCT_SUCCESS, NEW_PRODUCT_FAIL, NEW_PRODUCT_RESET,
        CURRENT_USER_PRODUCTS_REQUEST, CURRENT_USER_PRODUCTS_SUCCESS, CURRENT_USER_PRODUCTS_FAIL,

    //   PRODUCT_DETAILS_RESET,
    //   PRODUCT_DETAILS_REQUEST,
    
     CLEAR_ERRORS

} from "../constants/productsTypes"

//_____________get all current user products
export const currentUserProductsReducer = (state = { product: {} }, action) => {
    
    switch (action.type) {
        case CURRENT_USER_PRODUCTS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        case CURRENT_USER_PRODUCTS_FAIL:
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


// All reducerS FOR THE PRODUCT
export const allProductReducer = (state = {products: []}, action) => {

    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
              loading: true,
              products: [],
            }

        case ALL_PRODUCT_SUCCESS:

            return {

                // allProductCount: action.payload.allProductCount,
                // resPerPage: action.payload.resPerPage,
                // filteredProductCount: action.payload.filteredProductCount,
                allStoredProducts: action.payload.allStoredProducts
            }

        case ALL_PRODUCT_FAIL:
            return {
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                 ...state,
                error: null
            }
            default:
                return state;
        }
    }



export const productDetailsReducer = (state = {product: {}}, action) => {
   
    switch (action.type) {

        case PRODUCT_DETAILS_SUCCESS:
            return {
                product : action.payload
            }
        // case PRODUCT_DETAILS_RESET: {
        //         return {
        //           product: {},
        //         }
        // } 
                // case PRODUCT_DETAILS_REQUEST:
        //     return {
        //       loading: true,
        // }   
        case PRODUCT_DETAILS_FAIL:
            return {
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


    export const newProductReducer = (state = { product: {} }, action) => {
       
             console.log("her is thr new product at the product controllers ")
             console.log(action.payload)


        switch (action.type) {
            case NEW_PRODUCT_REQUEST:
                return {
                    loading: true,
                }
    
            case NEW_PRODUCT_SUCCESS:
                return {
                    loading: false,
                    success: action.payload.message,
                    product: action.payload.product //to store the safari
                }
    
            case NEW_PRODUCT_RESET:
                return {
                    success: false
                }
    
            case NEW_PRODUCT_FAIL:
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