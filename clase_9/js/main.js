document.title = "Clase 9 | Comisión 34125";
//querySelector
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2#secundario");

titulo.innerText = "Clase 9";
tituloSecundario.innerText = "Eventos";
//Array Servicios
const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];
const paises = [
  "Argentina",
  "Colombia",
  "Brasil",
  "México",
  "Uruguay",
  "Venezuela",
  "Perú",
  "Chile",
  "Polonia",
  "Francia",
  "Australia"
];
//funciones de busqueda
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}


//EVENTOS
//llamo a todos los elementos input de tipo [text]  
const input= document.querySelectorAll('input[type="text"]'),
btnSearch = document.querySelector('#btnSearch')

function hacerClick(){
  console.log("hiciste Click en el boton");
}
//EventListener
/* btnSearch.addEventListener('click',hacerClick); */

//evento prefijo on[nombre del evento]
/* btnSearch.onclick = ()=>{
  console.log("hiciste Click en el boton");
} */

/* input[0].addEventListener('click', ()=>{
console.log('Hiciste click');
}) */

/* btnSearch.addEventListener('click', ()=>{
  console.log(input[0].value);
  tituloSecundario.innerHTML= `Hola, ${input[0].value}`;
}) */

//Eventos del mouse 
const caja= document.querySelector('.caja'),
pais= document.querySelector('#pais'),
info= document.getElementById('info')

caja.addEventListener('mouseleave', ()=>{
  caja.style.backgroundImage= 'url("./img/australia.jpg")'
  pais.innerHTML="<h2>Australia</h2>"

})
caja.addEventListener('mouseover', ()=>{
  caja.style.backgroundImage= 'url("./img/estados.jpg")'
  pais.innerHTML="<h2>Estados</h2>"
})

//selecciono inputs por separado
const nombre= input[1]
const edad= input[2]
/* 
console.log(nombre);
console.log(edad);
 */
//Eventos del teclado

nombre.addEventListener('keyup', ()=>{
  console.log("soltaste la tecla")
})
edad.addEventListener('keyup', ()=>{
 info.innerText = edad.value;
})


//Evento change
//llamo al select
const select = document.querySelector('select[name="paises"]');

paises.forEach((pais)=>{
  let option = document.createElement('option');
  option.innerText = pais;
  option.value = pais;
  select.appendChild(option)
})

//Change
select.addEventListener('change',()=>{
  let option = select.options[select.selectedIndex].value;
  console.log(option);
  info.innerHTML =`<h2>${option}</h2>`;
  nombre.value = option
})

btnSearch.addEventListener('click', ()=>{
const encontrado =   buscarServicio(servicios, input[0].value.toLowerCase())

console.log(encontrado);

//llamo a la funcion para manipular el DOM 
crearHtml(encontrado)

})

//function Crear HTML (se puede optimizar siempre y adpatarlo a lo que gusten)
function crearHtml(el){
  //llamo a un elemento contenedor 
  const contenedor= document.querySelector('#contenedor')
  //creo una variable con un estuctura html
  let html= `<div class="card">
                <img src=" ./img/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
                  <div class="card-action">
                    <button id="">Comprar</button>
                  </div>
              </div>`;
//se la agrego al contenedor
contenedor.innerHTML = html;
}

/* Pregunta... 
Que sucede si el elemento es undefined? */
