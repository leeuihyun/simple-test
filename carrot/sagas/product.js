import { takeLatest, fork, all, call, put, delay } from "redux-saga/effects";
import firebase from "firebase/app";
import "firebase/firestore";
import {
    ADD_PRODUCT_FAILURE,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
} from "../reducers/product";

function getProductApi() {
    return firebase.firestore().collection("products").get();
}
function* getProduct(action) {
    try {
        const res = yield call(getProductApi);
        const arr = [];
        const doc = res.forEach((v) => {
            arr.push(v.data());
        });
        yield put({
            type: GET_PRODUCT_SUCCESS,
            data: arr,
        });
        console.log("here");
        console.log(arr);
    } catch (error) {
        yield put({
            type: GET_PRODUCT_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchGetProduct() {
    yield takeLatest(GET_PRODUCT_REQUEST, getProduct);
}

function addProductApi(data) {
    return firebase.firestore().collection("products").add({
        name: data.name,
        price: data.price,
        content: data.content,
    });
}
function* addProduct(action) {
    try {
        const res = yield call(addProductApi, action.data);
        const arr = [];
        const doc = res.forEach((v) => {
            arr.push(v.data());
        });
        yield put({
            type: ADD_PRODUCT_SUCCESS,
            data: arr,
        });
    } catch (error) {
        yield put({
            type: ADD_PRODUCT_FAILURE,
            error: error.response.data,
        });
    }
}

function* watchAddProduct() {
    yield takeLatest(ADD_PRODUCT_REQUEST, addProduct);
}

export default function* productSaga() {
    yield all([fork(watchGetProduct), fork(watchAddProduct)]);
}
