


fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data;                   // Asignar el JSON a la variable comidas
    mostrarComidasConForEach (comidas);
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });




const comidaContainer = document.getElementById('comidaContainer');


let comidas = [
  {
    "nombre": "Asado",
    "categoria": "Parrilla",
    "provincia": "Buenos Aires",
    "ingredientes": ["Carne vacuna", "Sal", "Chimichurri"]
  },
  {
    "nombre": "Empanadas",
    "categoria": "Horno",
    "provincia": "Tucumán",
    "ingredientes": ["Carne", "Cebolla", "Aceitunas", "Huevo"]
  },
  {
    "nombre": "Locro",
    "categoria": "Guiso",
    "provincia": "Salta",
    "ingredientes": ["Maíz", "Porotos", "Chorizo", "Panceta", "Zapallo"]
  },
  {
    "nombre": "Milanesa",
    "categoria": "Frito",
    "provincia": "Buenos Aires",
    "ingredientes": ["Carne", "Huevo", "Pan rallado", "Aceite"]
  },
  {
    "nombre": "Humita en Chala",
    "categoria": "Horno",
    "provincia": "Jujuy",
    "ingredientes": ["Maíz", "Queso", "Cebolla", "Ají molido"]
  },
  {
    "nombre": "Choripán",
    "categoria": "Parrilla",
    "provincia": "Córdoba",
    "ingredientes": ["Chorizo", "Pan", "Chimichurri"]
  },
  {
    "nombre": "Provoleta",
    "categoria": "Parrilla",
    "provincia": "Buenos Aires",
    "ingredientes": ["Queso provolone", "Orégano", "Aceite de oliva"]
  },
  {
    "nombre": "Milanesas a la napolitana",
    "categoria": "Frito",
    "provincia": "Santa Fe",
    "ingredientes": ["Carne", "Tomate", "Queso", "Jamón", "Orégano"]
  },
  {
    "nombre": "Matambre a la pizza",
    "categoria": "Parrilla",
    "provincia": "Buenos Aires",
    "ingredientes": ["Matambre", "Queso", "Tomate", "Orégano"]
  },
  {
    "nombre": "Torta Frita",
    "categoria": "Frito",
    "provincia": "Entre Ríos",
    "ingredientes": ["Harina", "Agua", "Sal", "Grasa"]
  }
]




const formComidaNueva = document.getElementById("agregarComidaForm")


function mostrarComidasConForEach() {
  comidaContainer.innerHTML = ""; // Limpia el contenedor antes de dibujar para no duplicar tarjetas
  comidas.forEach(comida => {
    comidaContainer.innerHTML += `
      <article class="card">
        <h2>${comida.nombre}</h2>
        <p>Categoría: ${comida.categoria}</p>
        <p>Provincia: ${comida.provincia}</p>
        <p>Ingredientes: ${comida.ingredientes}</p>
      </article>
    `;
  });
}


mostrarComidasConForEach()




const agregarComidaForm = document.getElementById("agregarComidaForm")
agregarComidaForm.addEventListener("submit", (event) => {


  event.preventDefault();


  alert("Comida agregada:" + event.target.nombre.value)


  let nuevaComida = {
    nombre: event.target.nombre.value,
    categoria: event.target.categoria.value,
    provincia: event.target.provincia.value,
    ingredientes : event.target.ingredientes.value
  }


  comidas.push(nuevaComida)
  mostrarComidasConForEach()

  const buscador = document.getElementById("buscador")
  const filtroCategoria = document.getElementById("filtroCategoria")
  const filtroProvincia = document.getElementById("filtroProvincia")

  function filtrar(){
    const comidasFiltradas = comidas.filter(comida => {
      return comida.categoria.includes(filtroCategoria.value)
    && comida.provincia.includes(filtroProvincia.value)
    })
    mostrarComidas(comidasFiltradas)
  }

  function buscar(){
    const texto = buscador.value.toLowerCase()

    const comidasFiltradas = comidas.filter( comida => {
      return comida.nombre.toLowerCase().includes(texto)
        ||comida.provincia.toLowerCase().includes(texto)
        ||comida.categoria.toLowerCase().includes(texto)
    })
  }

mostrarComidas(comidasFiltradas)

filtroCategoria.addEventListener("change",filtrer)
filtroProvincia.addEventListener("change",filtrer)

})




