import { takeLatest, put, delay, call } from "redux-saga/effects";
import axios from "axios";
import {
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
} from "../reducers/user";

function logInAPI(data) {
    return axios.post("/", data);
}
function* logIn(action) {
    try {
        const res = yield call(logInAPI, action.data);
        yield put({
            type: LOG_IN_SUCCESS,
            data: res.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: LOG_IN_FAILURE,
            error: error.response.error,
        });
    }
}

function signUpAPI(data) {
    return axios.post("/", data);
}
function* signUp(action) {
    try {
        const res = yield call(signUpAPI, action.data);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: res.data,
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
