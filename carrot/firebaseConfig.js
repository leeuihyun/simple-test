import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/performance";

var firebaseConfig = {
    apiKey: "AIzaSyAwu46TrwO2-1Q5AsxrujLy0ECI7Kb0ya0",
    authDomain: "carrot-acfff.firebaseapp.com",
    projectId: "carrot-acfff",
    storageBucket: "carrot-acfff.appspot.com",
    messagingSenderId: "66149758037",
    appId: "1:66149758037:web:68856c240cd1498a4f50dc",
};

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        if (typeof window !== "undefined") {
            if ("measurementId" in firebaseConfig) {
                firebase.analytics();
            }
        }
    }
    console.log("init firebase");
}
