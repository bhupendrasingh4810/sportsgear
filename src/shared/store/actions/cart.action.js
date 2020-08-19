import {
    GET_CARTS_LIST,
    GET_CARTS_LIST_SUCCESS,
    GET_CARTS_LIST_FAILURE,

    GET_CART,
    GET_CART_SUCCESS,
    GET_CART_FAILURE,
    
    ADD_CART,
    ADD_CART_SUCCESS,
    ADD_CART_FAILURE,
    
    UPDATE_CART,
    UPDATE_CART_SUCCESS,
    UPDATE_CART_FAILURE,
    
    DELETE_CART,
    DELETE_CART_SUCCESS,
    DELETE_CART_FAILURE,
    
    CHANGE_CART_TO_ORDER,
    CHANGE_CART_TO_ORDER_SUCCESS,
    CHANGE_CART_TO_ORDER_FAILURE
} from '../types/cart.types';

function getCartsList() {
    return {
        type: GET_CARTS_LIST
    };
}

function getCartsListSuccess() {
    return {
        type: GET_CARTS_LIST_SUCCESS,
        carts
    };
}

function getCartsListFailure() {
    return {
        type: GET_CARTS_LIST_FAILURE,
        error
    };
}

function getCart() {
    return {
        type: GET_CART
    };
}

function getCartSuccess() {
    return {
        type: GET_CART_SUCCESS,
        cart
    };
}

function getCartFailure() {
    return {
        type: GET_CART_FAILURE,
        error
    };
}

function addCart() {
    return {
        type: ADD_CART
    };
}

function addCartSuccess() {
    return {
        type: ADD_CART_SUCCESS,
        cart
    };
}

function addCartFailure() {
    return {
        type: ADD_CART_FAILURE,
        error
    };
}

function updateCart() {
    return {
        type: UPDATE_CART
    };
}

function updateCartSuccess() {
    return {
        type: UPDATE_CART_SUCCESS,
        cart
    };
}

function updateCartFailure() {
    return {
        type: UPDATE_CART_FAILURE,
        error
    };
}


function deleteCart() {
    return {
        type: DELETE_CART
    };
}

function deleteCartSuccess() {
    return {
        type: DELETE_CART_SUCCESS,
        response
    };
}

function deleteCartFailure() {
    return {
        type: DELETE_CART_FAILURE,
        error
    };
}


function changeCartToOrder() {
    return {
        type: CHANGE_CART_TO_ORDER
    };
}

function changeCartToOrderSuccess() {
    return {
        type: CHANGE_CART_TO_ORDER_SUCCESS,
        response
    };
}

function changeCartToOrderFailure() {
    return {
        type: CHANGE_CART_TO_ORDER_FAILURE,
        error
    };
}