import {
    GET_BRANDS_LIST,
    GET_BRANDS_LIST_SUCCESS,
    GET_BRANDS_LIST_FAILURE,
    
    GET_BRAND,
    GET_BRAND_SUCCESS,
    GET_BRAND_FAILURE,
    
    ADD_BRAND,
    ADD_BRAND_SUCCESS,
    ADD_BRAND_FAILURE,
    
    UPDATE_BRAND,
    UPDATE_BRAND_SUCCESS,
    UPDATE_BRAND_FAILURE,
    
    DELETE_BRAND,
    DELETE_BRAND_SUCCESS,
    DELETE_BRAND_FAILURE,
    
    CHANGE_BRAND_STATUS,
    CHANGE_BRAND_STATUS_SUCCESS,
    CHANGE_BRAND_STATUS_FAILURE
} from '../types/brand.types';

function getBrandsList() {
    return {
        type: GET_BRANDS_LIST
    };
}

function getBrandsListSuccess() {
    return {
        type: GET_BRANDS_LIST_SUCCESS,
        brands
    };
}

function getBrandsListFailure() {
    return {
        type: GET_BRANDS_LIST_FAILURE,
        error
    };
}

function getBrand() {
    return {
        type: GET_BRAND
    };
}

function getBrandSuccess() {
    return {
        type: GET_BRAND_SUCCESS,
        brand
    };
}

function getBrandFailure() {
    return {
        type: GET_BRAND_FAILURE,
        error
    };
}

function addBrand() {
    return {
        type: ADD_BRAND
    };
}

function addBrandSuccess() {
    return {
        type: ADD_BRAND_SUCCESS,
        brand
    };
}

function addBrandFailure() {
    return {
        type: ADD_BRAND_FAILURE,
        error
    };
}

function updateBrand() {
    return {
        type: UPDATE_BRAND
    };
}

function updateBrandSuccess() {
    return {
        type: UPDATE_BRAND_SUCCESS,
        brand
    };
}

function updateBrandFailure() {
    return {
        type: UPDATE_BRAND_FAILURE,
        error
    };
}


function deleteBrand() {
    return {
        type: DELETE_BRAND
    };
}

function deleteBrandSuccess() {
    return {
        type: DELETE_BRAND_SUCCESS,
        response
    };
}

function deleteBrandFailure() {
    return {
        type: DELETE_BRAND_FAILURE,
        error
    };
}


function changeBrandStatus() {
    return {
        type: CHANGE_BRAND_STATUS
    };
}

function changeBrandStatusSuccess() {
    return {
        type: CHANGE_BRAND_STATUS_SUCCESS,
        response
    };
}

function changeBrandStatusFailure() {
    return {
        type: CHANGE_BRAND_STATUS_FAILURE,
        error
    };
}