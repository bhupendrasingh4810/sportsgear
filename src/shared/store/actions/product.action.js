import {
    GET_PRODUCT_LIST,
    GET_PRODUCT_LIST_SUCCESS,
    GET_PRODUCT_LIST_FAILURE,
    
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

export default function getProductList() {
    return {
        type: GET_PRODUCT_LIST
    };
}

export default function getProductListSuccess() {
    return {
        type: GET_PRODUCT_LIST_SUCCESS,
        payload
    };
}

export default function getProductListFailure() {
    return {
        type: GET_PRODUCT_LIST_FAILURE,
        payload
    };
}

export default function getProduct() {
    return {
        type: GET_PRODUCT
    };
}

export default function getProductuccess() {
    return {
        type: GET_PRODUCT_SUCCESS,
        payload
    };
}

export default function getProductFailure() {
    return {
        type: GET_PRODUCT_FAILURE,
        payload
    };
}

export default function addProduct() {
    return {
        type: ADD_PRODUCT
    };
}

export default function addProductuccess() {
    return {
        type: ADD_PRODUCT_SUCCESS,
        payload
    };
}

export default function addProductFailure() {
    return {
        type: ADD_PRODUCT_FAILURE,
        payload
    };
}

export default function updateProduct() {
    return {
        type: UPDATE_PRODUCT
    };
}

export default function updateProductuccess() {
    return {
        type: UPDATE_PRODUCT_SUCCESS,
        payload
    };
}

export default function updateProductFailure() {
    return {
        type: UPDATE_PRODUCT_FAILURE,
        payload
    };
}


export default function deleteProduct() {
    return {
        type: DELETE_PRODUCT
    };
}

export default function deleteProductuccess() {
    return {
        type: DELETE_PRODUCT_SUCCESS,
        response
    };
}

export default function deleteProductFailure() {
    return {
        type: DELETE_PRODUCT_FAILURE,
        payload
    };
}


export default function changeProducttatus() {
    return {
        type: CHANGE_PRODUCT_STATUS
    };
}

export default function changeProducttatusSuccess() {
    return {
        type: CHANGE_PRODUCT_STATUS_SUCCESS,
        payload
    };
}

export default function changeProducttatusFailure() {
    return {
        type: CHANGE_PRODUCT_STATUS_FAILURE,
        payload
    };
}