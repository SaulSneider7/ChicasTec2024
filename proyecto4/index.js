// Importar Firebase y las funciones necesarias
import './firebase.js';
import { auth, db } from './firebase.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

let nombreUsuario = document.getElementById("displayName");
let publicacionesDiv = document.getElementById("publicaciones"); // Contenedor de publicaciones
let botonPublicar = document.getElementById("publicar"); // Botón para publicar
let nuevaPublicacion = document.getElementById("nueva_publicacion"); // Área de texto para nueva publicación
let idUsuario = null; 



// Variables para el modal de edición
let modalEditar = new bootstrap.Modal(document.getElementById('editarModal')); // Modal de edición
let nuevoTexto = document.getElementById("nuevoTexto"); // Área de texto para editar la publicación
let idActualEdicion = null; // Almacenar el ID de la publicación que se está editando




// Escuchar los cambios de autenticación
onAuthStateChanged(auth, (usuario) => {
    if (usuario) {
        // Mostrar el nombre del usuario
        nombreUsuario.innerHTML = usuario.displayName || "Usuario";
        idUsuario = usuario.uid; // Almacenar el ID del usuario

        // Recuperar la foto de perfil
        const fotoPerfil = document.getElementById("fotoPerfil");
        fotoPerfil.src = usuario.photoURL || "user.jpg"; // Foto por defecto
    } else {
        window.location.href = "login.html"; 
    }
});

// Publicar nueva publicación
botonPublicar.addEventListener("click", async () => {
    if (nuevaPublicacion.value.trim() !== "") { // Verificar que el campo no esté vacío
        try {
            await addDoc(collection(db, "publicaciones"), {
                texto: nuevaPublicacion.value, // Texto de la publicación
                userId: idUsuario, // ID del usuario que publica
                userName: auth.currentUser.displayName, // Nombre del usuario que publica
                timestamp: new Date() // Fecha y hora de la publicación
            });
            nuevaPublicacion.value = "";  // Limpiar el área de texto
        } catch (error) {
            console.log("Error al publicar: ", error); // Manejar errores al publicar
        }
    } else {
        console.log("El campo de publicación está vacío."); // Mensaje si el campo está vacío
    }
});

// Cargar todas las publicaciones
async function cargarPublicaciones() {
    publicacionesDiv.innerHTML = ""; // Limpiar publicaciones previas
    const consulta = await getDocs(collection(db, "publicaciones")); // Obtener todas las publicaciones
    
    consulta.forEach((doc) => {
        const publicacion = doc.data(); // Datos de la publicación
        const publicacionDiv = document.createElement("div"); // Crear un nuevo div para la publicación
        publicacionDiv.classList.add("publicacion"); // Agregar clase a la publicación
        // Contenido de la publicación
        let contenido = `
            <p><strong>${publicacion.userName}:</strong> ${publicacion.texto}</p>
        `;
        // Mostrar botones solo si es el autor de la publicación
        if (publicacion.userId === idUsuario) {
            contenido += `
                <button onclick="abrirModal('${doc.id}', '${publicacion.texto}')">Editar</button>
                <button onclick="eliminarPublicacion('${doc.id}')">Eliminar</button>
            `;
        }
        publicacionDiv.innerHTML = contenido; // Asignar contenido al div
        publicacionesDiv.appendChild(publicacionDiv); // Agregar la publicación al contenedor
    });
}
cargarPublicaciones();

// Función para abrir el modal de edición
window.abrirModal = function (id, texto) {
    idActualEdicion = id; // Almacenar el ID de la publicación que se va a editar
    nuevoTexto.value = texto; // Colocar el texto actual en el área de texto del modal
    modalEditar.show(); // Mostrar el modal
};