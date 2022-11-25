/* eslint-disable no-undef */
import axios from 'axios';
import reduxConfig from '../redux/store';
import { selectAccessToken } from '../redux/auth/selectors';

const defaultOptions = {
    baseURL: process.env.REACT_APP_URL_BASE_API,
    headers: {
        Accept: 'application/json'
    },
    validateStatus(status) {
        return [200, 201].includes(status);
    },
    timeout: 50000
};

/**
 * Makes an API call based upon the given url and options.
 *
 * @param {string} url The url to call.
 * @param {JSON} options The options (axios).
 * @param {Boolean} includeAuthorizationHeader id True, include the AccessToken stored in the redux store.
 */
async function callApi({ url, options, includeAuthorizationHeader = true }) {
    let fetchOptions = { ...defaultOptions, ...options };
    if (includeAuthorizationHeader) {
        const accessToken = selectAccessToken(reduxConfig.store.getState());
        fetchOptions = {
            ...fetchOptions,
            headers: { ...fetchOptions.headers, Authorization: `Bearer ${accessToken}` }
        };
    }

    return axios(url, fetchOptions)
}

export default {
    callApi
};

