import { authLoginAPI } from "./auth.api";
import * as types from "./auth.types";

export const handleAuthLoginRequest = () => {
    return {type : types.AUTH_DATA_REQUEST };
}

export const handleAuthLoginSuccess = (payload) => {
    return {type : types.AUTH_DATA_SUCCESS,payload}
}

export const handleAuthLoginError = () => {
    return {type : types.AUTH_DATA_ERROR}
}

export const getUserToken = (payload) => async (dispatch) => {

    dispatch(handleAuthLoginRequest());
    // console.log(payload);
    try {
      
        let res = await authLoginAPI(payload);
        if(res){
            dispatch(handleAuthLoginSuccess(res))
            return res;
        }
    } catch (error) {
        dispatch(handleAuthLoginError())
    }
} 
