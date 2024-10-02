//importar firebase
import './firebase.js';
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

let formulario_login = document.getElementById("formulario_login");
formulario_login.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email_login").value;
    let password = document.getElementById("password_login").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Hola mundo');
        })
        .catch((error) => {
            alert('error');
            console.log(error.message);
        })
})