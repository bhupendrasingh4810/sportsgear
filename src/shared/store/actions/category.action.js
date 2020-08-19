import {
    GET_CATEGORIES_LIST,
    GET_CATEGORIES_LIST_SUCCESS,
    GET_CATEGORIES_LIST_FAILURE,
    
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

function getCategoriesList() {
    return {
        type: GET_CATEGORIES_LIST
    };
}

function getCategoriesListSuccess() {
    return {
        type: GET_CATEGORIES_LIST_SUCCESS,
        categories
    };
}

function getCategoriesListFailure() {
    return {
        type: GET_CATEGORIES_LIST_FAILURE,
        error
    };
}

function getCategory() {
    return {
        type: GET_CATEGORY
    };
}

function getCategorySuccess() {
    return {
        type: GET_CATEGORY_SUCCESS,
        category
    };
}

function getCategoryFailure() {
    return {
        type: GET_CATEGORY_FAILURE,
        error
    };
}

function addCategory() {
    return {
        type: ADD_CATEGORY
    };
}

function addCategorySuccess() {
    return {
        type: ADD_CATEGORY_SUCCESS,
        category
    };
}

function addCategoryFailure() {
    return {
        type: ADD_CATEGORY_FAILURE,
        error
    };
}

function updateCategory() {
    return {
        type: UPDATE_CATEGORY
    };
}

function updateCategorySuccess() {
    return {
        type: UPDATE_CATEGORY_SUCCESS,
        Category
    };
}

function updateCategoryFailure() {
    return {
        type: UPDATE_CATEGORY_FAILURE,
        error
    };
}


function deleteCategory() {
    return {
        type: DELETE_CATEGORY
    };
}

function deleteCategorySuccess() {
    return {
        type: DELETE_CATEGORY_SUCCESS,
        response
    };
}

function deleteCategoryFailure() {
    return {
        type: DELETE_CATEGORY_FAILURE,
        error
    };
}


function changeCategoryStatus() {
    return {
        type: CHANGE_CATEGORY_STATUS
    };
}

function changeCategoryStatusSuccess() {
    return {
        type: CHANGE_CATEGORY_STATUS_SUCCESS,
        response
    };
}

function changeCategoryStatusFailure() {
    return {
        type: CHANGE_CATEGORY_STATUS_FAILURE,
        error
    };
}