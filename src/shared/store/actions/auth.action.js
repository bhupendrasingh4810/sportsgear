import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    LOGOUT,

    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE
} from '../types/auth.types';

export default function login() {
    return {
        type: LOGIN
    };
}

export default function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    };
}

export default function loginFailure() {
    return {
        type: LOGIN_FAILURE
    };
}

export default function logout() {
    return {
        type: LOGOUT
    };
}

export default function getUserProfile() {
    return {
        type: GET_USER_PROFILE
    };
}

export default function getUserProfileSuccess() {
    return {
        type: GET_USER_PROFILE_SUCCESS,
        payload
    };
}

export default function getUserProfileFailure() {
    return {
        type: GET_USER_PROFILE_FAILURE,
        payload
    };
}