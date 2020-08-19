import {
    GET_REVIEWS_LIST,
    GET_REVIEWS_LIST_SUCCESS,
    GET_REVIEWS_LIST_FAILURE,

    GET_REVIEW,
    GET_REVIEW_SUCCESS,
    GET_REVIEW_FAILURE,
    
    ADD_REVIEW,
    ADD_REVIEW_SUCCESS,
    ADD_REVIEW_FAILURE,
    
    UPDATE_REVIEW,
    UPDATE_REVIEW_SUCCESS,
    UPDATE_REVIEW_FAILURE,
    
    DELETE_REVIEW,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAILURE,
    
    CHANGE_REVIEW_STATUS,
    CHANGE_REVIEW_STATUS_SUCCESS,
    CHANGE_REVIEW_STATUS_FAILURE
} from '../types/review.types';

const initialState = {
    isLoading: false,
    reviews: [],
    review: undefined,
    error: undefined
}

export default function reviewsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_REVIEWS_LIST:
        case GET_REVIEW:
        case ADD_REVIEW:
        case UPDATE_REVIEW:
        case DELETE_REVIEW:
        case CHANGE_REVIEW_STATUS:
            return {
                ...state,
                isLoading: true
            }
        case GET_REVIEWS_LIST_SUCCESS:
            return {
                ...state,
                reviews: action.reviews,
                isLoading: false
            }
        case GET_REVIEW_SUCCESS:
        case UPDATE_REVIEW_SUCCESS:
        case ADD_REVIEW_SUCCESS:
        case CHANGE_REVIEW_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                review: action.review
            }
        case DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case GET_REVIEWS_LIST_FAILURE:
        case GET_REVIEW_FAILURE:
        case ADD_REVIEW_FAILURE:
        case UPDATE_REVIEW_FAILURE:
        case DELETE_REVIEW_FAILURE:
        case CHANGE_REVIEW_STATUS_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state;
    }
}