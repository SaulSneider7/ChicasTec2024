

function calcular() {
    let edad = document.getElementById("edad").value;
    let resultado = document.getElementById("resultado");
    if (edad == "") {
        resultado.innerHTML= "El campo esta vacio";
        return;
    }
    
    edad =parseFloat(edad);
    if (edad >= 18) {
        resultado.innerHTML= "Eres mayor de edad";
    } else {
        resultado.innerHTML = "Eres menor de edad";
    }
}