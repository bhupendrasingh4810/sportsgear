import {
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE,

    GET_DASHBOARD_SUCCESS,
    GET_DASHBOARD_FAILURE,

    GET_SYSTEM_DATA_SUCCESS,
    GET_SYSTEM_DATA_FAILURE,

    LOADING,
    UPLOAD_IMAGE_SUCCESS
} from '../types/app.types';

import { SPORTSGEAR_USER } from '../../constants/app-constant';

const user = localStorage.getItem(SPORTSGEAR_USER);
const initialState = {
    isLoading: false,
    user: JSON.parse(user) || undefined,
    system: undefined,
    image: undefined,
    dashboard: undefined,
    error: undefined
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
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
        case GET_SYSTEM_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dashboard: action.payload
            }
        case UPLOAD_IMAGE_SUCCESS:
            return {
                ...state,
                image: action.payload.data.image
            }
        case GET_DASHBOARD_FAILURE:
        case GET_SYSTEM_DATA_FAILURE:
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