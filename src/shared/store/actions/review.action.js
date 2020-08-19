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

function getReviewsList() {
    return {
        type: GET_REVIEWS_LIST
    };
}

function getReviewsListSuccess() {
    return {
        type: GET_REVIEWS_LIST_SUCCESS,
        reviews
    };
}

function getReviewsListFailure() {
    return {
        type: GET_REVIEWS_LIST_FAILURE,
        error
    };
}

function getReview() {
    return {
        type: GET_REVIEW
    };
}

function getReviewSuccess() {
    return {
        type: GET_REVIEW_SUCCESS,
        review
    };
}

function getReviewFailure() {
    return {
        type: GET_REVIEW_FAILURE,
        error
    };
}

function addReview() {
    return {
        type: ADD_REVIEW
    };
}

function addReviewSuccess() {
    return {
        type: ADD_REVIEW_SUCCESS,
        review
    };
}

function addReviewFailure() {
    return {
        type: ADD_REVIEW_FAILURE,
        error
    };
}

function updateReview() {
    return {
        type: UPDATE_REVIEW
    };
}

function updateReviewSuccess() {
    return {
        type: UPDATE_REVIEW_SUCCESS,
        review
    };
}

function updateReviewFailure() {
    return {
        type: UPDATE_REVIEW_FAILURE,
        error
    };
}


function deleteReview() {
    return {
        type: DELETE_REVIEW
    };
}

function deleteReviewSuccess() {
    return {
        type: DELETE_REVIEW_SUCCESS,
        response
    };
}

function deleteReviewFailure() {
    return {
        type: DELETE_REVIEW_FAILURE,
        error
    };
}


function changeReviewStatus() {
    return {
        type: CHANGE_REVIEW_STATUS
    };
}

function changeReviewStatusSuccess() {
    return {
        type: CHANGE_REVIEW_STATUS_SUCCESS,
        response
    };
}

function changeReviewStatusFailure() {
    return {
        type: CHANGE_REVIEW_STATUS_FAILURE,
        error
    };
}