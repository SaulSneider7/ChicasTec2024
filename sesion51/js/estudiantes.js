const cajaMain = document.querySelector(".main");
const inputEstudiante = document.querySelector("#buscar");
const btnBuscarEstudiante = document.querySelector("#buscarBtn");
const cajaModal = document.querySelector(".modal");


document.addEventListener("DOMContentLoaded", obtenerDatos);


function buscarEstudiante(EstudiantesTec) {
    const nombreEstudiante = inputEstudiante.value;
    if (nombreEstudiante == "") {
        mostrarAlerta(document.querySelector(".input-contenedor"), "Escribe un nombre", "error");
        return;
    }

    const estudianteFiltrada = EstudiantesTec.filter(estudiante => {
        const { nombre } = estudiante;
        return nombre.toLowerCase() === nombreEstudiante.toLowerCase();
    });

    if (!estudianteFiltrada.length) {
        pintarEstudianteNoEncontrada();
        return;
    }

    if (estudianteFiltrada.length) {
        pintarEstudianteEncontrada(estudianteFiltrada);
        return;
    }
}



function obtenerDatos() {
    fetch('data/estudiantes.json')
        .then(respuesta => respuesta.json())
        .then(datos => pintarEstudiantes(datos))
}



function pintarEstudiantes(datos) {

    const { Estudiantes } = datos;

    Estudiantes.forEach(estudiante => {
        const { nombre, avatar } = estudiante;

        const sectionEstudiante = document.createElement("section");
        const articuloEstudiante = document.createElement("article");

        const imagenEstudiante = document.createElement("img");
        imagenEstudiante.classList.add("avatar-img")
        imagenEstudiante.src = avatar;


        imagenEstudiante.onclick = function () {
            pintarModal(estudiante);
        }


        const divNombre = document.createElement("div");
        const nombreEstudiante = document.createElement("h4");
        nombreEstudiante.textContent = nombre;

        divNombre.appendChild(nombreEstudiante);

        articuloEstudiante.appendChild(imagenEstudiante);
        articuloEstudiante.appendChild(divNombre);

        sectionEstudiante.appendChild(articuloEstudiante);

        cajaMain.appendChild(sectionEstudiante);
    });


    btnBuscarEstudiante.onclick = function () {
        buscarEstudiante(Estudiantes);
    }
}



function pintarModal(estudiante) {
    window.scrollTo(0, 0);
    const { nombre, apellido, edad, hobbie, avatar } = estudiante;

    let textoModal = `
        <div class="sub-modal">
            <div class="modal-img">
                  <img src="${avatar}" alt="${nombre}">
            </div>
            <div class="modal-contenido">
                <p>Nombre: <span>${nombre}</span></p>
                <p>Apellido: <span>${apellido}</span></p>
                <p>Edad: <span>${edad} años</span></p>
                <p>Hobbie: <span>${hobbie}</span></p>
            </div>
        </div>  
        <button class="btnModal">X</button>
       `;

    cajaModal.innerHTML = textoModal;
    cajaModal.classList.add("mostrar-modal");

    document.querySelector(".btnModal").onclick = function () {
        cajaModal.classList.remove("mostrar-modal");
    }
}


function pintarEstudianteEncontrada(estudiantes) {

    limpiarHtml(cajaMain);

    estudiantes.forEach(estudiante => {
        const { nombre, avatar } = estudiante;

        const sectionEstudiante = document.createElement("section");
        const articuloEstudiante = document.createElement("article");

        const imagenEstudiante = document.createElement("img");
        imagenEstudiante.classList.add("avatar-img")
        imagenEstudiante.src = avatar;

        imagenEstudiante.onclick = function () {
            pintarModal(estudiante);
        }


        const divNombre = document.createElement("div");
        const nombreEstudiante = document.createElement("h4");
        nombreEstudiante.textContent = nombre;

        divNombre.appendChild(nombreEstudiante);

        articuloEstudiante.appendChild(imagenEstudiante);
        articuloEstudiante.appendChild(divNombre);

        sectionEstudiante.appendChild(articuloEstudiante);

        cajaMain.appendChild(sectionEstudiante);
    });
}

function pintarEstudianteNoEncontrada() {

    let texto = `
               <section>
                  <article>
                     <img class="avatar-img" src="https://img.freepik.com/vector-premium/icono-error-minimo-moderno-no-encontrado-vaya-pagina-no-encontrada-404-error-pagina-no-encontrada-concept_599740-716.jpg?w=2000">
                     <div>
                         <h4>Estudiante no encontrada</h4>
                     </div>
                  </article>
               </section>
        `

    cajaMain.innerHTML = texto;

    setTimeout(() => {
        cajaMain.removeChild(document.querySelector("section"));
        obtenerDatos();
    }, 3500);
}



function mostrarAlerta(elemento, mensaje, tipo) {

    const existeParrafo = document.querySelector(".existe");

    if (!existeParrafo) {
        const parrafo = document.createElement("p");
        if (tipo == "error") {
            parrafo.classList.add("error", "existe");
            parrafo.textContent = mensaje;
            elemento.appendChild(parrafo);
            setTimeout(() => {
                parrafo.remove();
            }, 3000);
            return;
        }
        if (tipo == "success") {
            parrafo.classList.add("success", "existe");
            parrafo.textContent = mensaje;
            elemento.appendChild(parrafo);
            setTimeout(() => {
                parrafo.remove();
            }, 3000);
            return;
        }
    }

}


function limpiarHtml(elemento) {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}