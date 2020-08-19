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

export default function getCartList() {
    return {
        type: GET_CART_LIST
    };
}

export default function getCartListSuccess() {
    return {
        type: GET_CART_LIST_SUCCESS,
        payload
    };
}

export default function getCartListFailure() {
    return {
        type: GET_CART_LIST_FAILURE,
        payload
    };
}

export default function getCart() {
    return {
        type: GET_CART
    };
}

export default function getCartSuccess() {
    return {
        type: GET_CART_SUCCESS,
        payload
    };
}

export default function getCartFailure() {
    return {
        type: GET_CART_FAILURE,
        payload
    };
}

export default function addCart() {
    return {
        type: ADD_CART
    };
}

export default function addCartSuccess() {
    return {
        type: ADD_CART_SUCCESS,
        cart
    };
}

export default function addCartFailure() {
    return {
        type: ADD_CART_FAILURE,
        payload
    };
}

export default function updateCart() {
    return {
        type: UPDATE_CART
    };
}

export default function updateCartSuccess() {
    return {
        type: UPDATE_CART_SUCCESS,
        payload
    };
}

export default function updateCartFailure() {
    return {
        type: UPDATE_CART_FAILURE,
        payload
    };
}

export default function changeCartToOrder() {
    return {
        type: CHANGE_CART_TO_ORDER
    };
}

export default function changeCartToOrderSuccess() {
    return {
        type: CHANGE_CART_TO_ORDER_SUCCESS,
        payload
    };
}

export default function changeCartToOrderFailure() {
    return {
        type: CHANGE_CART_TO_ORDER_FAILURE,
        payload
    };
}