import {
    GET_PRODUCTS_LIST,
    GET_PRODUCTS_LIST_SUCCESS,
    GET_PRODUCTS_LIST_FAILURE,

    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    
    CHANGE_PRODUCT_STATUS,
    CHANGE_PRODUCT_STATUS_SUCCESS,
    CHANGE_PRODUCT_STATUS_FAILURE
} from '../types/product.types';

const initialState = {
    isLoading: false,
    products: [],
    product: undefined,
    error: undefined
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS_LIST:
        case GET_PRODUCT:
        case ADD_PRODUCT:
        case UPDATE_PRODUCT:
        case DELETE_PRODUCT:
        case CHANGE_PRODUCT_STATUS:
            return {
                ...state,
                isLoading: true
            }
        case GET_PRODUCTS_LIST_SUCCESS:
            return {
                ...state,
                products: action.products,
                isLoading: false
            }
        case GET_PRODUCT_SUCCESS:
        case UPDATE_PRODUCT_SUCCESS:
        case ADD_PRODUCT_SUCCESS:
        case CHANGE_PRODUCT_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                product: action.product
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case GET_PRODUCTS_LIST_FAILURE:
        case GET_PRODUCT_FAILURE:
        case ADD_PRODUCT_FAILURE:
        case UPDATE_PRODUCT_FAILURE:
        case DELETE_PRODUCT_FAILURE:
        case CHANGE_PRODUCT_STATUS_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state;
    }
}