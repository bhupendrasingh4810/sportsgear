import { API_START, API_END, API_ERROR, ACCESS_DENIED, API } from '../types/auth.types';

import { setLoadingAction } from './app.action';

export const apiStart = label => ({
    type: API_START,
    payload: label
});

export const apiEnd = label => ({
    type: API_END,
    payload: label
});

export const accessDenied = url => ({
    type: ACCESS_DENIED,
    payload: {
        url
    }
});

export const apiError = error => ({
    type: API_ERROR,
    error
});

export function apiAction({
    url = "",
    method = "GET",
    data = null,
    accessToken = null,
    onSuccess = () => { },
    onFailure = () => { },
    loadingAction = setLoadingAction,
    label = "",
    headersOverride = null
}) {
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            accessToken,
            onSuccess,
            onFailure,
            loadingAction,
            label,
            headersOverride
        }
    };
}