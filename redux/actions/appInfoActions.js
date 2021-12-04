import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


import {
      ALL_INFOS_REQUEST,
      ALL_INFOS_SUCCESS,
      ALL_INFOS_FAIL,
     
      UPDATE_INFO_RESET,
      UPDATE_INFO_REQUEST,
      UPDATE_INFO_SUCCESS,
      UPDATE_INFO_FAIL,

      PUBLISH_INFO_REQUEST,
      PUBLISH_INFO_SUCCESS,
      PUBLISH_INFO_FAIL,

    CLEAR_ERRORS

} from '../constants/appInfoTypes';


//___all app infos
    export const getAllInfos = () => async (dispatch) => {
        try {
    
             dispatch({ type: ALL_INFOS_REQUEST });
    
            const { data } = await axios.get(`/api/app_info`)
    
            dispatch({
                type: ALL_INFOS_SUCCESS,
                payload: data
            })
    
        } catch (error) {
    
            dispatch({
                type: ALL_INFOS_FAIL,
                payload: error.response.data.message
            })
        }
    }
    
    

export const publishheaderInfo = (userData) => async(dispatch ) => {

    try{

        dispatch({ type: PUBLISH_INFO_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
            const { data } = await axios.post('/api/app_info/publish-app-info', userData, config)
           console.log(data);

                dispatch({
                    type: PUBLISH_INFO_SUCCESS,
                })

        }catch(error){

             console.log(error)
                dispatch({
                            type: PUBLISH_INFO_FAIL,
                            payload: error.response.data.message
                })
        } 
}


//___________update app info section one

    export const updateAppInfoSectionOne = {}




//___clear errors

export const clearErrors = () => async (dispatch) => {
    console.log("error at action")
    dispatch({
        type: CLEAR_ERRORS

    })
}



