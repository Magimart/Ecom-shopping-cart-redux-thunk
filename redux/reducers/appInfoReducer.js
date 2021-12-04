import axios from 'axios';

import { 
          ALL_INFOS_REQUEST, 
          ALL_INFOS_SUCCESS,
          ALL_INFOS_FAIL,

           PUBLISH_INFO_REQUEST,
           PUBLISH_INFO_SUCCESS,
           PUBLISH_INFO_FAIL,

           CLEAR_ERRORS
 } from '../constants/appInfoTypes';

// get all app infos
export const allInfosReducer = (state = { infos: [] }, action) => {
    switch (action.type) {

        case ALL_INFOS_REQUEST:
            return {
                loading: true,
            }

        case ALL_INFOS_SUCCESS:
            return {
                loading: true, //chang
                infos: action.payload
            }

        case ALL_INFOS_FAIL:
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



// all publish info reducers

export const publishReducer = (state = {info: null }, action) => {

    switch (action.type) {
        case PUBLISH_INFO_REQUEST:
            return {
                     loading: true
            }
        case PUBLISH_INFO_SUCCESS:
              return {
                      loading: false,
                      success: true
              }
             
  
        case PUBLISH_INFO_FAIL:
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
  

// handling updates-----

//handling all info reducers
// export const updateInfoReducer = (state = { }, action) => {

//     switch (action.type) {
//         case UPDATE_INFO_REQUEST:
//             return {
//                      loading: true
//             }
//         case UPDATE_INFO_SUCCESS:
//               return {
//                       loading: false,
//                       isUpdated: action.payload
//               }
//         case UPDATE_INFO_RESET:
//             return {
//               loading: false,
//               isUpdated: false
//             }

//         case UPDATE_INFO_FAIL:
//             return {
//               loading: false,
//               error: action.payload
//         }
  
//         case CLEAR_ERRORS:
//             return {
//                  ...state,
//                 error: null
//             }
//             default:
//                 return state
//         }
//     }
  
  