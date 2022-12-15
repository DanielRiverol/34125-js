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
const personas = [
  "Pedro",
  "Jose",
  "Juan",
  "Lucia",
  "Emiliano",
  "Belén",
  "Pia",
  "Jimena",
];
personas.push("Joni");
personas.filter((el) => (el.nombre = "Pedro"));
//Class DATE
const fecha = new Date();
/* console.log(fecha);
console.log(fecha.getFullYear());
console.log(fecha.getMonth()+1);
console.log(fecha.getDay());
console.log(fecha.toLocaleString());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds()); */
/* 
console.dir(document.head)
console.dir(document.body) */

//acceso a nodos

const div = document.getElementById("app");
const parrafo = document.getElementById("parrafo");
const itemPais = document.getElementsByClassName("pais");

console.log(itemPais);
/* console.log(itemPais[0].innerText);
console.log(itemPais[1].innerText);
console.log(itemPais[2].innerText);
console.log(itemPais[3].innerText);
console.log(itemPais[4].innerText); */

//console.log(parrafo.innerHTML);
for (const pais of itemPais) {
  console.log(pais.innerText);
}

parrafo.innerText = "<h2>SOY UN TITULO</h2>"; //lo hace literal

parrafo.innerHTML = "<h2>SOY UN TITULO</h2> <p>Lorem ipsum</p>"; //interpreta etiquetas

//parrafo.className= "red";
parrafo.style.color = "blue";

//Crear elementos
const parrafo1 = document.createElement("p");

console.log(parrafo1);
parrafo1.innerHTML = "<h3>Soy un titulo</h3><em>Italica</em>";
//flujo del documnto principal
document.body.append(parrafo1);

div.appendChild(parrafo1);

//remover
parrafo.remove();
itemPais[3].remove();

const lista = document.querySelector("ul.lista#nombres");

for (const persona of personas) {
  //creo un elemento
  const li = document.createElement("li");
  //le doy un valor
  li.innerHTML = persona;
  //lo cargo en el nodo contenedor
  lista.appendChild(li);
}

//plantillas literales ``
/*  let producto = { id: 1,  nombre: "Arroz", precio: 125 };
let concatenado = "ID : " + producto.id +" - Producto: " + producto.nombre + "$ "+producto.precio;
let plantilla   = `ID: ${producto.id} - Producto ${producto.nombre} $${producto.precio}`;
//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla); */

//llamo al contenedor
const contenedor = document.querySelector(".div");

for (const producto of productos) {
  //creo un elemento
  const p = document.createElement("p");

  //le asigno la informacion del producto

  p.innerHTML = `ID: ${producto.id} - 
  Producto ${producto.nombre} 
  $${producto.precio}`;

  //lo agrego al contenedor
  contenedor.appendChild(p);
}
