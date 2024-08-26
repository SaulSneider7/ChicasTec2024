// function presentacion(param1, param2, param3) {
//     let mensaje = `Hola mi nombre es ${param1} ${param2} y tengo ${param3} años.`;

//     alert(mensaje);
// }

// let nombre = prompt("Escribe tu nombre");
// let apellido = prompt("Escribe tu apellido");
// let edad = prompt("Escribe tu edad");

// presentacion(nombre, apellido, edad);



// function calcularAreaTriangulo(base, altura) {
//     let resultado = (base * altura) / 2;
//     alert(`El area del Triangulo es: ${resultado}`);
// }

// let base = prompt("Ingresa la base del triangulo");
// let altura = prompt("Ingrese la altura del triangulo");

// calcularAreaTriangulo(base,altura)


//crear la funcion del area del circulo


//Crea una funcion que valide la edad, donde te muestre un mensaje si eres mayor de edad, menor de edad, que ingreses;

function verificarEdad(edad) {
    if (edad < 0) {
        alert("La edad no puede ser negativa.");
    } else if (edad < 12) {
        alert("Eres un niño.");
    } else if (edad >= 12 && edad <= 17) {
        alert("Eres un adolescente.");
    } else if (edad >= 18 && edad <= 24) {
        alert("Eres un aduuuuuulto independiente con guuuuuuuuuustos bien dementes.");
    } else if (edad >= 25 && edad <= 64) {
        alert("Eres un adulto.");
    } else {
        alert("Eres un anciano. Pipipi :c");
    }
}

let edad = prompt("Por favor, ingresa tu edad:");

// Llamada a la función
verificarEdad(edad);
