// function nuevo() {
//     let padre = document.getElementById("contenedor");
//     let nuevoParrafo = document.createElement("p");
//     let nuevoBoton = document.createElement("button");
//     nuevoParrafo.innerHTML = "Hola mundo";
//     nuevoBoton.innerHTML = "click";
//     nuevoBoton.onclick = function() {
//         padre.removeChild(nuevoParrafo)
//     }

//     padre.appendChild(nuevoParrafo);
//     nuevoParrafo.appendChild(nuevoBoton);
// }


let padre = document.getElementById("contenedor");
let nuevoParrafo = document.createElement("p");
let nuevoBoton = document.createElement("button");
nuevoParrafo.innerHTML = "Hola mundo";
nuevoBoton.innerHTML = "click";
nuevoBoton.onclick = function() {
    padre.removeChild(nuevoParrafo)
}

padre.appendChild(nuevoParrafo);
nuevoParrafo.appendChild(nuevoBoton);





// function funcionClick() {
//     Swal.fire({
//         title: "Buen trabajo!",
//         text: "Sabes dar click a un boton",
//         icon: "success"
//     });
// }

// function funcionError() {
//     alert("Mensaje de error");
// }

// function funcionPregunta() {
//     alert("Estas segura?")
// }


