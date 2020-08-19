import {
    GET_USER_LIST,
    GET_USER_LIST_SUCCESS,
    GET_USER_LIST_FAILURE,

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

export default function getUserList() {
    return {
        type: GET_USER_LIST
    };
}

export default function getUserListSuccess() {
    return {
        type: GET_USER_LIST_SUCCESS,
        payload
    };
}

export default function getUserListFailure() {
    return {
        type: GET_USER_LIST_FAILURE,
        payload
    };
}

export default function getUser() {
    return {
        type: GET_USER
    };
}

export default function getUserSuccess() {
    return {
        type: GET_USER_SUCCESS,
        payload
    };
}

export default function getUserFailure() {
    return {
        type: GET_USER_FAILURE,
        payload
    };
}

export default function addUser() {
    return {
        type: ADD_USER
    };
}

export default function addUserSuccess() {
    return {
        type: ADD_USER_SUCCESS,
        payload
    };
}

export default function addUserFailure() {
    return {
        type: ADD_USER_FAILURE,
        payload
    };
}

export default function updateUser() {
    return {
        type: UPDATE_USER
    };
}

export default function updateUserSuccess() {
    return {
        type: UPDATE_USER_SUCCESS,
        payload
    };
}

export default function updateUserFailure() {
    return {
        type: UPDATE_USER_FAILURE,
        payload
    };
}


export default function deleteUser() {
    return {
        type: DELETE_USER
    };
}

export default function deleteUserSuccess() {
    return {
        type: DELETE_USER_SUCCESS,
        payload
    };
}

export default function deleteUserFailure() {
    return {
        type: DELETE_USER_FAILURE,
        payload
    };
}


export default function changeUserStatus() {
    return {
        type: CHANGE_USER_STATUS
    };
}

export default function changeUserStatusSuccess() {
    return {
        type: CHANGE_USER_STATUS_SUCCESS,
        payload
    };
}

export default function changeUserStatusFailure() {
    return {
        type: CHANGE_USER_STATUS_FAILURE,
        payload
    };
}