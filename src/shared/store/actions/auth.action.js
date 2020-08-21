import {
    LOGIN_ACTION,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    LOGOUT
} from '../types/auth.types';

import { LOGIN_API } from '../../constants/api-constant';
import { apiAction } from './api.action';

export const loginAction = payload => {
    return apiAction({
        url: LOGIN_API,
        method: 'POST',
        data: payload,
        onSuccess: loginSuccessAction,
        onFailure: loginFailureAction,
        label: LOGIN_ACTION
    });
}

function loginSuccessAction(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload
    };
}

function loginFailureAction(payload) {
    return {
        type: LOGIN_FAILURE,
        payload
    };
}

export const logoutAction = () => dispatch => {
    dispatch({ type: LOGOUT });
}