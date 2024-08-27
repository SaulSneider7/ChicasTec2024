let frutas = ["Manzana", "Mandarina", "Piña"];
frutas.pop();
console.log(frutas);

// frutas.push("Fresa");
// console.log(frutas);

function conFe() {
    //Recuperar el valor el input
    let input = document.getElementById("texto").value;
    //ejecutar el metodo push
    frutas.push(input);
    //mostrarlo en consola
    console.log(frutas);
    //Rezar para que salga bien
}

function eliminar() {
    //ejecutar el metodo pop
    //muestras por consola
}

let nombres = ["Mayori", "Lorena", "Aimy", "Karina"];
console.log(nombres);

nombres.unshift("Adriana");
console.log(nombres);

nombres.shift()
console.log(nombres);



