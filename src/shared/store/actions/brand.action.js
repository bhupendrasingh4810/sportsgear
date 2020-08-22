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

export const getBrandListAction = () => {
    return apiAction({
        url: BRAND_API,
        method: 'GET',
        data: null,
        onSuccess: getBrandListSuccessAction,
        onFailure: getBrandListFailureAction,
        label: GET_BRAND_LIST
    });
}

export const getBrandListSuccessAction = payload => {
    return {
        type: GET_BRAND_LIST_SUCCESS,
        payload
    };
}

export const getBrandListFailureAction = payload => {
    return {
        type: GET_BRAND_LIST_FAILURE,
        payload
    };
}

export const getBrandAction = payload => {
    return apiAction({
        url: `${BRAND_API}/${payload}`,
        method: 'GET',
        data: null,
        onSuccess: getBrandSuccessAction,
        onFailure: getBrandFailureAction,
        label: GET_BRAND
    });
}

export const getBrandSuccessAction = payload => {
    return {
        type: GET_BRAND_SUCCESS,
        payload
    };
}

export const getBrandFailureAction = payload => {
    return {
        type: GET_BRAND_FAILURE,
        payload
    };
}

export const addBrandAction = payload => {
    return apiAction({
        url: BRAND_API,
        method: 'POST',
        data: payload,
        onSuccess: addBrandSuccessAction,
        onFailure: addBrandFailureAction,
        label: ADD_BRAND
    });
}

export const addBrandSuccessAction = payload => {
    return {
        type: ADD_BRAND_SUCCESS,
        payload
    };
}

export const addBrandFailureAction = payload => {
    return {
        type: ADD_BRAND_FAILURE,
        payload
    };
}

export const updateBrandAction = ({ id, body }) => {
    return apiAction({
        url: `${BRAND_API}/${id}`,
        method: 'PUT',
        data: body,
        onSuccess: updateBrandSuccessAction,
        onFailure: updateBrandFailureAction,
        label: UPDATE_BRAND
    });
}

export const updateBrandSuccessAction = payload => {
    return {
        type: UPDATE_BRAND_SUCCESS,
        payload
    };
}

export const updateBrandFailureAction = payload => {
    return {
        type: UPDATE_BRAND_FAILURE,
        payload
    };
}


export const deleteBrandAction = ({ id }) => {
    return apiAction({
        url: `${BRAND_API}/${id}`,
        method: 'DELETE',
        data: null,
        onSuccess: deleteBrandSuccessAction,
        onFailure: deleteBrandFailureAction,
        label: DELETE_BRAND
    });
}

export const deleteBrandSuccessAction = payload => {
    return {
        type: DELETE_BRAND_SUCCESS,
        payload
    };
}

export const deleteBrandFailureAction = payload => {
    return {
        type: DELETE_BRAND_FAILURE,
        payload
    };
}


export const changeBrandStatusAction = ({ id, body }) => {
    return apiAction({
        url: `${BRAND_API}/${id}`,
        method: 'PATCH',
        data: body,
        onSuccess: changeBrandStatusSuccessAction,
        onFailure: changeBrandStatusFailureAction,
        label: CHANGE_BRAND_STATUS
    });
}

export const changeBrandStatusSuccessAction = payload => {
    return {
        type: CHANGE_BRAND_STATUS_SUCCESS,
        payload
    };
}

export const changeBrandStatusFailureAction = payload => {
    return {
        type: CHANGE_BRAND_STATUS_FAILURE,
        payload
    };
}