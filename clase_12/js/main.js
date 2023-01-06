document.title = "Clase 12 | Comisión 34125";
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2#secundario");

titulo.innerText = "Clase 12";
tituloSecundario.innerText = "Operadores avanzados";
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
const formulario = document.querySelector("form"),
  checkbox = document.getElementById("check"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  p = document.querySelector("p");

function guardarLS(valor) {
  let user = { usuario: email.value, pass: password.value };

  if (user.usuario == "" || user.pass == "") {
    p.innerText = "Todos los campos son requeridos";
    return;
  } else {
    /*  if (valor === "localStorage") {
      localStorage.setItem("item", JSON.stringify(user));
    } */
    valor === "localStorage" &&
      localStorage.setItem("item", JSON.stringify(user));

    /*  if (valor === "sessionStorage") {
      sessionStorage.setItem("item", JSON.stringify(user));
    } */
    valor === "sessionStorage" &&
      sessionStorage.setItem("item", JSON.stringify(user));
  }

  return user;
}
//Crear la funcion que traiga los datos

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  //CÓDIGO A EJECUTAR
  /*  if (checkbox.checked) {
    guardarLS("localStorage");
  } else {
    guardarLS("sessionStorage");
  } */
  checkbox.checked ? guardarLS("localStorage") : guardarLS("sessionStorage");
});

//OPerador ternario =  condicion? true : false
let temperatura = 31;

/* if (temperatura > 30) {
  alert("Día caluroso!")
} else {
  alert("Día agradable")
} */

//temperatura > 30 ?  alert("Día caluroso!") :  alert("Día agradable!")
let user = {
  nombre: "Jose",
  edad: 12,
  activo: false,
};

const user2= null;

/* let permiso;

if (user.edad >= 18) {
  permiso = true;
} else {
  permiso = false;
}


if (permiso) {
  console.log("Podes apostar");
}else{
  console.log("Volve cuando seas mayor");
} */

const permiso = user.edad >= 18 ? true : false;

//console.log(permiso);
//permiso ? console.log("Podes apostar") : console.log("Volve cuando seas mayor");

// Operador AND &&
let carrito = [1];
//console.log(carrito.length);
/* if(carrito.length === 0){
  console.log("El carrito esta vacio");
} */

//carrito.length === 0 && console.log("El carrito esta vacio");

const registroIngreso =
  user.activo && `Ingreso el dia ${new Date().toLocaleDateString()}`;

//console.log(registroIngreso);


//Operador OR operador 1 || operador 2

//console.log(user.nombre || "El usuario no existe");
//console.log(user2.nombre || "El usuario no existe");
//acceso condicional a un obj
//console.log(user2?.nombre || "El usuario no existe");

//window.location.href= ruta

//Destructuring
const persona1 = {
  nombre_persona: "Juanito",
  apellido: "Arcoiris",
  edad: 10,
  manager: { nombre: "Homero", apellido: "Simpson" },
};

//forma tradiocnal
/* console.log(persona1.nombre);
console.log(persona1.apellido); */

const {nombre_persona:nombre, apellido, edad,manager}= persona1;
//let manager = persona1.manager
/* console.log(nombre);
console.log(apellido);
console.log(manager) */

//alias
const {nombre:NOMBRE, apellido:Apellido }= manager

//id_product: 1 alias id_product:id => id

/* console.log(NOMBRE);
console.log(Apellido); */

/*const desestructurar = (obj)=>{
   const {nombre_persona:nombre, apellido}= obj
  console.log(nombre + " " + apellido);
}

desestructurar(persona1)*/

const desestructurar = ({nombre_persona:nombre, apellido})=>{
 
 console.log(nombre + " " + apellido);
}

desestructurar(persona1)

//Ejemplo de destructuring
let contenedor = document.querySelector(".contenedor");
function crearHtml(arr) {

  let html;
  arr.forEach((el) => {
    const {img, nombre, precio}= el;
    html = ` <div class="card">
  <img src="./img/${img}" alt="">
  <hr>
  <h3>${nombre.toUpperCase()}</h3>
  <p>$${precio}</p>
 
  </div>`;
    contenedor.innerHTML += html;
  });
}
crearHtml(servicios);