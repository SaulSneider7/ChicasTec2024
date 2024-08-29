let boton1 = document.getElementById("btnOcultar");
let boton2 = document.getElementById("btnMostrar");

boton1.onclick = ocultarTexto;
boton2.onclick = mostrarTexto;

function ocultarTexto() {
  let parrafo = document.getElementById("parrafo");
  parrafo.style.display = "none";
}

function mostrarTexto() {
  let parrafo = document.getElementById("parrafo");
  parrafo.style.display = "block";
}


$("#btnOcultar2").click(function () {
  $("#parrafo").hide("slow");
})

$("#btnMostrar2").click(function () {
  $("#parrafo").show("slow");
})


