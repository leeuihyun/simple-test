import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

function FirebaseCloud() {
    const readData = () => {
        try {
            firebase
                .firestore()
                .collection("products")
                .doc("first")
                .onSnapshot(function (doc) {
                    console.log(doc.data());
                });
        } catch (error) {
            console.log(error);
        }
    };
    return <button onClick={readData}>readData</button>;
}

export default FirebaseCloud;
