import Axios from "axios";
import * as alertActions from '../alert/alert.actions';

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const registerUser = ( user , history) => {
    return async (dispatch) => {
        try {
            dispatch({type : REGISTER_USER_REQUEST});
            let dataURL = 'http://127.0.0.1:5000/users/register';
            let response = await Axios.post(dataURL , user);
            dispatch({type : REGISTER_USER_SUCCESS , payload : response.data});
            dispatch(alertActions.setAlert(response.msg , 'success'));
            history.push('/users/login');
        } catch (error) {
            console.error(error);
            dispatch({type : REGISTER_USER_FAILURE , payload : error.response.data}); 
        }
    };
};

export const loginUser = ( user , history) => {
    return async (dispatch) => {
        try {
            dispatch({type : LOGIN_USER_REQUEST});
            let dataURL = 'http://127.0.0.1:5000/users/login';
            let response = await Axios.post(dataURL , user);
            dispatch({type : LOGIN_USER_SUCCESS , payload : response.data});
            dispatch(alertActions.setAlert(response.data.msg, 'success'));
            history.push('/');
        } catch (error) {
            console.error(error);
            dispatch({type : LOGIN_USER_FAILURE, payload : error.response.data});
        }
    };
};