const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1100, img: "esculpidas.webp" },
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

function Servicio(nombre, precio, img) {
  this.id = servicios.length + 1;
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  if (this.img === "") {
    this.img = "https://via.placeholder.com/300";
  } else {
    this.img = img;
  }
}

servicios.push(new Servicio("depi", 1200, "img.jpg"));
servicios.push(new Servicio("depi", 1200, "img.jpg"));

//funciones de filtrado
console.log(servicios);

function findService(arr, filtro) {
  const encontrado = arr.find((service) => {
    return service.nombre.includes(filtro.toLowerCase());
  });
  return encontrado;
}
/* let buscar= prompt("Ingresa el nombre del servicio")
const servEncontrado = findService(servicios,buscar)

console.log(servEncontrado); */

//filtrar por precio

function filtrarPorMenorPrecio(arr, filtro) {
  return arr.filter((el) => {
    return el.precio <= filtro;
  });
}

//funcion generica
function filtrar(arr, filtro, param) {
  return arr.filter((el) => {
    if (param == "precio") {
      return el[param] <= filtro;
    }else if(param === "id"){
      return el[param]== filtro
    }else{
      return el[param].includes(filtro)

    }
  });
}
 const porPrecio = filtrar(servicios, 1100, "precio")

 const porId= filtrar(servicios, 2, "id" )

 //console.log(porPrecio);
 console.log(porId);
 const porNombre= filtrar(servicios, "ma", "nombre")
 console.log(porNombre);

/* const menorPrecio = filtrarPorMenorPrecio(servicios, 1500);

console.log(menorPrecio);

const menorP = filtrarPorMenorPrecio(menorPrecio, 1300);
console.log(menorP);
 */
const carrito= []

carrito.push(findService(servicios, "mani"))
carrito.push(findService(servicios, "mani"))
carrito.push(findService(servicios, "mani"))
console.log(carrito);

