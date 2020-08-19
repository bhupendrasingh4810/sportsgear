import {
    GET_CATEGORY_LIST,
    GET_CATEGORY_LIST_SUCCESS,
    GET_CATEGORY_LIST_FAILURE,

    GET_CATEGORY,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_FAILURE,
    
    ADD_CATEGORY,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_FAILURE,
    
    UPDATE_CATEGORY,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAILURE,
    
    DELETE_CATEGORY,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAILURE,
    
    CHANGE_CATEGORY_STATUS,
    CHANGE_CATEGORY_STATUS_SUCCESS,
    CHANGE_CATEGORY_STATUS_FAILURE
} from '../types/category.types';

const initialState = {
    isLoading: false,
    categories: [],
    category: undefined,
    error: undefined
}

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORY_LIST:
        case GET_CATEGORY:
        case ADD_CATEGORY:
        case UPDATE_CATEGORY:
        case DELETE_CATEGORY:
        case CHANGE_CATEGORY_STATUS:
            return {
                ...state,
                isLoading: true
            }
        case GET_CATEGORY_LIST_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                isLoading: false
            }
        case GET_CATEGORY_SUCCESS:
        case UPDATE_CATEGORY_SUCCESS:
        case ADD_CATEGORY_SUCCESS:
        case CHANGE_CATEGORY_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                category: action.payload
            }
        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case GET_CATEGORY_LIST_FAILURE:
        case GET_CATEGORY_FAILURE:
        case ADD_CATEGORY_FAILURE:
        case UPDATE_CATEGORY_FAILURE:
        case DELETE_CATEGORY_FAILURE:
        case CHANGE_CATEGORY_STATUS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}