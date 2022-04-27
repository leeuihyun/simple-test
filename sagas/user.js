import { takeLatest, put, call, all, fork, delay } from "redux-saga/effects";
import axios from "axios";
import {
    CREATE_USER_FAILURE,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    DELETE_USER_SUCCESS,
    READ_USER_FAILURE,
    READ_USER_REQUEST,
    READ_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
} from "../reducers/user";

function createUserApi({ data }) {
    axios.post("/create", data);
}

function* createUser(action) {
    try {
        const res = yield call(createUserApi, action.data);
        yield put({
            type: CREATE_USER_SUCCESS,
            data: res.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: CREATE_USER_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchCreateUser() {
    yield takeLatest(CREATE_USER_REQUEST, createUser);
}

function readUserApi() {
    axios.get("/read");
}

function* readUser(action) {
    try {
        const res = yield call(readUserApi, action.data);
        yield put({
            type: READ_USER_SUCCESS,
            data: res.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: READ_USER_FAILURE,
            data: error.response.data,
        });
    }
}

function* watchReadUser() {
    yield takeLatest(READ_USER_REQUEST, readUser);
}

function updateUserApi() {
    axios.get("/read");
}

function* updateUser(action) {
    try {
        const res = yield call(updateUserApi, action.data);
        yield put({
            type: UPDATE_USER_SUCCESS,
            data: res.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: UPDATE_USER_FAILURE,
            data: error.response.data,
        });
    }
}

function* watchUpdateUser() {
    yield takeLatest(UPDATE_USER_REQUEST, updateUser);
}

function deleteUserApi() {
    axios.post("/read");
}

function* deleteUser(action) {
    try {
        const res = yield call(deleteUserApi, action.data);
        yield put({
            type: DELETE_USER_SUCCESS,
            data: res.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: DELETE_USER_FAILURE,
            data: error.response.data,
        });
    }
}

function* watchDeleteUser() {
    yield takeLatest(DELETE_USER_FAILURE, deleteUser);
}

export default function* userSaga() {
    yield all([
        fork(watchCreateUser),
        fork(watchReadUser),
        fork(watchUpdateUser),
        fork(watchDeleteUser),
    ]);
}
