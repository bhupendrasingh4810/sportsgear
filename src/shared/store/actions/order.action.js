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

export default function getOrderList() {
    return {
        type: GET_ORDER_LIST
    };
}

export default function getOrderListSuccess() {
    return {
        type: GET_ORDER_LIST_SUCCESS,
        payload
    };
}

export default function getOrderListFailure() {
    return {
        type: GET_ORDER_LIST_FAILURE,
        payload
    };
}

export default function getOrder() {
    return {
        type: GET_ORDER
    };
}

export default function getOrderSuccess() {
    return {
        type: GET_ORDER_SUCCESS,
        payload
    };
}

export default function getOrderFailure() {
    return {
        type: GET_ORDER_FAILURE,
        payload
    };
}

export default function addOrder() {
    return {
        type: ADD_ORDER
    };
}

export default function addOrderSuccess() {
    return {
        type: ADD_ORDER_SUCCESS,
        payload
    };
}

export default function addOrderFailure() {
    return {
        type: ADD_ORDER_FAILURE,
        payload
    };
}

export default function updateOrder() {
    return {
        type: UPDATE_ORDER
    };
}

export default function updateOrderSuccess() {
    return {
        type: UPDATE_ORDER_SUCCESS,
        payload
    };
}

export default function updateOrderFailure() {
    return {
        type: UPDATE_ORDER_FAILURE,
        payload
    };
}

export default function changeOrderStatus() {
    return {
        type: CHANGE_ORDER_STATUS
    };
}

export default function changeOrderStatusSuccess() {
    return {
        type: CHANGE_ORDER_STATUS_SUCCESS,
        payload
    };
}

export default function changeOrderStatusFailure() {
    return {
        type: CHANGE_ORDER_STATUS_FAILURE,
        payload
    };
}