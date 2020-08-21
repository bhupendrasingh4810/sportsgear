import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    LOGOUT
} from '../types/auth.types';

import { SPORTSGEAR_USER } from '../../constants/app-constant';

const user = localStorage.getItem(SPORTSGEAR_USER);
const initialState = {
    isAuthenticated: !!user,
    token: (user && JSON.parse(user).token) || undefined,
    error: undefined
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            localStorage.setItem(SPORTSGEAR_USER, JSON.stringify(action.payload.data));
            const { data: { token } } = action.payload;
            return {
                ...state,
                isAuthenticated: true,
                token,
                error: undefined
            }
        }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                token: undefined,
                error: undefined
            }
        default:
            return state;
    }
}