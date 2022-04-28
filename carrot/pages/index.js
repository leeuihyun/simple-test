import React from "react";
import AppLayout from "../components/AppLayout";
import firebase from "../firebaseConfig";

firebase();
function index() {
    return <AppLayout />;
}

export default index;
