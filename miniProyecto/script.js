function generarURL() {
    //Generamos un numero aleatorio
    let id = Math.round(Math.random() * 500);
    return `https://picsum.photos/id/${id}/info`;
}

function renderizarImagenes(datos) {
    let div = $("<div></div>");
    div.addClass("pic card");
    
    let img = $("<img></img>");
    img.attr("src", datos.download_url);
    img.addClass("card-img");
    div.append(img);

    let autor = $("<h3></h3>");
    autor.addClass("card-title");
    autor.append(datos.author);
    div.append(autor);

    $("#pictures-container").append(div);
}

// Consumir la API
function obtenerImagen() {
    $.ajax({
        type: 'GET',
        url: generarURL(),
        dataType: "json",
        async: true,
        success: function (datos) {
            renderizarImagenes(datos);
        },
        error: function(datos) {
            console.log(datos);
        }
    });
}

$(document).ready(function() {
    for (let i = 0; i < 9; i++){
        obtenerImagen();
    }
})