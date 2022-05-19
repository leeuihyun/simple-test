import { takeLatest, put, delay } from "redux-saga/effects";
import {
    ADD_BOOK_FAILURE,
    ADD_BOOK_REQUEST,
    ADD_BOOK_SUCCESS,
    DELETE_BOOK_FAILURE,
    DELETE_BOOK_REQUEST,
    DELETE_BOOK_SUCCESS,
} from "../reducers/books";
import {
    ADD_BOOK_USER_SUCCESS,
    DELETE_BOOK_USER_SUCCESS,
} from "../reducers/user";

function* addBook(action) {
    try {
        yield delay(1000);
        yield put({
            type: ADD_BOOK_SUCCESS,
            data: action.data,
        });
        yield put({
            type: ADD_BOOK_USER_SUCCESS,
            data: action.data,
        });
    } catch (error) {
        yield put({
            type: ADD_BOOK_FAILURE,
            error: error.response.data,
        });
    }
}

function* deleteBook(action) {
    try {
        yield delay(1000);
        yield put({
            type: DELETE_BOOK_SUCCESS,
            data: action.data,
        });
        yield put({
            type: DELETE_BOOK_USER_SUCCESS,
            data: action.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: DELETE_BOOK_FAILURE,
            error: error.response.data,
        });
    }
}

export default function* booksSaga() {
    yield takeLatest(ADD_BOOK_REQUEST, addBook);
    yield takeLatest(DELETE_BOOK_REQUEST, deleteBook);
}
