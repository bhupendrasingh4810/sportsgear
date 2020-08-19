import {
    GET_ARTICLES_LIST,
    GET_ARTICLES_LIST_SUCCESS,
    GET_ARTICLES_LIST_FAILURE,
    
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

function getArticlesList() {
    return {
        type: GET_ARTICLES_LIST
    };
}

function getArticlesListSuccess() {
    return {
        type: GET_ARTICLES_LIST_SUCCESS,
        articles
    };
}

function getArticlesListFailure() {
    return {
        type: GET_ARTICLES_LIST_FAILURE,
        error
    };
}

function getArticle() {
    return {
        type: GET_ARTICLE
    };
}

function getArticleSuccess() {
    return {
        type: GET_ARTICLE_SUCCESS,
        article
    };
}

function getArticleFailure() {
    return {
        type: GET_ARTICLE_FAILURE,
        error
    };
}

function addArticle() {
    return {
        type: ADD_ARTICLE
    };
}

function addArticleSuccess() {
    return {
        type: ADD_ARTICLE_SUCCESS,
        article
    };
}

function addArticleFailure() {
    return {
        type: ADD_ARTICLE_FAILURE,
        error
    };
}

function updateArticle() {
    return {
        type: UPDATE_ARTICLE
    };
}

function updateArticleSuccess() {
    return {
        type: UPDATE_ARTICLE_SUCCESS,
        article
    };
}

function updateArticleFailure() {
    return {
        type: UPDATE_ARTICLE_FAILURE,
        error
    };
}


function deleteArticle() {
    return {
        type: DELETE_ARTICLE
    };
}

function deleteArticleSuccess() {
    return {
        type: DELETE_ARTICLE_SUCCESS,
        response
    };
}

function deleteArticleFailure() {
    return {
        type: DELETE_ARTICLE_FAILURE,
        error
    };
}


function changeArticleStatus() {
    return {
        type: CHANGE_ARTICLE_STATUS
    };
}

function changeArticleStatusSuccess() {
    return {
        type: CHANGE_ARTICLE_STATUS_SUCCESS,
        response
    };
}

function changeArticleStatusFailure() {
    return {
        type: CHANGE_ARTICLE_STATUS_FAILURE,
        error
    };
}