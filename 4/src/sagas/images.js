import { takeLatest, put, delay } from "redux-saga/effects";
import {
    ADD_DATA_FAILURE,
    ADD_DATA_REQUEST,
    ADD_DATA_SUCCESS,
    DELETE_DATA_FAILURE,
    DELETE_DATA_REQUEST,
    DELETE_DATA_SUCCESS,
} from "../reducers/images";
import {
    ADD_IMAGE_USER_SUCCESS,
    DELETE_IMAGE_USER_SUCCESS,
} from "../reducers/user";

function* addData(action) {
    try {
        yield delay(1000);
        yield put({
            type: ADD_DATA_SUCCESS,
            data: action.data,
        });
        yield put({
            type: ADD_IMAGE_USER_SUCCESS,
            data: action.data,
        });
    } catch (error) {
        yield put({
            type: ADD_DATA_FAILURE,
            error: error.response.data,
        });
    }
}

function* deleteData(action) {
    try {
        yield delay(1000);
        yield put({
            type: DELETE_DATA_SUCCESS,
            data: action.data,
        });
        yield put({
            type: DELETE_IMAGE_USER_SUCCESS,
            data: action.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: DELETE_DATA_FAILURE,
            error: error.response.data,
        });
    }
}

export default function* imagesSaga() {
    yield takeLatest(ADD_DATA_REQUEST, addData);
    yield takeLatest(DELETE_DATA_REQUEST, deleteData);
}
