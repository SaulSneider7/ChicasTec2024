//importar firebase
import './firebase.js';
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

let formulario_login = document.getElementById("formulario_login");

formulario_login.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email_login").value;
    let password = document.getElementById("password_login").value;

    // INICIAR SESION CON CORREO Y PASSWORD

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Correcto');
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert('error');
            console.log(error.message);
        })


})
// INICIAR SESION CON GOOGLE 

let google = document.getElementById("google");
google.addEventListener("click", function () {
    console.log("hola mundo");
    
    const provier = new GoogleAuthProvider();
    
    signInWithPopup(auth, provier)
        .then((result) => {
            alert("inicio con google")
        })
        .catch((error) => {
            alert("Error")
            console.log(error);
        })
})