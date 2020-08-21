import {
    GET_PROPERTY_LIST,
    GET_PROPERTY_LIST_SUCCESS,
    GET_PROPERTY_LIST_FAILURE,

    GET_PROPERTY,
    GET_PROPERTY_SUCCESS,
    GET_PROPERTY_FAILURE,

    ADD_PROPERTY,
    ADD_PROPERTY_SUCCESS,
    ADD_PROPERTY_FAILURE,

    UPDATE_PROPERTY,
    UPDATE_PROPERTY_SUCCESS,
    UPDATE_PROPERTY_FAILURE,

    DELETE_PROPERTY,
    DELETE_PROPERTY_SUCCESS,
    DELETE_PROPERTY_FAILURE,

    CHANGE_PROPERTY_STATUS,
    CHANGE_PROPERTY_STATUS_SUCCESS,
    CHANGE_PROPERTY_STATUS_FAILURE
} from '../types/property.types';

import { apiAction } from './api.action';
import { PROPERTY_API } from '../../constants/api-constant';

export const getPropertyList = () => {
    return apiAction({
        url: PROPERTY_API,
        method: 'GET',
        data: null,
        onSuccess: getPropertyListSuccess,
        onFailure: getPropertyListFailure,
        label: GET_PROPERTY_LIST
    });
}

const getPropertyListSuccess = payload => {
    return {
        type: GET_PROPERTY_LIST_SUCCESS,
        payload
    };
}

const getPropertyListFailure = payload => {
    return {
        type: GET_PROPERTY_LIST_FAILURE,
        payload
    };
}

export const getProperty = payload => {
    return apiAction({
        url: `${PROPERTY_API}/${payload}`,
        method: 'GET',
        data: null,
        onSuccess: getPropertySuccess,
        onFailure: getPropertyFailure,
        label: GET_PROPERTY
    });
}

const getPropertySuccess = payload => {
    return {
        type: GET_PROPERTY_SUCCESS,
        payload
    };
}

const getPropertyFailure = payload => {
    return {
        type: GET_PROPERTY_FAILURE,
        payload
    };
}

export const addProperty = payload => {
    return apiAction({
        url: PROPERTY_API,
        method: 'POST',
        data: payload,
        onSuccess: addPropertySuccess,
        onFailure: addPropertyFailure,
        label: ADD_PROPERTY
    });
}

const addPropertySuccess = payload => {
    return {
        type: ADD_PROPERTY_SUCCESS,
        payload
    };
}

const addPropertyFailure = payload => {
    return {
        type: ADD_PROPERTY_FAILURE,
        payload
    };
}

export const updateProperty = ({id, body}) => {
    return apiAction({
        url: `${PROPERTY_API}/${id}`,
        method: 'PUT',
        data: body,
        onSuccess: updatePropertySuccess,
        onFailure: updatePropertyFailure,
        label: UPDATE_PROPERTY
    });
}

const updatePropertySuccess = payload => {
    return {
        type: UPDATE_PROPERTY_SUCCESS,
        payload
    };
}

const updatePropertyFailure = payload => {
    return {
        type: UPDATE_PROPERTY_FAILURE,
        payload
    };
}


export const deleteProperty = payload => {
    return apiAction({
        url: `${PROPERTY_API}/${payload}`,
        method: 'DELETE',
        data: null,
        onSuccess: deletePropertySuccess,
        onFailure: deletePropertyFailure,
        label: DELETE_PROPERTY
    });
}

const deletePropertySuccess = payload => {
    return {
        type: DELETE_PROPERTY_SUCCESS,
        payload
    };
}

const deletePropertyFailure = payload => {
    return {
        type: DELETE_PROPERTY_FAILURE,
        payload
    };
}


export const changePropertyStatus = ({id, body}) => {
    return apiAction({
        url: `${PROPERTY_API}/${id}`,
        method: 'PATCH',
        data: body,
        onSuccess: changePropertyStatusSuccess,
        onFailure: changePropertyStatusFailure,
        label: CHANGE_PROPERTY_STATUS
    });
}

const changePropertyStatusSuccess = payload => {
    return {
        type: CHANGE_PROPERTY_STATUS_SUCCESS,
        payload
    };
}

const changePropertyStatusFailure = payload => {
    return {
        type: CHANGE_PROPERTY_STATUS_FAILURE,
        payload
    };
}