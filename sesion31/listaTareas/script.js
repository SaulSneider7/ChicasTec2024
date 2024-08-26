function agregarTarea() {
    const tareaInput = document.getElementById("nuevaTarea");
    const tareaTexto = tareaInput.value.trim();

    if (tareaTexto !== "") {
        const lista = document.getElementById("listaDeTareas");
        const nuevaTarea = document.createElement("li");

        const tareaSpan = document.createElement("span");
        tareaSpan.textContent = tareaTexto;

        const botonEliminar = document.createElement("button");
        botonEliminar.innerHTML = '<i class="fa-solid fa-trash"></i>';
        botonEliminar.onclick = function() {
            lista.removeChild(nuevaTarea);
        };

        nuevaTarea.appendChild(tareaSpan);
        nuevaTarea.appendChild(botonEliminar);
        lista.appendChild(nuevaTarea);

        tareaInput.value = "";
    }else{
        alert("Esta vacio")
    }
}