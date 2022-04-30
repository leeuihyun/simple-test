import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppLayout from "../components/AppLayout";
import firebase from "../firebaseConfig";

import { GET_PRODUCT_REQUEST } from "../reducers/product";

firebase();
function index() {
    const { product } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: GET_PRODUCT_REQUEST,
        });
    }, []);
    return (
        <div>
            <AppLayout>{product}</AppLayout>
        </div>
    );
}

export default index;
