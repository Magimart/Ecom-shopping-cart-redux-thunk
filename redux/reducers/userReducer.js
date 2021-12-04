import {

    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,

    ADMIN_USERS_REQUEST,
    ADMIN_USERS_SUCCESS,
    ADMIN_USERS_FAIL,

    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,

    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,

    CLEAR_ERRORS

} from '../constants/userTypes';


// All auth reducers
export const registerUserReducer = (state = {user: null }, action) => {

  switch (action.type) {
      case REGISTER_USER_REQUEST:
          return {
                   loading: true
          }
      case REGISTER_USER_SUCCESS:
            return {
                    loading: false,
                    success: true
            }
           

      case REGISTER_USER_FAIL:
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

  export const allUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {

        case ADMIN_USERS_REQUEST:
            return {
                loading: true,
            }

        case ADMIN_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }

        case ADMIN_USERS_FAIL:
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
  
//__load user to the state      
 export const isCurrentUserReducer = (state = {loading:true,  user: null }, action) => {

    switch (action.type) {
    
          case LOAD_USER_REQUEST:
                  return {
                           loading: true,
                           isAuthenticated: false
                  }
          case LOAD_USER_SUCCESS:
              return {
                      loading: false,
                      user: action.payload,
                      isAuthenticated: true
              }
          case LOAD_USER_FAIL:
                  return {
                    loading: false,
                    error: action.payload,
                    isAuthenticated: false
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
  


//handling all user update reducers
export const userReducer = (state = { }, action) => {

    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
            return {
                     loading: true
            }
        case UPDATE_PROFILE_SUCCESS:
              return {
                      loading: false,
                      isUpdated: action.payload
              }
        case UPDATE_PROFILE_RESET:
            return {
              loading: false,
              isUpdated: false
            }

        case UPDATE_PROFILE_FAIL:
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
  
  
  



