document.title = "Clase 10 | Comisión 34125";
//querySelector
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2#secundario");

titulo.innerText = "Clase 10";
tituloSecundario.innerText = "LocalStorage";
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
  "Australia",
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
function crearHtml(el) {
  //llamo a un elemento contenedor
  const contenedor = document.querySelector("#contenedor");
  //creo una variable con un estructura html
  let html = `<div class="card">
                <img src=" ./img/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
                  <div class="card-action">
                    <button id="${el.id}">Comprar</button>
                  </div>
              </div>`;
  //se la agrego al contenedor
  contenedor.innerHTML = html;
}

//EVENTOS
//llamo a todos los elementos input de tipo [text]
const input = document.querySelectorAll('input[type="text"]'),
  btnSearch = document.querySelector("#btnSearch");

btnSearch.addEventListener("click", () => {
  const encontrado = buscarServicio(servicios, input[0].value.toLowerCase());
  //llamo a la funcion para manipular el DOM
  crearHtml(encontrado);
});

/* const formulario = document.querySelector('form')
function validar(param){
//logica del a validacion
}
formulario.addEventListener('submit',(e)=>{
  e.preventDefault()
console.log(e.target);
console.log(e.target.children);

let mail=e.target.children[0].children[1].value
validar(mail)
console.log(e.target.children[0].children[1].value);
}) */
//local
localStorage.setItem("bienvenida", "Hola como estas? Bienvenido");
localStorage.setItem("esValido", true);
localStorage.setItem("number", 154);
localStorage.setItem("darkMode", true);

let saludo = localStorage.getItem("bienvenida");
console.log(saludo);

let darkMode = localStorage.getItem("darkMode");
console.log(darkMode);

//session
sessionStorage.setItem("usuario", "Dani");
sessionStorage.setItem("seleccionados", [1, 2, 3, 4, 5]);

let seleccionados = sessionStorage.getItem("seleccionados").split(",");

console.log(seleccionados);

//REMOVER LOS ITEMS
localStorage.removeItem("number");
//Remover todos
/* localStorage.clear()
sessionStorage.clear() */

//llamo los elemtos correspondientes
const btnSubmit = document.querySelector("#ingresar"),
  email = document.querySelector("#email"),
  pass = document.querySelector("#pass"),
  check = document.querySelector("#check"), 
  p = document.querySelector('#mensaje');

  //JSON
/* let enJson= JSON.stringify({nombre: "Dani", edad: 40})
localStorage.setItem("obj", enJson)

let desdeLS = JSON.parse(localStorage.getItem('obj'))

console.log(desdeLS); */

function guardar(valor) {
  let user = { usuario: email.value, pass: pass.value };
  if (user.usuario == "" || user.pass == "") {
    p.innerText = "Los campos no deben estar vacios";
    return;
    console.log("Hola");
  } else {
    if (valor === "sessionStorage") {
      sessionStorage.setItem("item", JSON.stringify(user));
    }
    if (valor === "localStorage") {
      localStorage.setItem("item", JSON.stringify(user));
    }
  }
  return user;
}

//recuperar los Datos desde el LS
function recuperarDatos(datos) {
  if (datos) {
    email.value = datos.usuario;
    pass.value = datos.pass;
  }
}

recuperarDatos(JSON.parse(localStorage.getItem("item")));

btnSubmit.addEventListener('click',(e)=>{
  e.preventDefault();
  if(check.checked){
      guardar("localStorage")
  }else{
    guardar("sessionStorage")
  }

})