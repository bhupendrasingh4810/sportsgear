import axios from "axios";
import { API } from "../shared/store/types/auth.types";
import { accessDenied, apiError, apiStart, apiEnd } from "../shared/store/actions/api.action";


const apiMiddleware = ({ dispatch }) => next => async action => {
    next(action);

    if (action.type !== API) return;

    const {
        url,
        method,
        data,
        accessToken,
        onSuccess,
        onFailure,
        label,
        headers
    } = action.payload;

    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";


    // axios default configs
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] = `Bearer${accessToken}`;


    if (label) {
        dispatch(apiStart(label));
    }

    try {
        const request = await axios.request({
            url,
            method,
            headers,
            [dataOrParams]: data
        });
        dispatch(onSuccess(request.data));
    } catch (error) {
        dispatch(apiError(error));
        dispatch(onFailure(error));
        if (error.response && error.response.status === 403) {
            dispatch(accessDenied(window.location.pathname));
        }
    } finally {
        if (label) {
            dispatch(apiEnd(label));
        }
    }
};

export default apiMiddleware;