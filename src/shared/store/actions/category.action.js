import {
    GET_CATEGORY_LIST,
    GET_CATEGORY_LIST_SUCCESS,
    GET_CATEGORY_LIST_FAILURE,
    
    GET_CATEGORY,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_FAILURE,
    
    ADD_CATEGORY,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_FAILURE,
    
    UPDATE_CATEGORY,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAILURE,
    
    DELETE_CATEGORY,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAILURE,
    
    CHANGE_CATEGORY_STATUS,
    CHANGE_CATEGORY_STATUS_SUCCESS,
    CHANGE_CATEGORY_STATUS_FAILURE
} from '../types/category.types';

export default function getCategoryList() {
    return {
        type: GET_CATEGORY_LIST
    };
}

export default function getCategoryListSuccess() {
    return {
        type: GET_CATEGORY_LIST_SUCCESS,
        payload
    };
}

export default function getCategoryListFailure() {
    return {
        type: GET_CATEGORY_LIST_FAILURE,
        payload
    };
}

export default function getCategory() {
    return {
        type: GET_CATEGORY
    };
}

export default function getCategorySuccess() {
    return {
        type: GET_CATEGORY_SUCCESS,
        payload
    };
}

export default function getCategoryFailure() {
    return {
        type: GET_CATEGORY_FAILURE,
        payload
    };
}

export default function addCategory() {
    return {
        type: ADD_CATEGORY
    };
}

export default function addCategorySuccess() {
    return {
        type: ADD_CATEGORY_SUCCESS,
        payload
    };
}

export default function addCategoryFailure() {
    return {
        type: ADD_CATEGORY_FAILURE,
        payload
    };
}

export default function updateCategory() {
    return {
        type: UPDATE_CATEGORY
    };
}

export default function updateCategorySuccess() {
    return {
        type: UPDATE_CATEGORY_SUCCESS,
        payload
    };
}

export default function updateCategoryFailure() {
    return {
        type: UPDATE_CATEGORY_FAILURE,
        payload
    };
}


export default function deleteCategory() {
    return {
        type: DELETE_CATEGORY
    };
}

export default function deleteCategorySuccess() {
    return {
        type: DELETE_CATEGORY_SUCCESS,
        payload
    };
}

export default function deleteCategoryFailure() {
    return {
        type: DELETE_CATEGORY_FAILURE,
        payload
    };
}


export default function changeCategoryStatus() {
    return {
        type: CHANGE_CATEGORY_STATUS
    };
}

export default function changeCategoryStatusSuccess() {
    return {
        type: CHANGE_CATEGORY_STATUS_SUCCESS,
        payload
    };
}

export default function changeCategoryStatusFailure() {
    return {
        type: CHANGE_CATEGORY_STATUS_FAILURE,
        payload
    };
}