import axios from 'axios'
import absoluteUrl from 'next-absolute-url'

import {
    ADMIN_USERS_REQUEST,
    ADMIN_USERS_SUCCESS,
    ADMIN_USERS_FAIL,

    REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL,

    LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL,
    UPDATE_PROFILE_RESET, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS,UPDATE_PROFILE_FAIL,

   

    CLEAR_ERRORS

} from '../constants/userTypes';

export const getAdminUsers = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_USERS_REQUEST });

        const { data } = await axios.get(`/api/users`)
console.log("here is the data in the user actions<<<<<<<<<<<<<<<<<<<<<<<<")
        console.log(data)

        dispatch({
            type: ADMIN_USERS_SUCCESS,
            payload: data.users
        })

    } catch (error) {

        dispatch({
            type: ADMIN_USERS_FAIL,
            payload: error.response.data.message
        })
    }
}


// register user --userData=user data to send to thr backend
export const registerUser = (userData) => async(dispatch ) => {

    console.log("did this section run <<<<<<<<<<<---------------------")

    try{

        dispatch({ type: REGISTER_USER_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
            const { data } = await axios.post('/api/auth/register', userData, config)
            console.log("is the the profile data --------<<<<<<<<<<<<<<<<<<<<<<")
            console.log(data);

                dispatch({
                    type: REGISTER_USER_SUCCESS,
                })

    //-------problem is here------------------------
        }catch(error){
            //  console.log({error:"problem is here "})

             console.log(error)
                dispatch({
                            type: REGISTER_USER_FAIL,
                            payload: error.response.data.message
                })
        } 
}



//___________update user profile
export const updateUserProfile = (userData) => async(dispatch ) => {

    try{
        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
            const { data } = await axios.put('/api/me/update', userData, config)
                dispatch({
                    type: UPDATE_PROFILE_SUCCESS,
                    payload: data.success
                });

    //-------problem is here------------------------
        }catch(error){

                dispatch({
                            type: UPDATE_PROFILE_FAIL,
                            payload: error.response.data.message
                })
        } 
}

// export const currentUser = ( ) => async(dispatch ) => { 
 export const isCurrentUser = ( ) => async(dispatch ) => { 


    try{
        dispatch({ type: LOAD_USER_REQUEST });

            const { data } = await axios.get('/api/me/current-user')

            console.log("is the the current data --------<<<<<<<<<<<<<<<<<<<<<<")
            console.log(data);

                dispatch({
                    type: LOAD_USER_SUCCESS,
                    payload: data.user
                })

        }catch(error){

             console.log(error)

                dispatch({
                            type: LOAD_USER_FAIL,
                            payload: error.response.data.message
                })
        } 
}




//___clear errors

export const clearErrors = () => async (dispatch) => {
    console.log("error at action")
    dispatch({
        type: CLEAR_ERRORS

    })
}
