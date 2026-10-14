


fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data;                   // Asignar el JSON a la variable comidas
    mostrarComidas(comidas);
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });




const comidaContainer = document.getElementById('comidaContainer');


let comidas = [];


const formComidaNueva = document.getElementById("agregarComidaForm")


function mostrarComidas(lista) {
  comidaContainer.innerHTML = ""; 
  lista.forEach(comida => {
    const ingredientesTexto = Array.isArray(comida.ingredientes) ? comida.ingredientes.join(', ') : comida.ingredientes;
    
    comidaContainer.innerHTML += `
      <article class="card">
        <h2>${comida.nombre}</h2>
        <p><strong>Categoría:</strong> ${comida.categoria}</p>
        <p><strong>Provincia:</strong> ${comida.provincia}</p>
        <p><strong>Ingredientes:</strong> ${ingredientesTexto}</p>
      </article>
    `;
  });
}

mostrarComidas(comidas);




const agregarComidaForm = document.getElementById("agregarComidaForm")
agregarComidaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let arrayIngredientes = event.target.ingredientes.value.split(',').map(i => i.trim());

  let nuevaComida = {
    nombre: event.target.nombre.value,
    categoria: event.target.categoria.value,
    provincia: event.target.provincia.value,
    ingredientes: arrayIngredientes
  };

  comidas.push(nuevaComida);
  
  // SOLUCIÓN: Le pasamos 'comidas' como argumento para que redibuje todo
  mostrarComidas(comidas);
  
  // Borra los textos que quedaron escritos en el formulario
  agregarComidaForm.reset(); 
});






function aplicarFiltros() {
  const textoBuscador = buscador.value.toLowerCase();
  const catSeleccionada = filtroCategoria.value;
  const provSeleccionada = filtroProvincia.value;

  const comidasFiltradas = comidas.filter(comida => {
    // Revisa si coincide la categoría seleccionada (o si está en "Todas")
    const cumpleCategoria = catSeleccionada === "" || comida.categoria === catSeleccionada;
    
    // Revisa si coincide la provincia seleccionada (o si está en "Todas")
    const cumpleProvincia = provSeleccionada === "" || comida.provincia.toLowerCase().includes(provSeleccionada.toLowerCase());

    // Revisa si lo que escribió el usuario coincide con nombre, provincia o categoría
    const cumpleBuscador = comida.nombre.toLowerCase().includes(textoBuscador) ||
                           comida.provincia.toLowerCase().includes(textoBuscador) ||
                           comida.categoria.toLowerCase().includes(textoBuscador);

    // Solo pasa la comida que cumpla las tres condiciones a la vez
    return cumpleCategoria && cumpleProvincia && cumpleBuscador;
  });

  mostrarComidas(comidasFiltradas);
}

// Eventos que activan los filtros en tiempo real
buscador.addEventListener("input", aplicarFiltros); // <-- Este es el que te faltaba para escribir
filtroCategoria.addEventListener("change", aplicarFiltros);
filtroProvincia.addEventListener("change", aplicarFiltros);
