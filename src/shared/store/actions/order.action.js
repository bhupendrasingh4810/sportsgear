import {
    GET_ORDERS_LIST,
    GET_ORDERS_LIST_SUCCESS,
    GET_ORDERS_LIST_FAILURE,
    
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

function getOrdersList() {
    return {
        type: GET_ORDERS_LIST
    };
}

function getOrdersListSuccess() {
    return {
        type: GET_ORDERS_LIST_SUCCESS,
        orders
    };
}

function getOrdersListFailure() {
    return {
        type: GET_ORDERS_LIST_FAILURE,
        error
    };
}

function getOrder() {
    return {
        type: GET_ORDER
    };
}

function getOrderSuccess() {
    return {
        type: GET_ORDER_SUCCESS,
        Order
    };
}

function getOrderFailure() {
    return {
        type: GET_ORDER_FAILURE,
        error
    };
}

function addOrder() {
    return {
        type: ADD_ORDER
    };
}

function addOrderSuccess() {
    return {
        type: ADD_ORDER_SUCCESS,
        Order
    };
}

function addOrderFailure() {
    return {
        type: ADD_ORDER_FAILURE,
        error
    };
}

function updateOrder() {
    return {
        type: UPDATE_ORDER
    };
}

function updateOrderSuccess() {
    return {
        type: UPDATE_ORDER_SUCCESS,
        Order
    };
}

function updateOrderFailure() {
    return {
        type: UPDATE_ORDER_FAILURE,
        error
    };
}

function changeOrderStatus() {
    return {
        type: CHANGE_ORDER_STATUS
    };
}

function changeOrderStatusSuccess() {
    return {
        type: CHANGE_ORDER_STATUS_SUCCESS,
        response
    };
}

function changeOrderStatusFailure() {
    return {
        type: CHANGE_ORDER_STATUS_FAILURE,
        error
    };
}