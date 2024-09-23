const btnEstudiantes = document.querySelector(".estudiantes");


btnEstudiantes.onclick = function(){
     window.location.href = "estudiantes.html";
}


obtenerDatos();



function obtenerDatos(){
    fetch('data/estudiantes.json')
    .then(respuesta=>respuesta.json())
    .then(datos => pintarDatos(datos));
}


function pintarDatos(datos){
     const {Curso,Programa,Grupo,profesores} = datos; //DESESTRUCTURACION DE OBJETOS
     
     const divInformacion = document.createElement("div"); //CREO UN DIV DESDE JS
     divInformacion.classList.add("informacion");

     let infoData = `
             <p>Curso: <span>${Curso}</span></p>
             <p>Programa: <span>${Programa}</span></p>
             <p>Grupo: <span>${Grupo}</span></p>
     `;

     divInformacion.innerHTML = infoData;

     const divProfesores = document.createElement("div");
     divProfesores.classList.add("caja-flex");
 

     profesores.forEach((profesor)=>{
         const {nombre,apellido,edad,hobbie,avatar} = profesor;
         
         const divProfesor = document.createElement("div"); 
         divProfesor.classList.add("caja-profesor");

         const avatarImg = document.createElement("img");
         avatarImg.src = avatar;
         avatarImg.alt = nombre;

         const divDataProfesor = document.createElement("div");
         divDataProfesor.classList.add("data-profesor");
         
         const parrafoNombre = document.createElement("p");
         parrafoNombre.textContent  = `Nombre: ${nombre}`;  

         const parrafoApellido = document.createElement("p");
         parrafoApellido.textContent  = `Apellido: ${apellido}`;  
         
         const parrafoEdad = document.createElement("p");
         parrafoEdad.textContent  = `Edad: ${edad} años`;  

         const parrafoHobbie = document.createElement("p");
         parrafoHobbie.textContent  = `Hobbie: ${hobbie}`;  
          
        
         divDataProfesor.appendChild(parrafoNombre);
         divDataProfesor.appendChild(parrafoApellido);
         divDataProfesor.appendChild(parrafoEdad);
         divDataProfesor.appendChild(parrafoHobbie);
         
         divProfesor.appendChild(avatarImg);
         divProfesor.appendChild(divDataProfesor);

         divProfesores.appendChild(divProfesor);
     });
     
     const encabezado = document.createElement("h3");
     encabezado.textContent = "Profesores";

     document.querySelector("#dataPrincipal").appendChild(divInformacion);
     document.querySelector("#dataPrincipal").appendChild(encabezado);
     document.querySelector("#dataPrincipal").appendChild(divProfesores);

}
