//Funciones declaracion

function saludar(){
  //bloque de ejecucion
  console.log("Hola Tarola!!!!");
}

//llamado o invocacion
/* saludar() 
saludar() 
saludar() */ 

function ingresarNombre(){
  let nombreIngreso= prompt("Ingresa tu nombre");
  console.log(nombreIngreso);
}
/* 
for (let index = 1; index <= 3; index++) {
  
  ingresarNombre()
  
} */

//parametros y argumentos
function conParametros(param1, param2){
  console.log(param1 + param2);
}
/* let nombre= "Dani";
conParametros(1,4,9);
conParametros("Hola"," Dani");
conParametros("Hola",nombre); */

let result= 0;
/* function suma(num1, num2){
  result= num1 + num2;
}
function resta(num1, num2){
  result= num1 - num2;
} */
//console.log(result);

function mostrar(mensaje){
  console.log(mensaje);
}

/* suma(9,11) */
//resta(23, 10);
//mostrar(result)
//resta(-10, 10);
//mostrar(result)

//resultado de función
function sumar(num1, num2){
  return num1 + num2;
}

let resultado = sumar(3,7);

//console.log(sumar(10,5));
let num1;
function calculator(num1,num2, operator){

switch (operator) {
  case "+":
    return num1 + num2;
    //break; con retun no hace falta break
  case "-":
    return num1 - num2;
    
  case "*":
    return num1 * num2;
    
  case "/":
    //return num1 / num2;
    if (num2==0){
      return "no se puede dividir por 0"
      }else{
      return num1/num2;
    }
    

  default:
    return 0;
    //break;
}

}
 //mostrar(calculator(3,6,'+'))
 //mostrar(calculator("+",6,3)) pasar en el orden correcto
/* 
 mostrar(calculator(9,-12, '-'))
 mostrar(calculator(33,10, '*'))
 mostrar(calculator(0,10, '/')) */

 /* let total=0;//variable global

 function add(num1,num2){
  total= num1 + num2;
 }

 add(3,9);
 console.log(total); */

 function add(num1, num2) {
  let total= num1 + num2;
  return total;
}

//console.log(total);
mostrar(add(3,9));

for (let i = 0; i < 10; i++) {
  
  //console.log(i);
}
//console.log(i);
/* 
let saludo = "Hola"
if(true){
  console.log(saludo);
}
console.log(saludo); */

//funciones anonimas
/* const saludo = function(){
  console.log("Hola Soy una funcion anonima");
}
saludo() */
/* saludo="hola"
console.log(saludo);  no se puede reasignar */
//funcion flecha ()=>{}

const funcionFlecha= ()=>{
  console.log("Hola Soy una funcion flecha");
}
//funcionFlecha()


const saludo= mensaje=> {return mensaje}//.el return es implicito
 console.log(saludo("hola"));

 const sumarN =(num1, num2)=>{
  return num1 + num2;
 }

 console.log(sumarN(2, 4));