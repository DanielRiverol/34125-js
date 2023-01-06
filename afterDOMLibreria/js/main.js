const titulo = document.querySelector("#titulo"),
  autor = document.querySelector("#autor"),
  isbn = document.querySelector("#isbn"),
  categoria = document.querySelector("#categoria"),
  precio = document.querySelector("#precio"),
  img = document.querySelector("#img"),
  search = document.querySelector("#search"),
  tbody = document.querySelector("#table-body"),
  btnGuardar = document.querySelector("#btnGuardar");
const radios = document.querySelectorAll('input[type="radio"]');

const inventario = [
  {
    titulo: "cuentos completos",
    autor: "edgard alan poe",
    isbn: "9788491052166",
    categoria: "cuento",
    precio: 2500.99,
    img: "http://boutiquedezothique.es/793-large_default/cuentos-completos-edgar-allan-poe.jpg",
  },
  {
    titulo: "quien pierde paga",
    autor: "stephen king",
    isbn: "9789506443924",
    categoria: "terror",
    precio: 1800.99,
    img: "http://d2r9epyceweg5n.cloudfront.net/stores/001/421/275/products/king_quienpierdepaga_libro3d1-186af08b4fbf47f81116071041288636-640-0.png",
  },
];
//
/* let local;

let localLS = JSON.parse(localStorage.getItem("inventario"));
if (localLS) {
  local = localLS;
} else {
  local = [];
} */

//sugar sintax
let local = JSON.parse(localStorage.getItem("inventario")) || [];

//Constructor
function Libro(titulo, autor, isbn, categoria, precio, img) {
  this.titulo = titulo;
  this.autor = autor;
  this.isbn = isbn;
  this.categoria = categoria;
  /*  if (precio == "") {
    this.precio = 1;
  } else {
    this.precio = parseFloat(precio);
  } */
  precio == "" ? (this.precio = 1) : (this.precio = parseFloat(precio));

  /*  if (img == "") { 
    this.img = `https://via.placeholder.com/150`;
  } else {
    this.img = img;
  } */
  img == "" ? (this.img = `https://via.placeholder.com/150`) : (this.img = img);
}

//Funciones
function cargarInventario(arr, prod) {
  return arr.push(prod);
}

function guardarLS(arr) {
  localStorage.setItem("inventario", JSON.stringify(arr));
}

function recuperarLS(key) {
  return JSON.parse(localStorage.getItem(key));
}

guardarLS(inventario);
//funcion genérica
function filtrar(arr, filtro, param) {
  return arr.filter((el) => {
    if (param == "precio") {
      return el.precio <= parseFloat(filtro);
    } else {
      return el[`${param}`].includes(filtro);
    }
  });
}

//Manipular el DOM
function crearHtml(arr) {
  tbody.innerHTML = "";
  let html = "";
  for (const item of arr) {
    //destructuring
    const { titulo, autor, isbn, categoria, precio, img } = item;

    html = `<tr>
  <td>${titulo}</td>
  <td>${autor}</td>
  <td>${isbn}</td>
  <td>${categoria}</td>
  <td>${precio}</td>
  <td><img src="${img}"/></td>
  <!-- boton borrar class="btn"-->
  <td><button class="btn red" id="${isbn}">Borrar</button></td>
  </tr>`;
    tbody.innerHTML += html;
  }
  //Cargar evento al boton
  //llamo a todos los botones con que esten dentro del td con clase btn
  const arrayBotones = document.querySelectorAll("td .btn");
  
  //recorremos el NodeList de botones y le agregamos un evento
  arrayBotones.forEach((btn) => {
    btn.addEventListener("click", () => {
      //Decimos que la variable local va a ser igual al array filtrado
      local = local.filter((el) => el.isbn != btn.id);//va a traer todos los elementos excepto el elemeto que sea igual al id del boton
      console.log(local);
      //guardar en el local y pintar html
      guardarLS(local);
      crearHtml(local);
    });
  });
}

function limpiarCampos() {
  titulo.value = "";
  autor.value = "";
  isbn.value = "";
  categoria.value = "";
  precio.value = "";
  img.value = "";
}


//Listeners
btnGuardar.addEventListener("click", () => {
  //Codigo
  const newBook = new Libro(
    titulo.value,
    autor.value,
    isbn.value,
    categoria.value,
    precio.value,
    img.value
  );
  //cargar el libro al local
  cargarInventario(local, newBook);
  guardarLS(local);

  //actualizo la vista
  crearHtml(local);
});

//Evento search
search.addEventListener("input", () => {
  //No filtraba porque el array que hay que pasarle es local en lugar de inventario
  let nuevoFiltro = filtrar(local, search.value, "titulo");
  crearHtml(nuevoFiltro);
});
//evento radio buttons
for (const radio of radios) {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      search.addEventListener("input", () => {

        //No filtraba porque el array que hay que pasarle es local en lugar de inventario
        let nuevoFiltro = filtrar(local, search.value, radio.value);
        crearHtml(nuevoFiltro);
      });
    }
  });
}
