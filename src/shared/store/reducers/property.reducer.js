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

const initialState = {
    isLoading: false,
    properties: [],
    property: undefined,
    error: undefined
}

export default function propertiesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROPERTIES_LIST:
        case GET_PROPERTY:
        case ADD_PROPERTY:
        case UPDATE_PROPERTY:
        case DELETE_PROPERTY:
        case CHANGE_PROPERTY_STATUS:
            return {
                ...state,
                isLoading: true
            }
        case GET_PROPERTIES_LIST_SUCCESS:
            return {
                ...state,
                properties: action.properties,
                isLoading: false
            }
        case GET_PROPERTY_SUCCESS:
        case UPDATE_PROPERTY_SUCCESS:
        case ADD_PROPERTY_SUCCESS:
        case CHANGE_PROPERTY_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                property: action.property
            }
        case DELETE_PROPERTY_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case GET_PROPERTIES_LIST_FAILURE:
        case GET_PROPERTY_FAILURE:
        case ADD_PROPERTY_FAILURE:
        case UPDATE_PROPERTY_FAILURE:
        case DELETE_PROPERTY_FAILURE:
        case CHANGE_PROPERTY_STATUS_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state;
    }
}