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

export default function getSectionList() {
    return {
        type: GET_SECTION_LIST
    };
}

export default function getSectionListSuccess() {
    return {
        type: GET_SECTION_LIST_SUCCESS,
        payload
    };
}

export default function getSectionListFailure() {
    return {
        type: GET_SECTION_LIST_FAILURE,
        payload
    };
}

export default function getSection() {
    return {
        type: GET_SECTION
    };
}

export default function getSectionSuccess() {
    return {
        type: GET_SECTION_SUCCESS,
        payload
    };
}

export default function getSectionFailure() {
    return {
        type: GET_SECTION_FAILURE,
        payload
    };
}

export default function addSection() {
    return {
        type: ADD_SECTION
    };
}

export default function addSectionSuccess() {
    return {
        type: ADD_SECTION_SUCCESS,
        payload
    };
}

export default function addSectionFailure() {
    return {
        type: ADD_SECTION_FAILURE,
        payload
    };
}

export default function updateSection() {
    return {
        type: UPDATE_SECTION
    };
}

export default function updateSectionSuccess() {
    return {
        type: UPDATE_SECTION_SUCCESS,
        payload
    };
}

export default function updateSectionFailure() {
    return {
        type: UPDATE_SECTION_FAILURE,
        payload
    };
}


export default function deleteSection() {
    return {
        type: DELETE_SECTION
    };
}

export default function deleteSectionSuccess() {
    return {
        type: DELETE_SECTION_SUCCESS,
        payload
    };
}

export default function deleteSectionFailure() {
    return {
        type: DELETE_SECTION_FAILURE,
        payload
    };
}


export default function changeSectionStatus() {
    return {
        type: CHANGE_SECTION_STATUS
    };
}

export default function changeSectionStatusSuccess() {
    return {
        type: CHANGE_SECTION_STATUS_SUCCESS,
        payload
    };
}

export default function changeSectionStatusFailure() {
    return {
        type: CHANGE_SECTION_STATUS_FAILURE,
        payload
    };
}