import {
    GET_SECTION_LIST,
    GET_SECTION_LIST_SUCCESS,
    GET_SECTION_LIST_FAILURE,

    GET_SECTION,
    GET_SECTION_SUCCESS,
    GET_SECTION_FAILURE,
    
    ADD_SECTION,
    ADD_SECTION_SUCCESS,
    ADD_SECTION_FAILURE,
    
    UPDATE_SECTION,
    UPDATE_SECTION_SUCCESS,
    UPDATE_SECTION_FAILURE,
    
    DELETE_SECTION,
    DELETE_SECTION_SUCCESS,
    DELETE_SECTION_FAILURE,
    
    CHANGE_SECTION_STATUS,
    CHANGE_SECTION_STATUS_SUCCESS,
    CHANGE_SECTION_STATUS_FAILURE
} from '../types/section.types';

const initialState = {
    isLoading: false,
    sections: [],
    section: undefined,
    error: undefined
}

export default function sectionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SECTION_LIST:
        case GET_SECTION:
        case ADD_SECTION:
        case UPDATE_SECTION:
        case DELETE_SECTION:
        case CHANGE_SECTION_STATUS:
            return {
                ...state,
                isLoading: true
            }
        case GET_SECTION_LIST_SUCCESS:
            return {
                ...state,
                sections: action.payload,
                isLoading: false
            }
        case GET_SECTION_SUCCESS:
        case UPDATE_SECTION_SUCCESS:
        case ADD_SECTION_SUCCESS:
        case CHANGE_SECTION_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                section: action.payload
            }
        case DELETE_SECTION_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case GET_SECTION_LIST_FAILURE:
        case GET_SECTION_FAILURE:
        case ADD_SECTION_FAILURE:
        case UPDATE_SECTION_FAILURE:
        case DELETE_SECTION_FAILURE:
        case CHANGE_SECTION_STATUS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}