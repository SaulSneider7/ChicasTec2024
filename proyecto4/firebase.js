// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFXRAaZEYD6WGvoF6QRCFt82gD5BBlyxQ",
    authDomain: "developer-62567.firebaseapp.com",
    projectId: "developer-62567",
    storageBucket: "developer-62567.appspot.com",
    messagingSenderId: "92506163991",
    appId: "1:92506163991:web:ebf8f910cfd3257a288552",
    measurementId: "G-34J7CJ0G8N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

console.log(app);