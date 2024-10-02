//importar firebase
import './firebase.js';
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

let formulario_crear = document.getElementById("formulario_crear");

formulario_crear.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("hola mundo");
    let nombre = document.getElementById("nombre").value;
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    if (nombre == "") {
        Swal.fire({
            title: "Error",
            text: "Coloca un nombre",
            icon: "error"
        });
    } else if (fecha_nacimiento == "") {
        Swal.fire({
            title: "Error",
            text: "Coloca fecha nacimiento",
            icon: "error"
        });
    } else if (email == "") {
        Swal.fire({
            title: "Error",
            text: "Coloca un correo",
            icon: "error"
        });
    } else if (password.length < 6) {
        Swal.fire({
            title: "Error",
            text: "El password debe tener minimo 6 caracteres",
            icon: "error"
        });
    } else {
        Swal.fire({
            title: "Bien",
            text: "Creado correctamente",
            icon: "success"
        }).then((result) => {
            window.location.href = "login.html"
        });

    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Cuenta Creada');
        })
        .catch((error) => {
            alert('error');
            console.log(error.message);
        })
})