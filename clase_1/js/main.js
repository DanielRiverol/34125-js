//Variable los nombres deben descriptivos 

//declaracion de variables
var nombre; //ES5 no utilizada a partir de ES6

//var nombre; encuentro un var lo cambio por let

//ES6 let 
let apellido;
let dni;
let numero1;
let numero2;

//asignar un valor operador de asignacion =
apellido = "Gutierrez";//cadena de carateres o String
dni = 654345678; //Number 

//reasignar valores
dni= "uno, dos ,tres ,cuatro , cinco";//string
apellido = 3.1416;

//constantes
const PI =3.1416;
//PI="Hola";NO SE PUEDE HACER
//error lens theme => ONE DARK PRO
//Operaciones basicas

numero1= 2;
numero2= 145;
let resultado = numero1 + 12;//adición
let resta= 3.21 - 0.9;


//Concatenacion Variables
nombre= "Daniel";
apellido = "Perez";

let nombre_completo= nombre + " " + apellido;

//Métodos de salida console.log() ARMA SCRETA DEL PROGRAMADOR

console.log("Hola");
console.log(2 * 3);
console.log(nombre_completo);
console.log(resultado);
console.log(resta);
console.log("El nombre del alumno es " + nombre_completo);

//Metodo de entrada

let ingresoDato= prompt("Ingresa tu edad")

console.log(ingresoDato);

numero1= prompt("Ingresa un numero");//Siempre ingresa Strings
numero2=parseFloat(prompt("Ingresa un numero"));

//PARSEO o CONVERSION
numero1= parseFloat(numero1);

resultado = numero1 + numero2;

 console.log(resultado);
console.log(12+"3");