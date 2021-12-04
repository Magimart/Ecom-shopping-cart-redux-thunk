
import {
      ALL_PRODUCT_SUCCESS,
      ALL_PRODUCT_FAIL,
      ALL_PRODUCT_REQUEST,

      PRODUCT_DETAILS_REQUEST,
      PRODUCT_DETAILS_SUCCESS,
      PRODUCT_DETAILS_FAIL,
      PRODUCT_DETAILS_RESET,

     // NEW_PRODUCT_REQUEST,
//     NEW_PRODUCT_SUCCESS,
//     NEW_PRODUCT_RESET,
//     NEW_PRODUCT_FAIL,

    
     CLEAR_ERRORS

} from "../constants/productsTypes"




// All reducerS FOR THE PRODUCT
export const allProductReducer = (state = {products: []}, action) => {

    console.log("here is the product reducer payload----------------------") 
    console.log(action.payload)
     console.log(state)


    switch (action.type) {

        case ALL_PRODUCT_REQUEST:
            return {
              loading: true,
              products: [],
            }

        case ALL_PRODUCT_SUCCESS:

            return {

                allProductCount: action.payload.allProductCount,
                resPerPage: action.payload.resPerPage,
                filteredProductCount: action.payload.filteredProductCount,
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
    console.log("action type at product details ---- <<<<<")
    console.log(action.payload)

    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
              loading: true,
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                product : action.payload
            }
        case PRODUCT_DETAILS_RESET: {
                return {
                  product: {},
                }
        }    
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


