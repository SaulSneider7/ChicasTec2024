function presentacion(nombre, apellido, edad) {
    let mensaje = `Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`;
    alert(mensaje);
}






presentacion("Joel", "Perez", 20);

function suma(a, b) {
    let resultado = a + b;
    return resultado;
};

//console.log(suma(15, 6));



function prueba(a,b,c) {
    alert(a)
}

//prueba(5)


function calcularAreaTriangulo(base, altura) {
    let resultado = (base * altura) / 2;
    alert(`El area del Triangulo es: ${resultado}`);
}

function calcularAreaCuadrado(lado) {
    let resultado = lado * lado;
    alert(`El area del cuadrado es: ${resultado}`)
}

function calcularAreaRectangulo(base, altura) {
    let resultado = base * altura;
    alert(`El area del Rectangulo es: ${resultado}`)
}
