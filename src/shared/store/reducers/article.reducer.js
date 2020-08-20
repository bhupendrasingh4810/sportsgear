import {
    GET_ARTICLE_LIST,
    GET_ARTICLE_LIST_SUCCESS,
    GET_ARTICLE_LIST_FAILURE,

    GET_ARTICLE,
    GET_ARTICLE_SUCCESS,
    GET_ARTICLE_FAILURE,
    
    ADD_ARTICLE,
    ADD_ARTICLE_SUCCESS,
    ADD_ARTICLE_FAILURE,
    
    UPDATE_ARTICLE,
    UPDATE_ARTICLE_SUCCESS,
    UPDATE_ARTICLE_FAILURE,
    
    DELETE_ARTICLE,
    DELETE_ARTICLE_SUCCESS,
    DELETE_ARTICLE_FAILURE,
    
    CHANGE_ARTICLE_STATUS,
    CHANGE_ARTICLE_STATUS_SUCCESS,
    CHANGE_ARTICLE_STATUS_FAILURE
} from '../types/article.types';

const initialState = {
    isLoading: false,
    articles: [],
    article: undefined,
    error: undefined
}

export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLE_LIST:
        case GET_ARTICLE:
        case ADD_ARTICLE:
        case UPDATE_ARTICLE:
        case DELETE_ARTICLE:
        case CHANGE_ARTICLE_STATUS:
            return {
                ...state,
                isLoading: true
            }
        case GET_ARTICLE_LIST_SUCCESS:
            return {
                ...state,
                articles: action.payload.data,
                isLoading: false
            }
        case GET_ARTICLE_SUCCESS:
        case UPDATE_ARTICLE_SUCCESS:
        case ADD_ARTICLE_SUCCESS:
        case CHANGE_ARTICLE_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                article: action.payload
            }
        case DELETE_ARTICLE_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case GET_ARTICLE_LIST_FAILURE:
        case GET_ARTICLE_FAILURE:
        case ADD_ARTICLE_FAILURE:
        case UPDATE_ARTICLE_FAILURE:
        case DELETE_ARTICLE_FAILURE:
        case CHANGE_ARTICLE_STATUS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}