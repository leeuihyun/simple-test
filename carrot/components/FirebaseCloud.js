import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

function FirebaseCloud() {
    return <button onClick={readData}>readData</button>;
}

export default FirebaseCloud;
