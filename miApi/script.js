//Cosumiendo una API (Mi API)
function consumiendoApi() {
    $.ajax({
        type: "GET",
        url: "datos.json",
        dataType: "json",
        success: function(datos){
            console.log(datos);
            $("#nombre").append(datos.nombre);
            $("#yearOld").append(datos.edad);
        }
    })
}
//Llamamos la funcion
consumiendoApi()
