import {
    LOGIN_ACTION,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE,
} from '../types/auth.types';
import { LOGIN_API } from '../../constants/api-constant';
import { apiAction } from './api.action';

export const login = payload => {
    return apiAction({
        url: LOGIN_API,
        method: 'POST',
        data: payload,
        onSuccess: loginSuccess,
        onFailure: loginFailure,
        label: LOGIN_ACTION
    });
}

export function loginSuccess(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload
    };
}

export function loginFailure(payload) {
    return {
        type: LOGIN_FAILURE,
        payload
    };
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
}

export function getUserProfile() {
    return {
        type: GET_USER_PROFILE
    };
}

export function getUserProfileSuccess(payload) {
    return {
        type: GET_USER_PROFILE_SUCCESS,
        payload
    };
}

export function getUserProfileFailure(payload) {
    return {
        type: GET_USER_PROFILE_FAILURE,
        payload
    };
}