let listaDeNumero = [5, 8, 9, 250, 20];
console.log(listaDeNumero[3]);
console.log(listaDeNumero[0]);
console.log(listaDeNumero[4]);
console.log(listaDeNumero);

console.log("Recorriendo arreglo");
let frutas = ["Manzana","Banana","Fresa","Arandanos"];
let cantidad = frutas.length;
for(let i = 0; i < cantidad ; i++){
    console.log(frutas[i]);
}
console.log("Forma dos.....");
for(let valor of frutas){
    console.log(valor);
}

let MiArreglo = [];
MiArreglo[0] = 10;
MiArreglo[1] = "Juanita";
MiArreglo[2] = "Con Fe";
MiArreglo[3] = 10.5;
console.log(MiArreglo);

console.log(".:: arreglos bidimensionales ::.");

let preguntas = [
    ["¿Cual es la capital de Peru?", "Lima"],
    ["¿Cuando es Navidad?", "25 de Diciembre"],
    ["¿Cual es el gentilicio de Milan", "Milanesa"]
]
console.log(preguntas[0][0]);
console.log(preguntas[0][1]);







