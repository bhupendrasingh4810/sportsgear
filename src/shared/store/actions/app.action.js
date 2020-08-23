import {
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE,

    GET_DASHBOARD,
    GET_DASHBOARD_SUCCESS,
    GET_DASHBOARD_FAILURE,

    UPLOAD_IMAGE,
    UPLOAD_IMAGE_SUCCESS,
    UPLOAD_IMAGE_FAILURE,

    LOADING
} from '../types/app.types';

import { PROFILE_API, DASHBOARD_API, UPLOAD_API } from '../../constants/api-constant';
import { apiAction } from './api.action';

export const getUserProfileAction = () => {
    return apiAction({
        url: PROFILE_API,
        method: 'GET',
        data: null,
        onSuccess: getUserProfileSuccessAction,
        onFailure: getUserProfileFailureAction,
        label: GET_USER_PROFILE
    });
}

function getUserProfileSuccessAction(payload) {
    return {
        type: GET_USER_PROFILE_SUCCESS,
        payload
    };
}

function getUserProfileFailureAction(payload) {
    return {
        type: GET_USER_PROFILE_FAILURE,
        payload
    };
}

export const getDashboardAction = () => {
    return apiAction({
        url: DASHBOARD_API,
        method: 'GET',
        data: null,
        onSuccess: getDashboardSuccessAction,
        onFailure: getDashboardFailureAction,
        label: GET_DASHBOARD
    });
}

function getDashboardSuccessAction(payload) {
    return {
        type: GET_DASHBOARD_SUCCESS,
        payload
    };
}

function getDashboardFailureAction(payload) {
    return {
        type: GET_DASHBOARD_FAILURE,
        payload
    };
}

export const uploadImageAction = payload => {
    let data = new FormData();
    data.append('image', payload);
    return apiAction({
        url: UPLOAD_API,
        method: 'POST',
        data,
        onSuccess: uploadImageSuccessAction,
        onFailure: uploadImageFailureAction,
        headersOverride: { 'Content-Type': 'multipart/form-data' },
        label: UPLOAD_IMAGE
    });
}

export function uploadImageSuccessAction(payload) {
    return {
        type: UPLOAD_IMAGE_SUCCESS,
        payload
    };
}

function uploadImageFailureAction(payload) {
    return {
        type: UPLOAD_IMAGE_FAILURE,
        payload
    };
}

export const setLoadingAction = payload => {
    return {
        type: LOADING,
        payload
    };
}