let telefono_marca1 = "Samsung";
let telefono_modelo1 = "S24 Ultra";
let telefono_camara1 = "35Mp";
let telefono_precio1 = "S/6500";
let telefono_almacenamiento1 = "524Gb";

let telefono_marca2 = "Motorola";
let telefono_modelo2 = "G5";
let telefono_camara2 = "5Mp";
let telefono_precio2 = "S/7500";
let telefono_almacenamiento2 = "128Gb";

let telefono_marca3 = "Huawei";
let telefono_modelo3 = "P8";
let telefono_camara3 = "3Mp";
let telefono_precio3 = "S/500";
let telefono_almacenamiento3 = "64Gb";


console.log(telefono_marca2);



class celular {
    constructor(marca, modelo, precio, camara, almacenamiento) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.camara = camara;
        this.almacenamiento = almacenamiento;
    }
}

let celular1 = new celular ("Iphone","13 Pro Max", "S/3500", "15Mp","128Gb");
console.log(celular1);



