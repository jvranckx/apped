import { call, put, takeLeading } from 'redux-saga/effects';
import {
    authActionTypes,
} from '../actionTypes';
import {
    postResetPassword,
    signIn
} from './service';
import {
    startAction,
    stopAction,
} from '../ui/actions';
import { resetFailed, resetSucces, signInFailed, signInSucces } from './actions';
export function* signInSaga({ type, payload }) {
    try {

        //Default check for refresh + add to UI loading state
        yield put(startAction(type))

        //signing in
        let response = yield call(signIn, payload);

        if (response.status == 400) {
            yield put(signInFailed(response.data));
        } else {
            yield put(signInSucces(response));
        }

    } catch (error) {
        yield put(signInFailed(error.message));
        console.log('error authenticating', error.message);
    } finally {
        //Stop UI Loading state
        yield put(stopAction(type))
    }
}

export function* watchSignInSaga() {
    yield takeLeading(authActionTypes.SIGN_IN, signInSaga);
}

export function* resetPasswordSaga({ type, payload }) {
    try {

        //Default check for refresh + add to UI loading state
        yield put(startAction(type))

        yield call(postResetPassword, payload);
        yield put(resetSucces());


    } catch (error) {
        yield put(resetFailed(error.message));
        console.log('error resetting password', error.message);
    } finally {
        //Stop UI Loading state
        yield put(stopAction(type))
    }
}

export function* watchResetPasswordSaga() {
    yield takeLeading(authActionTypes.RESET, resetPasswordSaga);
}
