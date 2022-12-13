/* const numeros = [1, 2, 3, 4, 5, 6, 3, 1, 7]; */
const productos = [
  { id: 1, nombre: "Arroz", precio: 124 },
  { id: 2, nombre: "Papa", precio: 90 },
  { id: 3, nombre: "Tomate", precio: 204 },
  { id: 4, nombre: "Morrón", precio: 870 },
  { id: 5, nombre: "Pan", precio: 240 },
  { id: 6, nombre: "Fideos", precio: 124 },
  { id: 7, nombre: "Fideos", precio: 124 },
  { id: 8, nombre: "Arroz", precio: 500 },
];
const aleatorio = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "$",
  "+",
  "-",
  "@",
  "!",
  "/",
  "*",
  "%",
];

/* let total = 0;
for (let i = 1; i <= 10; i++) {
  total = total + i;
}
console.log(total); */


function sumarRango(inicio, fin) {
  let total = 0;
  for (let i = inicio; i <= fin; i++) {
    total = total + i;
  }
  return total;
}
//console.log(sumarRango(1,9));
/* alert("Hola"); */


function mayorQue(n) {
  return (m) => m > n;
}

let mayorQueDiez= mayorQue(10)
/* 
console.log(mayorQueDiez);
console.log(mayorQueDiez(12));
console.log(mayorQueDiez(-1)); */

function asignarOperacion(op){
  switch (op) {
    case "+":
      return (a,b)=> a + b; 
     
    case "-":
      return (a,b)=> a - b; 
      
  
    default:
      return ()=> "El operador no es valido"
      
  }
}
/* let sumar= asignarOperacion("+")
let restar= asignarOperacion("6")
let noval= asignarOperacion("0")
 console.log(sumar(1,4));
 console.log(restar(1,4));
 console.log(noval(1,4)); */

 const numeros = [1, 12, 3, -4, 5, 0, 3, 16, 7];

function porCadaUno(arr, fn){
  for (const elemento of arr) {
    fn(elemento)
  }
}


//porCadaUno(numeros,alert)
const duplicado=[];
porCadaUno(numeros, (elemento)=>{
duplicado.push(elemento * 2);
})

//console.log(duplicado);

//metodos nativos foreach
/* numeros.forEach((el)=>{
console.log(el);
}) */

/* productos.forEach((producto)=>{
console.log(producto);
}) */

//find
const producto =productos.find((el)=>{
  return el.nombre.includes("an")
})
//console.log(producto);

//filter
let filtrado = productos.filter(el=>{
  return el.precio < 180
})

//console.log(filtrado)

//some
const existe=productos.some(el=>{
  return el.nombre == "papa"
})

//console.log(existe);

//map
const nuevoArray=productos.map(el=>{
  return el.nombre
})

//console.log(nuevoArray);

const precioActualizado = productos.map(el=>{
  return {
    id: el.id, 
    nombre:el.nombre,
    precio: el.precio*1.25
  }
})

//console.log(precioActualizado);

//reduce 



let capital = productos.reduce((acc,el)=>{
      return acc + el.precio;
},0);
console.log(capital);
let capitalActualizado = precioActualizado.reduce((acc,el)=>{
  return acc + el.precio;
},0);;
console.log(capitalActualizado);

//sort modifica el array original
numeros.sort((a,b)=> a - b )
numeros.sort((a,b)=> b - a )
console.log(numeros);

//MATH 

console.log(Math);
console.log(Math.E);
console.log(Math.PI);
console.log(Math.max(-1,3,2,4,89,0,5));
console.log(Math.min(-1,3,2,-103,4,89,0,5));

const PI = Math.PI;

//Ceil
console.log(Math.ceil(PI));
//Floor

console.log(Math.floor(PI));
//round
console.log(Math.round(3.4));
//SQRT
console.log(Math.sqrt(25));

//random
console.log(Math.floor(Math.random()*100));

function crearPass(array, length) {
  let passAleatorio = "";
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * array.length);
    //console.log(random);
    passAleatorio  = passAleatorio + array[random];
  }
  return passAleatorio;
}

console.log(crearPass(aleatorio, 12));