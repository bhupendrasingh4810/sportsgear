import {
    GET_BRAND_LIST,
    GET_BRAND_LIST_SUCCESS,
    GET_BRAND_LIST_FAILURE,

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
import { BRAND_API } from '../../constants/api-constant';
import { apiAction } from './api.action';

export const getBrandList = () => {
    return apiAction({
        url: BRAND_API,
        method: 'GET',
        data: null,
        onSuccess: getBrandListSuccess,
        onFailure: getBrandListFailure,
        label: GET_BRAND_LIST
    });
}

export const getBrandListSuccess = payload => {
    return {
        type: GET_BRAND_LIST_SUCCESS,
        payload
    };
}

export const getBrandListFailure = payload => {
    return {
        type: GET_BRAND_LIST_FAILURE,
        payload
    };
}

export const getBrand = payload => {
    return {
        type: GET_BRAND
    };
}

export const getBrandSuccess = payload => {
    return {
        type: GET_BRAND_SUCCESS,
        payload
    };
}

export const getBrandFailure = payload => {
    return {
        type: GET_BRAND_FAILURE,
        payload
    };
}

export const addBrand = payload => {
    return {
        type: ADD_BRAND
    };
}

export const addBrandSuccess = payload => {
    return {
        type: ADD_BRAND_SUCCESS,
        payload
    };
}

export const addBrandFailure = payload => {
    return {
        type: ADD_BRAND_FAILURE,
        payload
    };
}

export const updateBrand = payload => {
    return {
        type: UPDATE_BRAND
    };
}

export const updateBrandSuccess = payload => {
    return {
        type: UPDATE_BRAND_SUCCESS,
        payload
    };
}

export const updateBrandFailure = payload => {
    return {
        type: UPDATE_BRAND_FAILURE,
        payload
    };
}


export const deleteBrand = payload => {
    return {
        type: DELETE_BRAND
    };
}

export const deleteBrandSuccess = payload => {
    return {
        type: DELETE_BRAND_SUCCESS,
        payload
    };
}

export const deleteBrandFailure = payload => {
    return {
        type: DELETE_BRAND_FAILURE,
        payload
    };
}


export const changeBrandStatus = payload => {
    return {
        type: CHANGE_BRAND_STATUS
    };
}

export const changeBrandStatusSuccess = payload => {
    return {
        type: CHANGE_BRAND_STATUS_SUCCESS,
        payload
    };
}

export const changeBrandStatusFailure = payload => {
    return {
        type: CHANGE_BRAND_STATUS_FAILURE,
        payload
    };
}