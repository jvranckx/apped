
import { authActionTypes } from '../actionTypes';

export const signIn = (id, password) => ({
    type: authActionTypes.SIGN_IN,
    payload: {
        id,
        password
    }
})

export const signInSucces = (response) => ({
    type: authActionTypes.SIGN_IN_SUCCES,
    payload: response.data
});

export const signInFailed = (error) => ({
    type: authActionTypes.SIGN_IN_FAILED,
    payload: error
});

export const signOut = () => ({
    type: authActionTypes.SIGN_OUT,
});

export const reset = (data) => ({
    type: authActionTypes.RESET,
    payload: data
});

export const resetSucces = () => ({
    type: authActionTypes.RESET_SUCCES,
    payload: null
});

export const resetFailed = (error) => ({
    type: authActionTypes.RESET_FAILED,
    payload: error
});



