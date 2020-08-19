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

export default function getTagList() {
    return {
        type: GET_TAG_LIST
    };
}

export default function getTagListSuccess() {
    return {
        type: GET_TAG_LIST_SUCCESS,
        payload
    };
}

export default function getTagListFailure() {
    return {
        type: GET_TAG_LIST_FAILURE,
        payload
    };
}

export default function getTag() {
    return {
        type: GET_TAG
    };
}

export default function getTagSuccess() {
    return {
        type: GET_TAG_SUCCESS,
        payload
    };
}

export default function getTagFailure() {
    return {
        type: GET_TAG_FAILURE,
        payload
    };
}

export default function addTag() {
    return {
        type: ADD_TAG
    };
}

export default function addTagSuccess() {
    return {
        type: ADD_TAG_SUCCESS,
        payload
    };
}

export default function addTagFailure() {
    return {
        type: ADD_TAG_FAILURE,
        payload
    };
}

export default function updateTag() {
    return {
        type: UPDATE_TAG
    };
}

export default function updateTagSuccess() {
    return {
        type: UPDATE_TAG_SUCCESS,
        payload
    };
}

export default function updateTagFailure() {
    return {
        type: UPDATE_TAG_FAILURE,
        payload
    };
}


export default function deleteTag() {
    return {
        type: DELETE_TAG
    };
}

export default function deleteTagSuccess() {
    return {
        type: DELETE_TAG_SUCCESS,
        payload
    };
}

export default function deleteTagFailure() {
    return {
        type: DELETE_TAG_FAILURE,
        payload
    };
}


export default function changeTagStatus() {
    return {
        type: CHANGE_TAG_STATUS
    };
}

export default function changeTagStatusSuccess() {
    return {
        type: CHANGE_TAG_STATUS_SUCCESS,
        payload
    };
}

export default function changeTagStatusFailure() {
    return {
        type: CHANGE_TAG_STATUS_FAILURE,
        payload
    };
}