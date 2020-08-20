import {
    GET_ARTICLE_LIST,
    GET_ARTICLE_LIST_SUCCESS,
    GET_ARTICLE_LIST_FAILURE,

    GET_ARTICLE,
    GET_ARTICLE_SUCCESS,
    GET_ARTICLE_FAILURE,

    ADD_ARTICLE,
    ADD_ARTICLE_SUCCESS,
    ADD_ARTICLE_FAILURE,

    UPDATE_ARTICLE,
    UPDATE_ARTICLE_SUCCESS,
    UPDATE_ARTICLE_FAILURE,

    DELETE_ARTICLE,
    DELETE_ARTICLE_SUCCESS,
    DELETE_ARTICLE_FAILURE,

    CHANGE_ARTICLE_STATUS,
    CHANGE_ARTICLE_STATUS_SUCCESS,
    CHANGE_ARTICLE_STATUS_FAILURE
} from '../types/article.types';
import { ARTICLE_API } from '../../constants/api-constant';
import { apiAction } from './api.action';

export const getArticleList = () => {
    return apiAction({
        url: ARTICLE_API,
        method: 'GET',
        data: null,
        onSuccess: getArticleListSuccess,
        onFailure: getArticleListFailure,
        label: GET_ARTICLE_LIST
    });
}

export const getArticleListSuccess = payload => {
    return {
        type: GET_ARTICLE_LIST_SUCCESS,
        payload
    };
}

export const getArticleListFailure = payload => {
    return {
        type: GET_ARTICLE_LIST_FAILURE,
        payload
    };
}

export const getArticle = payload => {
    return apiAction({
        url: `${ARTICLE_API}/${payload}`,
        method: 'GET',
        data: null,
        onSuccess: getArticleSuccess,
        onFailure: getArticleFailure,
        label: GET_ARTICLE
    });
}

export const getArticleSuccess = payload => {
    return {
        type: GET_ARTICLE_SUCCESS,
        payload
    };
}

export const getArticleFailure = payload => {
    return {
        type: GET_ARTICLE_FAILURE,
        payload
    };
}

export const addArticle = payload => {
    return apiAction({
        url: ARTICLE_API,
        method: 'POST',
        data: payload,
        onSuccess: addArticleSuccess,
        onFailure: addArticleFailure,
        label: ADD_ARTICLE
    });
}

export const addArticleSuccess = payload => {
    return {
        type: ADD_ARTICLE_SUCCESS,
        payload
    };
}

export const addArticleFailure = payload => {
    return {
        type: ADD_ARTICLE_FAILURE,
        payload
    };
}

export const updateArticle = ({ id, body }) => {
    return apiAction({
        url: `${ARTICLE_API}/${id}`,
        method: 'PUT',
        data: body,
        onSuccess: updateArticleSuccess,
        onFailure: updateArticleFailure,
        label: UPDATE_ARTICLE
    });
}

export const updateArticleSuccess = payload => {
    return {
        type: UPDATE_ARTICLE_SUCCESS,
        payload
    };
}

export const updateArticleFailure = payload => {
    return {
        type: UPDATE_ARTICLE_FAILURE,
        payload
    };
}


export const deleteArticle = payload => {
    return apiAction({
        url: `${ARTICLE_API}/${payload}`,
        method: 'DELETE',
        data: null,
        onSuccess: deleteArticleSuccess,
        onFailure: deleteArticleFailure,
        label: DELETE_ARTICLE
    });
}

export const deleteArticleSuccess = payload => {
    return {
        type: DELETE_ARTICLE_SUCCESS,
        payload
    };
}

export const deleteArticleFailure = payload => {
    return {
        type: DELETE_ARTICLE_FAILURE,
        payload
    };
}


export const changeArticleStatus = ({ id, body }) => {
    return apiAction({
        url: `${ARTICLE_API}/${id}`,
        method: 'PATCH',
        data: body,
        onSuccess: changeArticleStatusSuccess,
        onFailure: changeArticleStatusFailure,
        label: CHANGE_ARTICLE_STATUS
    });
}

export const changeArticleStatusSuccess = payload => {
    return {
        type: CHANGE_ARTICLE_STATUS_SUCCESS,
        payload
    };
}

export const changeArticleStatusFailure = payload => {
    return {
        type: CHANGE_ARTICLE_STATUS_FAILURE,
        payload
    };
}