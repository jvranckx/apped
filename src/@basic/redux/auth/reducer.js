import { authActionTypes } from '../actionTypes';

const initialState = {
    access_token: "",
    error: "",
    resetError: null,
};

export default function auth(state = initialState, { type, payload }) {
    switch (type) {
        case authActionTypes.SIGN_IN: return state;
        case authActionTypes.SIGN_IN_SUCCES:
            return {
                ...state,
                access_token: payload.access_token ? payload.access_token : "",
                error: ""
            };
        case authActionTypes.SIGN_IN_FAILED:
            return {
                ...state,
                access_token: "",
                error: payload,
            };
        case authActionTypes.SIGN_OUT:
            return {
                ...state,
                access_token: "",
                error: "",
            };
        case authActionTypes.RESET_SUCCES:
            return {
                ...state,
                resetError: null,
            };
        case authActionTypes.RESET_FAILED:
            return {
                ...state,
                resetError: payload,
            };

        default:
            return state;
    }
};
