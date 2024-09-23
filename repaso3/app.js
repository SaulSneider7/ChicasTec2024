let persona = {
    "ID": 1,
    "Nombre": "Jhon",
    "Apellido": "Doe",
    "Edad": 64,
    "Tel": null,
    "SO": ["Windows 10", "Ubuntu", "Android"]
}
console.log(persona);

//POO
class Persona {
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    saludar(){
        console.log("Hola, mi nombre es " + this.nombre);
    }
}

let persona1 = new Persona ("Saul", 25, "Programador");
console.log(persona1);
persona1.saludar();