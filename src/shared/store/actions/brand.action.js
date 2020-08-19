import {
    GET_BRAND_LIST,
    GET_BRAND_LIST_SUCCESS,
    GET_BRAND_LIST_FAILURE,
    
    GET_BRAND,
    GET_BRAND_SUCCESS,
    GET_BRAND_FAILURE,
    
    ADD_BRAND,
    ADD_BRAND_SUCCESS,
    ADD_BRAND_FAILURE,
    
    UPDATE_BRAND,
    UPDATE_BRAND_SUCCESS,
    UPDATE_BRAND_FAILURE,
    
    DELETE_BRAND,
    DELETE_BRAND_SUCCESS,
    DELETE_BRAND_FAILURE,
    
    CHANGE_BRAND_STATUS,
    CHANGE_BRAND_STATUS_SUCCESS,
    CHANGE_BRAND_STATUS_FAILURE
} from '../types/brand.types';

export default function getBrandList() {
    return {
        type: GET_BRAND_LIST
    };
}

export default function getBrandListSuccess() {
    return {
        type: GET_BRAND_LIST_SUCCESS,
        payload
    };
}

export default function getBrandListFailure() {
    return {
        type: GET_BRAND_LIST_FAILURE,
        payload
    };
}

export default function getBrand() {
    return {
        type: GET_BRAND
    };
}

export default function getBrandSuccess() {
    return {
        type: GET_BRAND_SUCCESS,
        payload
    };
}

export default function getBrandFailure() {
    return {
        type: GET_BRAND_FAILURE,
        payload
    };
}

export default function addBrand() {
    return {
        type: ADD_BRAND
    };
}

export default function addBrandSuccess() {
    return {
        type: ADD_BRAND_SUCCESS,
        payload
    };
}

export default function addBrandFailure() {
    return {
        type: ADD_BRAND_FAILURE,
        payload
    };
}

export default function updateBrand() {
    return {
        type: UPDATE_BRAND
    };
}

export default function updateBrandSuccess() {
    return {
        type: UPDATE_BRAND_SUCCESS,
        payload
    };
}

export default function updateBrandFailure() {
    return {
        type: UPDATE_BRAND_FAILURE,
        payload
    };
}


export default function deleteBrand() {
    return {
        type: DELETE_BRAND
    };
}

export default function deleteBrandSuccess() {
    return {
        type: DELETE_BRAND_SUCCESS,
        payload
    };
}

export default function deleteBrandFailure() {
    return {
        type: DELETE_BRAND_FAILURE,
        payload
    };
}


export default function changeBrandStatus() {
    return {
        type: CHANGE_BRAND_STATUS
    };
}

export default function changeBrandStatusSuccess() {
    return {
        type: CHANGE_BRAND_STATUS_SUCCESS,
        payload
    };
}

export default function changeBrandStatusFailure() {
    return {
        type: CHANGE_BRAND_STATUS_FAILURE,
        payload
    };
}