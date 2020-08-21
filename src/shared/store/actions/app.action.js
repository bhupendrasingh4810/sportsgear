import {
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE,

    GET_DASHBOARD,
    GET_DASHBOARD_SUCCESS,
    GET_DASHBOARD_FAILURE,

    LOADING
} from '../types/app.types';

import { PROFILE_API, DASHBOARD_API } from '../../constants/api-constant';
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

export const setLoadingAction = payload => {
    return {
        type: LOADING,
        payload
    };
}