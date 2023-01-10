document.title = "Clase 13 | Comisión 34125";
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2#secundario");

titulo.innerText = "Clase 13";
tituloSecundario.innerText = "Librerías";
const btnSwal = document.getElementById("botonSwal"),
  btnToast = document.getElementById("botonToast"),
  horaActual = document.querySelector("#horaActual");

const creditCard = document.querySelector("#credit-card"),
  icons = document.querySelectorAll(".fa-brands");
  
  const persona1 = {
    nombre_persona: "Juanito",
    apellido: "Arcoiris",
    edad: 10,
    manager: { nombre: "Homero", apellido: "Simpson" },
  };
  //console.log(persona1.nombre_persona);
  const {nombre_persona:nombre, apellido, edad,manager}= persona1;
/* 
  console.log(apellido);
  console.log(nombre); */

/* const numeros= [1,4,2,7,8,99,-12]

const [,w,z,r,a,,b,c]=numeros;

console.log(a);
console.log(b);
console.log(c);
console.log(z);
console.log(numeros[2]);
console.log(r); */

//spread ... desparramar
const numeros= [1,4,2,7,8,99,-12,132]
const nombres=["Mariana", "Diego", "Julian","Maria" ]
/* console.log(numeros);

console.log(nombres);
console.log(...nombres); */
/* console.log(...numeros); */

/* console.log(Math.max(...numeros));
console.log(Math.min(...numeros)); */

const perros=["Firulais", "Copito", "Pototo"];
const gatos=["Olivia", "Lila", "Michi"];
const mascotas= [...perros, ...gatos]
/* console.log(mascotas) */
/* const mascotas = perros.concat(gatos);
console.log(mascotas); */

//trabajar con objetos ...
const persona2 = {
  nombre_persona: "Juanito",
  apellido: "Arcoiris",
  edad: 10,
  manager: { nombre: "Homero", apellido: "Simpson" },
};

const copiaPersona2={
  ...persona2,
  edad:12,
  cancion_favorita:"Soy mejor que tu"
}
/* console.log(persona2.edad);
console.log(copiaPersona2);
console.log(copiaPersona2.edad);
console.log(copiaPersona2.cancion_favorita); */

//...rest
//funcion que calcula el total
function total(...params){
  //console.log(params);
  return params.reduce((acc, el)=>{
       return acc + el 
  },0)
}
/* 
console.log(total(5,4));
console.log(total(23,4,5,8));
console.log(total(23,4,5,8,409, 34,1)); */

btnSwal.addEventListener('click', ()=>{
 /*  Swal.fire(
    'Hiciste click en el boton',
    'Bien ahi',
    'success'
  ) */
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'error',
    title: 'hubo un problema'
  })
})
let nombre1="Juan"
btnToast.addEventListener('click', ()=>{
  Toastify({
    text: `Hola ${nombre1}`,
    duration: 3000,
   close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){
      console.log("Funcion ejecutada");
    } // Callback after click
  }).showToast();
})

const DateTime = luxon.DateTime;

/* console.log(DateTime.now()); */

let ahora=DateTime.now();

console.log(ahora.toString());
console.log(ahora.toLocaleString(DateTime.DATETIME_FULL));
console.log(ahora.setLocale('es').toLocaleString(DateTime.DATETIME_FULL));

horaActual.innerText = ahora.toLocaleString(DateTime.TIME_24_WITH_SECONDS);

const btnCalcular = document.getElementById("calcular");
let dates = document.querySelectorAll('input[type="date"]');
let inicio = DateTime.now().toFormat("yyyy-MM-dd");
let fin = DateTime.now().plus({ months: 4,days:5 }).toFormat("yyyy-MM-dd");

dates.forEach((el) => {
  el.setAttribute("min", inicio);
  el.setAttribute("max", fin);
});
function calcularEstadia(checkIn, checkOut) {
  let total = checkOut.diff(checkIn);
  return total.as("days");
}

function calcularPrecioTotal(estadia, precio) {
  return estadia * precio;
}
btnCalcular.addEventListener("click", () => {
  let checkIn = DateTime.fromISO(document.getElementById("checkIn").value);
  let checkOut = DateTime.fromISO(document.getElementById("checkOut").value);

  let estadia = calcularEstadia(checkIn, checkOut);
  let precioTotal = calcularPrecioTotal(estadia, 2000);
  Swal.fire({
    title: "Resultado",
    text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal}`,
    icon: "info",
    iconColor: "#00ff00",
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
    position: "top-center",
    backdrop: "#445566aa",
  });
});
