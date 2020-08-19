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

function getProductsList() {
    return {
        type: GET_PRODUCTS_LIST
    };
}

function getProductsListSuccess() {
    return {
        type: GET_PRODUCTS_LIST_SUCCESS,
        products
    };
}

function getProductsListFailure() {
    return {
        type: GET_PRODUCTS_LIST_FAILURE,
        error
    };
}

function getProduct() {
    return {
        type: GET_PRODUCT
    };
}

function getProductSuccess() {
    return {
        type: GET_PRODUCT_SUCCESS,
        product
    };
}

function getProductFailure() {
    return {
        type: GET_PRODUCT_FAILURE,
        error
    };
}

function addProduct() {
    return {
        type: ADD_PRODUCT
    };
}

function addProductSuccess() {
    return {
        type: ADD_PRODUCT_SUCCESS,
        product
    };
}

function addProductFailure() {
    return {
        type: ADD_PRODUCT_FAILURE,
        error
    };
}

function updateProduct() {
    return {
        type: UPDATE_PRODUCT
    };
}

function updateProductSuccess() {
    return {
        type: UPDATE_PRODUCT_SUCCESS,
        product
    };
}

function updateProductFailure() {
    return {
        type: UPDATE_PRODUCT_FAILURE,
        error
    };
}


function deleteProduct() {
    return {
        type: DELETE_PRODUCT
    };
}

function deleteProductSuccess() {
    return {
        type: DELETE_PRODUCT_SUCCESS,
        response
    };
}

function deleteProductFailure() {
    return {
        type: DELETE_PRODUCT_FAILURE,
        error
    };
}


function changeProductStatus() {
    return {
        type: CHANGE_PRODUCT_STATUS
    };
}

function changeProductStatusSuccess() {
    return {
        type: CHANGE_PRODUCT_STATUS_SUCCESS,
        response
    };
}

function changeProductStatusFailure() {
    return {
        type: CHANGE_PRODUCT_STATUS_FAILURE,
        error
    };
}