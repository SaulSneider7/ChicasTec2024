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
                <img src="${datos.sprites.front_default}"></img>
                <p>Nombre: ${nombre}</p>
                <p>ID: ${id}</p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            `;
            //Insertar el HTML al contenedor
            $("#contenedor").append(html);
        }
    })
}

