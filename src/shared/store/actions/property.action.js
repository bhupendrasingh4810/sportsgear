import {
    GET_PROPERTY_LIST,
    GET_PROPERTY_LIST_SUCCESS,
    GET_PROPERTY_LIST_FAILURE,
    
    GET_PROPERTY,
    GET_PROPERTY_SUCCESS,
    GET_PROPERTY_FAILURE,
    
    ADD_PROPERTY,
    ADD_PROPERTY_SUCCESS,
    ADD_PROPERTY_FAILURE,
    
    UPDATE_PROPERTY,
    UPDATE_PROPERTY_SUCCESS,
    UPDATE_PROPERTY_FAILURE,
    
    DELETE_PROPERTY,
    DELETE_PROPERTY_SUCCESS,
    DELETE_PROPERTY_FAILURE,
    
    CHANGE_PROPERTY_STATUS,
    CHANGE_PROPERTY_STATUS_SUCCESS,
    CHANGE_PROPERTY_STATUS_FAILURE
} from '../types/property.types';

export default function getPropertyList() {
    return {
        type: GET_PROPERTY_LIST
    };
}

export default function getPropertyListSuccess() {
    return {
        type: GET_PROPERTY_LIST_SUCCESS,
        payload
    };
}

export default function getPropertyListFailure() {
    return {
        type: GET_PROPERTY_LIST_FAILURE,
        payload
    };
}

export default function getProperty() {
    return {
        type: GET_PROPERTY
    };
}

export default function getPropertySuccess() {
    return {
        type: GET_PROPERTY_SUCCESS,
        payload
    };
}

export default function getPropertyFailure() {
    return {
        type: GET_PROPERTY_FAILURE,
        payload
    };
}

export default function addProperty() {
    return {
        type: ADD_PROPERTY
    };
}

export default function addPropertySuccess() {
    return {
        type: ADD_PROPERTY_SUCCESS,
        payload
    };
}

export default function addPropertyFailure() {
    return {
        type: ADD_PROPERTY_FAILURE,
        payload
    };
}

export default function updateProperty() {
    return {
        type: UPDATE_PROPERTY
    };
}

export default function updatePropertySuccess() {
    return {
        type: UPDATE_PROPERTY_SUCCESS,
        payload
    };
}

export default function updatePropertyFailure() {
    return {
        type: UPDATE_PROPERTY_FAILURE,
        payload
    };
}


export default function deleteProperty() {
    return {
        type: DELETE_PROPERTY
    };
}

export default function deletePropertySuccess() {
    return {
        type: DELETE_PROPERTY_SUCCESS,
        payload
    };
}

export default function deletePropertyFailure() {
    return {
        type: DELETE_PROPERTY_FAILURE,
        payload
    };
}


export default function changePropertyStatus() {
    return {
        type: CHANGE_PROPERTY_STATUS
    };
}

export default function changePropertyStatusSuccess() {
    return {
        type: CHANGE_PROPERTY_STATUS_SUCCESS,
        payload
    };
}

export default function changePropertyStatusFailure() {
    return {
        type: CHANGE_PROPERTY_STATUS_FAILURE,
        payload
    };
}