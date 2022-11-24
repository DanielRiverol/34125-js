//bucles e iteraciones
//i++  i = i + 1

/* for (let i = 0; i <= 10; i++) {
  //ejecuto el codigo a repetir
  console.log(i);
} */
/* let ingreso= prompt('Ingresa un numero');
let limite= prompt('Ingresa hasta donde');
for(let i=0; i <=limite; i++){
let resultado = ingreso * i;
console.log(" el resultado de " + i + " * " + ingreso + " es " + resultado);
} */
/* 
for (let index = 10; index > 0; index--) {
  console.log("faltan " + index + " segundos para fin de año");
} */

/* for (let index = 1; index <= 3; index++) {
  let nombre= prompt(" ingresa tu nombre");
  console.log("Bienvenido/a " + nombre + " tu turno es "+ index + " tenes "+ (index - 1)+ " personas antes");
} */
//Sentencia break
/* let palabraClave= "offside";
for(let i=1; i<=2; i++){

  let ingreso= prompt('Ingresa la p[albra clave');
  if(palabraClave === ingreso){
    alert('Adivinaste');
    break;
  }
  //le informamos al user si se equivoco
} */

//continue
/* for (let i = 1; i <= 20; i++) {
  if(i % 2 == 0){
    console.log("par");
    continue;
  }
  console.log(i);
} */
//Averiguar número primo
/* let esPrimo= true;
let numero = parseInt(prompt('Ingresa un numero'));
for (let i = 2; i < numero; i++) {
  if(numero % i=== 0){
    console.log("Además de dividir por 1 y por sí mismo, divide por ", i);
    esPrimo= false;
  }
  
}
if (esPrimo) {
  alert("Es primo")
}else{
  alert("NO Es primo")
} */

//while
/* let contador = 0;
while (contador < 10) {
  console.log(contador);
  //condicion de salida
  contador++;
} */
/* let ingreso = prompt("Ingresa un producto para salir ingresa ESC");
while (ingreso != "ESC") {
  console.log("Ingresaste " + ingreso);
  ingreso = prompt("Ingresa un producto para salir ingresa ESC");
} */
//do while

/* let ingreso = "";
do {
  ingreso = prompt("Ingresa un producto para salir ingresa ESC");
  console.log("Ingresaste " + ingreso);
} while (ingreso != "ESC");
console.log("Listo ya saliste"); */
//sentencia switch

let opcion = prompt("Ingresa un nombre");

switch (opcion) {
  case "ANA":
    console.log("Hola ANA");
    break;
  case "Julian":
    console.log("Hola Julian");
    break;
  case "Clara":
    console.log("Hola Clara");
    break;

  default:
    console.log("No te conozco");
    break;
}
