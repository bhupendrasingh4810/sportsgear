import {
    GET_PROPERTY_LIST_SUCCESS,
    GET_PROPERTY_LIST_FAILURE,

    GET_PROPERTY_SUCCESS,
    GET_PROPERTY_FAILURE,

    ADD_PROPERTY_SUCCESS,
    ADD_PROPERTY_FAILURE,

    UPDATE_PROPERTY_SUCCESS,
    UPDATE_PROPERTY_FAILURE,

    DELETE_PROPERTY_SUCCESS,
    DELETE_PROPERTY_FAILURE,

    CHANGE_PROPERTY_STATUS_SUCCESS,
    CHANGE_PROPERTY_STATUS_FAILURE
} from '../types/property.types';

const initialState = {
    properties: [],
    property: undefined,
    error: undefined
}

export default function propertyReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROPERTY_LIST_SUCCESS:
            return {
                ...state,
                properties: action.payload,
            }
        case GET_PROPERTY_SUCCESS:
        case UPDATE_PROPERTY_SUCCESS:
        case ADD_PROPERTY_SUCCESS:
        case CHANGE_PROPERTY_STATUS_SUCCESS:
            return {
                ...state,
                property: action.payload
            }
        case DELETE_PROPERTY_SUCCESS:
            return {
                ...state
            }
        case GET_PROPERTY_LIST_FAILURE:
        case GET_PROPERTY_FAILURE:
        case ADD_PROPERTY_FAILURE:
        case UPDATE_PROPERTY_FAILURE:
        case DELETE_PROPERTY_FAILURE:
        case CHANGE_PROPERTY_STATUS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}