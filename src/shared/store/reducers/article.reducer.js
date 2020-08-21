import {
    GET_ARTICLE_LIST_SUCCESS,
    GET_ARTICLE_LIST_FAILURE,

    GET_ARTICLE_SUCCESS,
    GET_ARTICLE_FAILURE,
    
    ADD_ARTICLE_SUCCESS,
    ADD_ARTICLE_FAILURE,
    
    UPDATE_ARTICLE_SUCCESS,
    UPDATE_ARTICLE_FAILURE,
    
    DELETE_ARTICLE_FAILURE,
    
    CHANGE_ARTICLE_STATUS_SUCCESS,
    CHANGE_ARTICLE_STATUS_FAILURE
} from '../types/article.types';

const initialState = {
    articles: [],
    article: undefined,
    error: undefined
}

export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLE_LIST_SUCCESS:
            return {
                ...state,
                articles: action.payload.data
            }
        case GET_ARTICLE_SUCCESS:
        case UPDATE_ARTICLE_SUCCESS:
        case ADD_ARTICLE_SUCCESS:
        case CHANGE_ARTICLE_STATUS_SUCCESS:
            return {
                ...state,
                article: action.payload
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
            }
        default:
            return state;
    }
}