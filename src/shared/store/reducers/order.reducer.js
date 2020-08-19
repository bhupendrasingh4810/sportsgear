import {
    GET_ORDER_LIST,
    GET_ORDER_LIST_SUCCESS,
    GET_ORDER_LIST_FAILURE,
    
    GET_ORDER,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILURE,
    
    ADD_ORDER,
    ADD_ORDER_SUCCESS,
    ADD_ORDER_FAILURE,
    
    UPDATE_ORDER,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAILURE,
    
    CHANGE_ORDER_STATUS,
    CHANGE_ORDER_STATUS_SUCCESS,
    CHANGE_ORDER_STATUS_FAILURE
} from '../types/order.types';

const initialState = {
    isLoading: false,
    orders: [],
    order: undefined,
    error: undefined
}

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ORDER_LIST:
        case GET_ORDER:
        case ADD_ORDER:
        case UPDATE_ORDER:
        case CHANGE_ORDER_STATUS:
            return {
                ...state,
                isLoading: true
            }
        case GET_ORDER_LIST_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                isLoading: false
            }
        case GET_ORDER_SUCCESS:
        case UPDATE_ORDER_SUCCESS:
        case ADD_ORDER_SUCCESS:
        case CHANGE_ORDER_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                order: action.payload
            }
        case GET_ORDER_LIST_FAILURE:
        case GET_ORDER_FAILURE:
        case ADD_ORDER_FAILURE:
        case UPDATE_ORDER_FAILURE:
        case CHANGE_ORDER_STATUS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}