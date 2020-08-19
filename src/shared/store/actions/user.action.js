import {
    GET_USERS_LIST,
    GET_USERS_LIST_SUCCESS,
    GET_USERS_LIST_FAILURE,

    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    
    CHANGE_USER_STATUS,
    CHANGE_USER_STATUS_SUCCESS,
    CHANGE_USER_STATUS_FAILURE
} from '../types/user.types';

function getUsersList() {
    return {
        type: GET_USERS_LIST
    };
}

function getUsersListSuccess() {
    return {
        type: GET_USERS_LIST_SUCCESS,
        users
    };
}

function getUsersListFailure() {
    return {
        type: GET_USERS_LIST_FAILURE,
        error
    };
}

function getUser() {
    return {
        type: GET_USER
    };
}

function getUserSuccess() {
    return {
        type: GET_USER_SUCCESS,
        user
    };
}

function getUserFailure() {
    return {
        type: GET_USER_FAILURE,
        error
    };
}

function addUser() {
    return {
        type: ADD_USER
    };
}

function addUserSuccess() {
    return {
        type: ADD_USER_SUCCESS,
        user
    };
}

function addUserFailure() {
    return {
        type: ADD_USER_FAILURE,
        error
    };
}

function updateUser() {
    return {
        type: UPDATE_USER
    };
}

function updateUserSuccess() {
    return {
        type: UPDATE_USER_SUCCESS,
        user
    };
}

function updateUserFailure() {
    return {
        type: UPDATE_USER_FAILURE,
        error
    };
}


function deleteUser() {
    return {
        type: DELETE_USER
    };
}

function deleteUserSuccess() {
    return {
        type: DELETE_USER_SUCCESS,
        response
    };
}

function deleteUserFailure() {
    return {
        type: DELETE_USER_FAILURE,
        error
    };
}


function changeUserStatus() {
    return {
        type: CHANGE_USER_STATUS
    };
}

function changeUserStatusSuccess() {
    return {
        type: CHANGE_USER_STATUS_SUCCESS,
        response
    };
}

function changeUserStatusFailure() {
    return {
        type: CHANGE_USER_STATUS_FAILURE,
        error
    };
}