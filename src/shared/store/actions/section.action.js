import {
    GET_SECTIONS_LIST,
    GET_SECTIONS_LIST_SUCCESS,
    GET_SECTIONS_LIST_FAILURE,
    
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

function getSectionsList() {
    return {
        type: GET_SECTIONS_LIST
    };
}

function getSectionsListSuccess() {
    return {
        type: GET_SECTIONS_LIST_SUCCESS,
        sections
    };
}

function getSectionsListFailure() {
    return {
        type: GET_SECTIONS_LIST_FAILURE,
        error
    };
}

function getSection() {
    return {
        type: GET_SECTION
    };
}

function getSectionSuccess() {
    return {
        type: GET_SECTION_SUCCESS,
        section
    };
}

function getSectionFailure() {
    return {
        type: GET_SECTION_FAILURE,
        error
    };
}

function addSection() {
    return {
        type: ADD_SECTION
    };
}

function addSectionSuccess() {
    return {
        type: ADD_SECTION_SUCCESS,
        section
    };
}

function addSectionFailure() {
    return {
        type: ADD_SECTION_FAILURE,
        error
    };
}

function updateSection() {
    return {
        type: UPDATE_SECTION
    };
}

function updateSectionSuccess() {
    return {
        type: UPDATE_SECTION_SUCCESS,
        section
    };
}

function updateSectionFailure() {
    return {
        type: UPDATE_SECTION_FAILURE,
        error
    };
}


function deleteSection() {
    return {
        type: DELETE_SECTION
    };
}

function deleteSectionSuccess() {
    return {
        type: DELETE_SECTION_SUCCESS,
        response
    };
}

function deleteSectionFailure() {
    return {
        type: DELETE_SECTION_FAILURE,
        error
    };
}


function changeSectionStatus() {
    return {
        type: CHANGE_SECTION_STATUS
    };
}

function changeSectionStatusSuccess() {
    return {
        type: CHANGE_SECTION_STATUS_SUCCESS,
        response
    };
}

function changeSectionStatusFailure() {
    return {
        type: CHANGE_SECTION_STATUS_FAILURE,
        error
    };
}