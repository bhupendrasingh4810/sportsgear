import {
    GET_SUB_CATEGORIES_LIST,
    GET_SUB_CATEGORIES_LIST_SUCCESS,
    GET_SUB_CATEGORIES_LIST_FAILURE,

    GET_SUB_CATEGORY,
    GET_SUB_CATEGORY_SUCCESS,
    GET_SUB_CATEGORY_FAILURE,
    
    ADD_SUB_CATEGORY,
    ADD_SUB_CATEGORY_SUCCESS,
    ADD_SUB_CATEGORY_FAILURE,
    
    UPDATE_SUB_CATEGORY,
    UPDATE_SUB_CATEGORY_SUCCESS,
    UPDATE_SUB_CATEGORY_FAILURE,
    
    DELETE_SUB_CATEGORY,
    DELETE_SUB_CATEGORY_SUCCESS,
    DELETE_SUB_CATEGORY_FAILURE,
    
    CHANGE_SUB_CATEGORY_STATUS,
    CHANGE_SUB_CATEGORY_STATUS_SUCCESS,
    CHANGE_SUB_CATEGORY_STATUS_FAILURE
} from '../types/sub-category.types';

const initialState = {
    isLoading: false,
    subCategories: [],
    subCategory: undefined,
    error: undefined
}

export default function subCategoriesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SUB_CATEGORIES_LIST:
        case GET_SUB_CATEGORY:
        case ADD_SUB_CATEGORY:
        case UPDATE_SUB_CATEGORY:
        case DELETE_SUB_CATEGORY:
        case CHANGE_SUB_CATEGORY_STATUS:
            return {
                ...state,
                isLoading: true
            }
        case GET_SUB_CATEGORIES_LIST_SUCCESS:
            return {
                ...state,
                subCategories: action.subCategories,
                isLoading: false
            }
        case GET_SUB_CATEGORY_SUCCESS:
        case UPDATE_SUB_CATEGORY_SUCCESS:
        case ADD_SUB_CATEGORY_SUCCESS:
        case CHANGE_SUB_CATEGORY_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                subCategory: action.subCategory
            }
        case DELETE_SUB_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case GET_SUB_CATEGORIES_LIST_FAILURE:
        case GET_SUB_CATEGORY_FAILURE:
        case ADD_SUB_CATEGORY_FAILURE:
        case UPDATE_SUB_CATEGORY_FAILURE:
        case DELETE_SUB_CATEGORY_FAILURE:
        case CHANGE_SUB_CATEGORY_STATUS_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state;
    }
}