import {
    GET_TAGS_LIST,
    GET_TAGS_LIST_SUCCESS,
    GET_TAGS_LIST_FAILURE,

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

function getTagsList() {
    return {
        type: GET_TAGS_LIST
    };
}

function getTagsListSuccess() {
    return {
        type: GET_TAGS_LIST_SUCCESS,
        tags
    };
}

function getTagsListFailure() {
    return {
        type: GET_TAGS_LIST_FAILURE,
        error
    };
}

function getTag() {
    return {
        type: GET_TAG
    };
}

function getTagSuccess() {
    return {
        type: GET_TAG_SUCCESS,
        tag
    };
}

function getTagFailure() {
    return {
        type: GET_TAG_FAILURE,
        error
    };
}

function addTag() {
    return {
        type: ADD_TAG
    };
}

function addTagSuccess() {
    return {
        type: ADD_TAG_SUCCESS,
        tag
    };
}

function addTagFailure() {
    return {
        type: ADD_TAG_FAILURE,
        error
    };
}

function updateTag() {
    return {
        type: UPDATE_TAG
    };
}

function updateTagSuccess() {
    return {
        type: UPDATE_TAG_SUCCESS,
        tag
    };
}

function updateTagFailure() {
    return {
        type: UPDATE_TAG_FAILURE,
        error
    };
}


function deleteTag() {
    return {
        type: DELETE_TAG
    };
}

function deleteTagSuccess() {
    return {
        type: DELETE_TAG_SUCCESS,
        response
    };
}

function deleteTagFailure() {
    return {
        type: DELETE_TAG_FAILURE,
        error
    };
}


function changeTagStatus() {
    return {
        type: CHANGE_TAG_STATUS
    };
}

function changeTagStatusSuccess() {
    return {
        type: CHANGE_TAG_STATUS_SUCCESS,
        response
    };
}

function changeTagStatusFailure() {
    return {
        type: CHANGE_TAG_STATUS_FAILURE,
        error
    };
}