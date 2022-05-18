import { takeLatest, put, delay, call } from "redux-saga/effects";
import {
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
} from "../reducers/user";

function* logIn(action) {
    try {
        //const res = yield call(logInAPI, action.data);
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: LOG_IN_FAILURE,
            error: error.response.error,
        });
    }
}

function* signUp(action) {
    try {
        //const res = yield call(signUpAPI, action.data);
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: action.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: SIGN_UP_FAILURE,
            error: error.response.error,
        });
    }
}

export default function* userSaga() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}
