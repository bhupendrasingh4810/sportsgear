import {
    GET_SUB_CATEGORY_LIST,
    GET_SUB_CATEGORY_LIST_SUCCESS,
    GET_SUB_CATEGORY_LIST_FAILURE,

    GET_SUB_CATEGORY,
    GET_SUB_CATEGORY_SUCCESS,
    GET_SUB_CATEGORY_FAILURE,
    
    ADD_SUB_CATEGORY,
    ADD_SUB_CATEGORY_SUCCESS,
    ADD_SUB_CATEGORY_FAILURE,
    
    UPDATE_SUB_CATEGORY,
    UPDATE_SUB_CATEGORY_SUCCESS,
    UPDATE_SUB_CATEGORY_FAILURE,
    
    DELETE_SUB_CATEGORY,
    DELETE_SUB_CATEGORY_SUCCESS,
    DELETE_SUB_CATEGORY_FAILURE,
    
    CHANGE_SUB_CATEGORY_STATUS,
    CHANGE_SUB_CATEGORY_STATUS_SUCCESS,
    CHANGE_SUB_CATEGORY_STATUS_FAILURE
} from '../types/sub-category.types';

export default function getSubCategoryList() {
    return {
        type: GET_SUB_CATEGORY_LIST
    };
}

export default function getSubCategoryListSuccess() {
    return {
        type: GET_SUB_CATEGORY_LIST_SUCCESS,
        payload
    };
}

export default function getSubCategoryListFailure() {
    return {
        type: GET_SUB_CATEGORY_LIST_FAILURE,
        payload
    };
}

export default function getSubCategory() {
    return {
        type: GET_SUB_CATEGORY
    };
}

export default function getSubCategorySuccess() {
    return {
        type: GET_SUB_CATEGORY_SUCCESS,
        payload
    };
}

export default function getSubCategoryFailure() {
    return {
        type: GET_SUB_CATEGORY_FAILURE,
        payload
    };
}

export default function addSubCategory() {
    return {
        type: ADD_SUB_CATEGORY
    };
}

export default function addSubCategorySuccess() {
    return {
        type: ADD_SUB_CATEGORY_SUCCESS,
        payload
    };
}

export default function addSubCategoryFailure() {
    return {
        type: ADD_SUB_CATEGORY_FAILURE,
        payload
    };
}

export default function updateSubCategory() {
    return {
        type: UPDATE_SUB_CATEGORY
    };
}

export default function updateSubCategorySuccess() {
    return {
        type: UPDATE_SUB_CATEGORY_SUCCESS,
        payload
    };
}

export default function updateSubCategoryFailure() {
    return {
        type: UPDATE_SUB_CATEGORY_FAILURE,
        payload
    };
}


export default function deleteSubCategory() {
    return {
        type: DELETE_SUB_CATEGORY
    };
}

export default function deleteSubCategorySuccess() {
    return {
        type: DELETE_SUB_CATEGORY_SUCCESS,
        payload
    };
}

export default function deleteSubCategoryFailure() {
    return {
        type: DELETE_SUB_CATEGORY_FAILURE,
        payload
    };
}


export default function changeSubCategoryStatus() {
    return {
        type: CHANGE_SUB_CATEGORY_STATUS
    };
}

export default function changeSubCategoryStatusSuccess() {
    return {
        type: CHANGE_SUB_CATEGORY_STATUS_SUCCESS,
        payload
    };
}

export default function changeSubCategoryStatusFailure() {
    return {
        type: CHANGE_SUB_CATEGORY_STATUS_FAILURE,
        payload
    };
}