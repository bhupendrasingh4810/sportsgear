import {
    GET_REVIEW_LIST,
    GET_REVIEW_LIST_SUCCESS,
    GET_REVIEW_LIST_FAILURE,
    
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

export default function getReviewList() {
    return {
        type: GET_REVIEW_LIST
    };
}

export default function getReviewListSuccess() {
    return {
        type: GET_REVIEW_LIST_SUCCESS,
        payload
    };
}

export default function getReviewListFailure() {
    return {
        type: GET_REVIEW_LIST_FAILURE,
        payload
    };
}

export default function getReview() {
    return {
        type: GET_REVIEW
    };
}

export default function getReviewSuccess() {
    return {
        type: GET_REVIEW_SUCCESS,
        payload
    };
}

export default function getReviewFailure() {
    return {
        type: GET_REVIEW_FAILURE,
        payload
    };
}

export default function addReview() {
    return {
        type: ADD_REVIEW
    };
}

export default function addReviewSuccess() {
    return {
        type: ADD_REVIEW_SUCCESS,
        payload
    };
}

export default function addReviewFailure() {
    return {
        type: ADD_REVIEW_FAILURE,
        payload
    };
}

export default function updateReview() {
    return {
        type: UPDATE_REVIEW
    };
}

export default function updateReviewSuccess() {
    return {
        type: UPDATE_REVIEW_SUCCESS,
        payload
    };
}

export default function updateReviewFailure() {
    return {
        type: UPDATE_REVIEW_FAILURE,
        payload
    };
}


export default function deleteReview() {
    return {
        type: DELETE_REVIEW
    };
}

export default function deleteReviewSuccess() {
    return {
        type: DELETE_REVIEW_SUCCESS,
        payload
    };
}

export default function deleteReviewFailure() {
    return {
        type: DELETE_REVIEW_FAILURE,
        payload
    };
}


export default function changeReviewStatus() {
    return {
        type: CHANGE_REVIEW_STATUS
    };
}

export default function changeReviewStatusSuccess() {
    return {
        type: CHANGE_REVIEW_STATUS_SUCCESS,
        payload
    };
}

export default function changeReviewStatusFailure() {
    return {
        type: CHANGE_REVIEW_STATUS_FAILURE,
        payload
    };
}