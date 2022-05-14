import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCyFLCOR4R4Kf8tKNRL7DyMCjZ23Fp8f48",
    authDomain: "library-sys-63e15.firebaseapp.com",
    projectId: "library-sys-63e15",
    storageBucket: "library-sys-63e15.appspot.com",
    messagingSenderId: "850464059990",
    appId: "1:850464059990:web:68497a75b750c743cd41f7",
    measurementId: "G-HN00NZWL9F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
