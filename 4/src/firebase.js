import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDmRETrLcMk7Vsx0ssrl3409YdBMmeV_CA",
    authDomain: "book-app-37cc0.firebaseapp.com",
    projectId: "book-app-37cc0",
    storageBucket: "book-app-37cc0.appspot.com",
    messagingSenderId: "53241929527",
    appId: "1:53241929527:web:377731c55789d98d1b44b2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
