import { all, fork } from "redux-saga/effects";
import productSaga from "./product";

export default function* rootSaga() {
    yield all([fork(productSaga)]);
}
