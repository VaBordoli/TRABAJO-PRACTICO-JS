/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS  
    comidas = data;     
    mostrarComidasConForEach()              // Asignar el JSON a la variable comidas
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

let comidas = [];

const container = document.getElementById('comidaContainer');

function mostrarComidas(){
  comidas.forEach(comida => {
    container.innerHTML += `
      <article>
        <h1>${comida.nombre}</h1>
        <p>${comida.provincia}</p>
        <span class="categoria">${comida.categoria}</span>
         <ul>
         ${comida.ingredientes.map(ingrediente => `<li> ${ingrediente}</li> `}
         </ul>
      </article>
    `
    });

  const agregarComidaForm = document.getElementById("agregarComidaForm")

  agregarComidaForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let nuevaComida ={


    }
  } )

  

comidas.push(nuevaComida)


}
