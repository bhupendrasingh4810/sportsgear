import {
    GET_USER_LIST,
    GET_USER_LIST_SUCCESS,
    GET_USER_LIST_FAILURE,

    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,

    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,

    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,

    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,

    CHANGE_USER_STATUS,
    CHANGE_USER_STATUS_SUCCESS,
    CHANGE_USER_STATUS_FAILURE
} from '../types/user.types';

const initialState = {
    isLoading: false,
    users: [],
    user: undefined,
    error: undefined
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_LIST:
        case GET_USER:
        case ADD_USER:
        case UPDATE_USER:
        case DELETE_USER:
        case CHANGE_USER_STATUS:
            return {
                ...state,
                isLoading: true
            }
        case GET_USER_LIST_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
        case GET_USER_SUCCESS:
        case UPDATE_USER_SUCCESS:
        case ADD_USER_SUCCESS:
        case CHANGE_USER_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case GET_USER_LIST_FAILURE:
        case GET_USER_FAILURE:
        case ADD_USER_FAILURE:
        case UPDATE_USER_FAILURE:
        case DELETE_USER_FAILURE:
        case CHANGE_USER_STATUS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}