//Cosumiendo una API (POKEAPI)
function consumiendoApi() {
    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/ditto",
        dataType: "json",
        success: function(datos){
            console.log(datos);
            let nombre = datos.name;
            let id = datos.id;

            //Crear el html
            let html = `
            <div>
                <p>Nombre</p>
                <p>ID</p>
            </div>
            `;
            //Insertar el HTML al contenedor
            $("#contenedor").append(html);
        }
    })
}

