import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    LOGOUT,

    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE,

    GET_DASHBOARD,
    GET_DASHBOARD_SUCCESS,
    GET_DASHBOARD_FAILURE
} from '../types/auth.types';

const initialState = {
    isLoading: false,
    auth: undefined,
    user: undefined,
    dashboard: undefined,
    error: undefined
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
        case GET_USER_PROFILE:
        case GET_DASHBOARD:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                auth: action.payload,
                isLoading: false
            }
        case GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }
        case GET_DASHBOARD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dashboard: action.payload
            }
        case LOGIN_FAILURE:
        case GET_DASHBOARD_FAILURE:
        case GET_USER_PROFILE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}