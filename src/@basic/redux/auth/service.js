/* eslint-disable no-undef */
import ApiService from '../../utils/ApiService';
import qs from 'qs'

export const signIn = (payload) => ApiService.callApi({
    url: process.env.REACT_APP_URL_AUTH,
    options: {
        method: 'POST',
        baseURL: process.env.REACT_APP_URL_BASE_AUTH,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json'
        },
        validateStatus(status) {
            return [200, 400, 401].includes(status);
        },
        data: qs.stringify(
            {
                "username": payload.id,
                "password": payload.password,
                "scope": process.env.REACT_APP_AUTH_SCOPE,
                "grant_type": process.env.REACT_APP_AUTH_GRANT_TYPE,
                "client_secret": process.env.REACT_APP_AUTH_CLIENT_SECRET,
                "client_id": process.env.REACT_APP_AUTH_CLIENT_ID
            }
        ),
    },
    includeAuthorizationHeader: false,
})

export const postResetPassword = (payload) => ApiService.callApi({
    url: "send-password-reset-code",
    options: {
        data: { email: payload.email, appName: "obg_app" },
        method: 'POST',
        baseURL: "https://api-obg-uat.telbase.eu/api/account/",
        headers: {
            Accept: 'application/json',
        },
        validateStatus(status) {
            return [200].includes(status);
        },
    },
    includeAuthorizationHeader: true,
})


const auth = {
    signIn,
};


export default auth;