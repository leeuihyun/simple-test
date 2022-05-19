import { all, fork } from "redux-saga/effects";
import userSaga from "./user";
import booksSaga from "./books";

export default function* rootSaga() {
    yield all([fork(userSaga), fork(booksSaga)]);
}
