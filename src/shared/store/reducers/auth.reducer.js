import {
    LOGIN_ACTION,
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

import { SPORTSGEAR_USER } from '../../constants/app-constant';

const user = localStorage.getItem(SPORTSGEAR_USER);
const initialState = {
    isLoading: false,
    isAuthenticated: !!user,
    token: (user && JSON.parse(user).token) || undefined,
    user: JSON.parse(user) || undefined,
    dashboard: undefined,
    error: undefined
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_ACTION:
        case GET_USER_PROFILE:
        case GET_DASHBOARD:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS: {
            localStorage.setItem(SPORTSGEAR_USER, JSON.stringify(action.payload.data));
            const { data: { token, ...rest } } = action.payload;
            return {
                ...state,
                isAuthenticated: true,
                token,
                user: rest,
                isLoading: false,
                error: undefined
            }
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
        case LOGOUT:
            localStorage.removeItem(SPORTSGEAR_USER);
            return {
                ...state,
                isAuthenticated: false,
                user: undefined,
                token: undefined,
                error: undefined
            }
        default:
            return state;
    }
}