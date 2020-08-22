import {
    GET_BRAND_LIST,
    GET_BRAND_LIST_SUCCESS,
    GET_BRAND_LIST_FAILURE,

    GET_BRAND,
    GET_BRAND_SUCCESS,
    GET_BRAND_FAILURE,
    
    ADD_BRAND,
    ADD_BRAND_SUCCESS,
    ADD_BRAND_FAILURE,
    
    UPDATE_BRAND,
    UPDATE_BRAND_SUCCESS,
    UPDATE_BRAND_FAILURE,
    
    DELETE_BRAND,
    DELETE_BRAND_SUCCESS,
    DELETE_BRAND_FAILURE,
    
    CHANGE_BRAND_STATUS,
    CHANGE_BRAND_STATUS_SUCCESS,
    CHANGE_BRAND_STATUS_FAILURE
} from '../types/brand.types';

const initialState = {
    isLoading: false,
    brands: [],
    brand: undefined,
    error: undefined
}

export default function brandReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BRAND_LIST:
        case GET_BRAND:
        case ADD_BRAND:
        case UPDATE_BRAND:
        case DELETE_BRAND:
        case CHANGE_BRAND_STATUS:
            return {
                ...state,
                isLoading: true
            }
        case GET_BRAND_LIST_SUCCESS:
            return {
                ...state,
                brands: action.payload.data,
                isLoading: false
            }
        case GET_BRAND_SUCCESS:
        case UPDATE_BRAND_SUCCESS:
        case ADD_BRAND_SUCCESS:
        case CHANGE_BRAND_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                brand: action.payload.data
            }
        case DELETE_BRAND_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case GET_BRAND_LIST_FAILURE:
        case GET_BRAND_FAILURE:
        case ADD_BRAND_FAILURE:
        case UPDATE_BRAND_FAILURE:
        case DELETE_BRAND_FAILURE:
        case CHANGE_BRAND_STATUS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}