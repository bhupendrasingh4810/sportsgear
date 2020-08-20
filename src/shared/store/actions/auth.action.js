import {
    LOGIN_ACTION,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    LOGOUT,

    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE,

    API
} from '../types/auth.types';

import { BASE_URL, LOGIN } from '../../constants/apiConstant';

export const login = payload => {
    return apiAction({
        url: `${BASE_URL}${LOGIN}`,
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

export function apiAction({
    url = "",
    method = "GET",
    data = null,
    accessToken = null,
    onSuccess = () => { },
    onFailure = () => { },
    label = "",
    headersOverride = null
}) {
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            accessToken,
            onSuccess,
            onFailure,
            label,
            headersOverride
        }
    };
}