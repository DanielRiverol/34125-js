/* function Producto(nombre, precio, img, stock) {
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  this.img = img;
  this.stock = parseInt(stock);

  this.vender = (cantidad) => {
    if (cantidad <= this.stock) {
      this.stock = this.stock - cantidad;
    } else {
      return "Stock insuficiente";
    }
  };
} */

//ES6 CLASE CONSTRUCTORA
class Producto {
  constructor(nombre, precio, img, stock) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.img = img;
    this.stock = parseInt(stock);
  }
  //metodos
  vender = (cantidad) => {
    if (cantidad <= this.stock) {
      this.stock = this.stock - cantidad;
    } else {
      return "Stock insuficiente";
    }
  };
  agregarImpuesto = (impuesto) => {
    this.precio = this.precio + (this.precio * parseFloat(impuesto)) / 100;
  };
}
/* 
const producto1= new Producto("arroz", "145", "url", "300")
console.log(producto1.stock);
console.log(producto1.vender(301))
console.log(producto1.stock); */

//Arrays
/* const array1=[]
//console.log(array1);
const array2= [1,6,3,2,-34,19]
//console.log(array2);
let nombre= "Jualin"
const array3=["Maria", "Lucas", "Laura", "Pedro",nombre]
console.log(array3);
const mixto= [1, "Jose", true, 1.4]
//console.table(mixto);
/* console.log(array2);

console.log(array3[3]);

for (let i = 0; i < array2.length; i++) {
  console.log(array2[i]);
} */
//agregar elementos push
/*array3.push("Jose","Pepe", "Julieta")
console.log(array3);

//unshift
array3.unshift("Lorena")
console.log(array3);

//borrar elementos
array3.pop()
console.log(array3);
array3.shift()
array3.shift()
console.log(array3);


//eliminar elem en pos especifica
array3.splice(0,2)
console.log(array3);

//join
const union=array3.join(" / ")
console.log(union);
//concat
const concatenado= array2.concat(array3) 
console.log(concatenado);

//slice(start, end)

const copiaConcat=concatenado.slice(2,5)
console.log(copiaConcat); */
const array3 = ["Maria", "Lucas", "Laura", "Pedro", "Jimena"];
//console.log(array3);

/* //indexOf
console.log(array3.indexOf("Jimena"));

//includes
console.log(array3.includes("Jimena")) */

//Aqui creo un nuevo libro con al clase constructora
const libro = new Producto(
  "Harry Potter y el prisionero de Azcaban",
  "2340",
  "img.jpg",
  "20"
);

//aqui creo objetos literales y se los paso al array libros
const libros = [
  {
    nombre: "Harry Potter y la piedra filosofal",
    precio: 2340,
    img: "img.jpg",
    stock: 10,
  },
  {
    nombre: "Harry Potter y la camara secreta",
    precio: 3340,
    img: "img.jpg",
    stock: 15,
  },
  libro,
];

/* console.log(libros); */

//iterar o recorrer el array con un forof
/* for (const libro of libros) {
  console.log(libro);
  console.log(libro.nombre);
  console.log(libro.precio);
} */
/* console.log(libros[2]);
console.log(libros[2].nombre);
console.log(libros[2].precio); */

const carrito = [];
console.log(carrito);

//declaro una funcion que me cargue elemntos en un array
function cargarProductos(arr, producto) {
  arr.push(producto);
}
cargarProductos(libros, new Producto("Steve Jobs", 2345, "img.jpg", 123));
cargarProductos(carrito, libro);
cargarProductos(carrito, new Producto("Steve Jobs", 2345, "img.jpg", 123));

console.log(carrito);
//recorro el array carrito
/* for (const libro of libros) {
  //console.log(libro);
  console.log(libro.nombre);
  console.log(libro.precio);
} */

//ejemplo aplicable a un recargo por mora, una penalización, un ticket de cine (adulto/niño) 
//Creo una variable para aplicar el impuesto
let impuesto= prompt("ingrese el porcentaje de impuesto a agregar al producto")

//aplico el impuesto a los libros del carrito
for (const libro of carrito) {
  
  console.log("El precio del libro sin impuestos es $"+libro.precio);
  
  libro.agregarImpuesto(impuesto);//ver metodo
  
  console.log("El precio del libro con impuestos es $"+libro.precio);
}
