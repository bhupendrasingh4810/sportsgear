import {
    GET_CART_LIST,
    GET_CART_LIST_SUCCESS,
    GET_CART_LIST_FAILURE,

    GET_CART,
    GET_CART_SUCCESS,
    GET_CART_FAILURE,
    
    ADD_CART,
    ADD_CART_SUCCESS,
    ADD_CART_FAILURE,
    
    UPDATE_CART,
    UPDATE_CART_SUCCESS,
    UPDATE_CART_FAILURE,
    
    CHANGE_CART_TO_ORDER,
    CHANGE_CART_TO_ORDER_SUCCESS,
    CHANGE_CART_TO_ORDER_FAILURE
} from '../types/cart.types';

const initialState = {
    isLoading: false,
    carts: [],
    cart: undefined,
    error: undefined
}

export default function cartsReducers(state = initialState, action) {
    switch (action.type) {
        case GET_CART_LIST:
        case GET_CART:
        case ADD_CART:
        case UPDATE_CART:
        case CHANGE_CART_TO_ORDER:
            return {
                ...state,
                isLoading: true
            }
        case GET_CART_LIST_SUCCESS:
            return {
                ...state,
                carts: action.carts,
                isLoading: false
            }
        case GET_CART_SUCCESS:
        case UPDATE_CART_SUCCESS:
        case ADD_CART_SUCCESS:
        case CHANGE_CART_TO_ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cart: action.cart
            }
        case GET_CART_LIST_FAILURE:
        case GET_CART_FAILURE:
        case ADD_CART_FAILURE:
        case UPDATE_CART_FAILURE:
        case CHANGE_CART_TO_ORDER_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state;
    }
}