import {
    GET_SUB_CATEGORIES_LIST,
    GET_SUB_CATEGORIES_LIST_SUCCESS,
    GET_SUB_CATEGORIES_LIST_FAILURE,

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

function getSubCategoriesList() {
    return {
        type: GET_SUB_CATEGORIES_LIST
    };
}

function getSubCategoriesListSuccess() {
    return {
        type: GET_SUB_CATEGORIES_LIST_SUCCESS,
        subCategories
    };
}

function getSubCategoriesListFailure() {
    return {
        type: GET_SUB_CATEGORIES_LIST_FAILURE,
        error
    };
}

function getSubCategory() {
    return {
        type: GET_SUB_CATEGORY
    };
}

function getSubCategorySuccess() {
    return {
        type: GET_SUB_CATEGORY_SUCCESS,
        subCategory
    };
}

function getSubCategoryFailure() {
    return {
        type: GET_SUB_CATEGORY_FAILURE,
        error
    };
}

function addSubCategory() {
    return {
        type: ADD_SUB_CATEGORY
    };
}

function addSubCategorySuccess() {
    return {
        type: ADD_SUB_CATEGORY_SUCCESS,
        subCategory
    };
}

function addSubCategoryFailure() {
    return {
        type: ADD_SUB_CATEGORY_FAILURE,
        error
    };
}

function updateSubCategory() {
    return {
        type: UPDATE_SUB_CATEGORY
    };
}

function updateSubCategorySuccess() {
    return {
        type: UPDATE_SUB_CATEGORY_SUCCESS,
        subCategory
    };
}

function updateSubCategoryFailure() {
    return {
        type: UPDATE_SUB_CATEGORY_FAILURE,
        error
    };
}


function deleteSubCategory() {
    return {
        type: DELETE_SUB_CATEGORY
    };
}

function deleteSubCategorySuccess() {
    return {
        type: DELETE_SUB_CATEGORY_SUCCESS,
        response
    };
}

function deleteSubCategoryFailure() {
    return {
        type: DELETE_SUB_CATEGORY_FAILURE,
        error
    };
}


function changeSubCategoryStatus() {
    return {
        type: CHANGE_SUB_CATEGORY_STATUS
    };
}

function changeSubCategoryStatusSuccess() {
    return {
        type: CHANGE_SUB_CATEGORY_STATUS_SUCCESS,
        response
    };
}

function changeSubCategoryStatusFailure() {
    return {
        type: CHANGE_SUB_CATEGORY_STATUS_FAILURE,
        error
    };
}