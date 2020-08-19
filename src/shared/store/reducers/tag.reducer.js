import {
    GET_TAG_LIST,
    GET_TAG_LIST_SUCCESS,
    GET_TAG_LIST_FAILURE,

    GET_TAG,
    GET_TAG_SUCCESS,
    GET_TAG_FAILURE,
    
    ADD_TAG,
    ADD_TAG_SUCCESS,
    ADD_TAG_FAILURE,
    
    UPDATE_TAG,
    UPDATE_TAG_SUCCESS,
    UPDATE_TAG_FAILURE,
    
    DELETE_TAG,
    DELETE_TAG_SUCCESS,
    DELETE_TAG_FAILURE,
    
    CHANGE_TAG_STATUS,
    CHANGE_TAG_STATUS_SUCCESS,
    CHANGE_TAG_STATUS_FAILURE
} from '../types/tag.types';

const initialState = {
    isLoading: false,
    tags: [],
    tag: undefined,
    error: undefined
}

export default function tagReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TAG_LIST:
        case GET_TAG:
        case ADD_TAG:
        case UPDATE_TAG:
        case DELETE_TAG:
        case CHANGE_TAG_STATUS:
            return {
                ...state,
                isLoading: true
            }
        case GET_TAG_LIST_SUCCESS:
            return {
                ...state,
                tags: action.payload,
                isLoading: false
            }
        case GET_TAG_SUCCESS:
        case UPDATE_TAG_SUCCESS:
        case ADD_TAG_SUCCESS:
        case CHANGE_TAG_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tag: action.payload
            }
        case DELETE_TAG_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case GET_TAG_LIST_FAILURE:
        case GET_TAG_FAILURE:
        case ADD_TAG_FAILURE:
        case UPDATE_TAG_FAILURE:
        case DELETE_TAG_FAILURE:
        case CHANGE_TAG_STATUS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}