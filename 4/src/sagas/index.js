import { all, fork } from "redux-saga/effects";
import userSaga from "./user";
import imagesSaga from "./images";

export default function* rootSaga() {
    yield all([fork(userSaga), fork(imagesSaga)]);
}
