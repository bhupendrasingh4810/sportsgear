import {
    GET_PROPERTIES_LIST,
    GET_PROPERTIES_LIST_SUCCESS,
    GET_PROPERTIES_LIST_FAILURE,
    
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

function getPropertiesList() {
    return {
        type: GET_PROPERTIES_LIST
    };
}

function getPropertiesListSuccess() {
    return {
        type: GET_PROPERTIES_LIST_SUCCESS,
        properties
    };
}

function getPropertiesListFailure() {
    return {
        type: GET_PROPERTIES_LIST_FAILURE,
        error
    };
}

function getProperty() {
    return {
        type: GET_PROPERTY
    };
}

function getPropertySuccess() {
    return {
        type: GET_PROPERTY_SUCCESS,
        property
    };
}

function getPropertyFailure() {
    return {
        type: GET_PROPERTY_FAILURE,
        error
    };
}

function addProperty() {
    return {
        type: ADD_PROPERTY
    };
}

function addPropertySuccess() {
    return {
        type: ADD_PROPERTY_SUCCESS,
        property
    };
}

function addPropertyFailure() {
    return {
        type: ADD_PROPERTY_FAILURE,
        error
    };
}

function updateProperty() {
    return {
        type: UPDATE_PROPERTY
    };
}

function updatePropertySuccess() {
    return {
        type: UPDATE_PROPERTY_SUCCESS,
        property
    };
}

function updatePropertyFailure() {
    return {
        type: UPDATE_PROPERTY_FAILURE,
        error
    };
}


function deleteProperty() {
    return {
        type: DELETE_PROPERTY
    };
}

function deletePropertySuccess() {
    return {
        type: DELETE_PROPERTY_SUCCESS,
        response
    };
}

function deletePropertyFailure() {
    return {
        type: DELETE_PROPERTY_FAILURE,
        error
    };
}


function changePropertyStatus() {
    return {
        type: CHANGE_PROPERTY_STATUS
    };
}

function changePropertyStatusSuccess() {
    return {
        type: CHANGE_PROPERTY_STATUS_SUCCESS,
        response
    };
}

function changePropertyStatusFailure() {
    return {
        type: CHANGE_PROPERTY_STATUS_FAILURE,
        error
    };
}