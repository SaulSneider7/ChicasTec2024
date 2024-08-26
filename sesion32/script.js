// //Guardamos el contenedor padre en un variable
// let padre = document.getElementById("contenedor");
// //Creamos parrafo y boton
// let nuevoParrafo = document.createElement("p");
// let nuevoButtton = document.createElement("button");
// //Agregamos contenido al parrafo
// nuevoParrafo.innerHTML = "Soy un parrafo";
// //Agremos contenido y funcion al Button
// nuevoButtton.innerHTML = "Enviar";
// nuevoButtton.onclick = function(){
//     alert("hola mundo");
// }
// //Agreamos el parrafo y boton al contenedor padre
// padre.appendChild(nuevoParrafo);
// padre.appendChild(nuevoButtton);
// //Eliminar el primer hijo del contenedor
// padre.removeChild(nuevoParrafo);





let padre2 = document.getElementById("contenedor2");
let div = document.createElement("div");
let h2 = document.createElement("h2");
let p = document.createElement("p");
let button = document.createElement("button");

h2.innerHTML="Soy un H2 desde JS"
p.innerHTML="Hola mundo";
button.innerHTML='<i class="fa-solid fa-trash"></i> Eliminar';
button.onclick = function(){
    padre2.removeChild(div)
}
padre2.appendChild(div);
div.appendChild(h2);
div.appendChild(p);
div.appendChild(button);