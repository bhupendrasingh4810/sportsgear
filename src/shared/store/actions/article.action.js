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

export default function getArticleList() {
    return {
        type: GET_ARTICLES_LIST
    };
}

export default function getArticleListSuccess() {
    return {
        type: GET_ARTICLES_LIST_SUCCESS,
        payload
    };
}

export default function getArticleListFailure() {
    return {
        type: GET_ARTICLES_LIST_FAILURE,
        payload
    };
}

export default function getArticle() {
    return {
        type: GET_ARTICLE
    };
}

export default function getArticleSuccess() {
    return {
        type: GET_ARTICLE_SUCCESS,
        payload
    };
}

export default function getArticleFailure() {
    return {
        type: GET_ARTICLE_FAILURE,
        payload
    };
}

export default function addArticle() {
    return {
        type: ADD_ARTICLE
    };
}

export default function addArticleSuccess() {
    return {
        type: ADD_ARTICLE_SUCCESS,
        payload
    };
}

export default function addArticleFailure() {
    return {
        type: ADD_ARTICLE_FAILURE,
        payload
    };
}

export default function updateArticle() {
    return {
        type: UPDATE_ARTICLE
    };
}

export default function updateArticleSuccess() {
    return {
        type: UPDATE_ARTICLE_SUCCESS,
        payload
    };
}

export default function updateArticleFailure() {
    return {
        type: UPDATE_ARTICLE_FAILURE,
        payload
    };
}


export default function deleteArticle() {
    return {
        type: DELETE_ARTICLE
    };
}

export default function deleteArticleSuccess() {
    return {
        type: DELETE_ARTICLE_SUCCESS,
        payload
    };
}

export default function deleteArticleFailure() {
    return {
        type: DELETE_ARTICLE_FAILURE,
        payload
    };
}


export default function changeArticleStatus() {
    return {
        type: CHANGE_ARTICLE_STATUS
    };
}

export default function changeArticleStatusSuccess() {
    return {
        type: CHANGE_ARTICLE_STATUS_SUCCESS,
        payload
    };
}

export default function changeArticleStatusFailure() {
    return {
        type: CHANGE_ARTICLE_STATUS_FAILURE,
        payload
    };
}