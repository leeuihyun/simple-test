import { takeLatest, fork, all, put, delay } from "redux-saga/effects";
import { INCREMENT_REQUEST, INCREMENT_SUCCESS } from "../reducers/counter";

function* increment(action) {
    try {
        yield delay(1000);
        yield put({
            type: INCREMENT_SUCCESS,
        });
    } catch (error) {
        console.error(error);
    }
}

function* watchIncrement() {
    yield takeLatest(INCREMENT_REQUEST, increment);
}

export default function* counterSaga() {
    yield all([fork(watchIncrement)]);
}
