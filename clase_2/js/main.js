//Condicionales
//if(condicion){algo}
/* let haceFrio = prompt("Hace frio");
let variable;
if (haceFrio) {
  variable = true; //booleanos
} */
/* 
if (variable) {
  //bloque de ejecucion
  console.log("Me pongo la campera");
}
 */

let numero = 33;
//comparaciones == comparan = asigna === estrictamente igual
/* if (numero === 55) {
  console.log("La respuesta es verdadera");
} else {
  console.log("La respuesta  NO es verdadera");
} */

/* let ingreso= prompt("Ingresa tu usuario");

if(ingreso == ""){
    console.log("No ingresaste nada");
}else{
    console.log("Hola " + ingreso);
} */
//If anidados else if
/* if(numero < 100){
    console.log("El numero es menor que 100");
}else if(numero < 120){
    console.log("El numero es menor que 120");
}else if(numero < 180){
    console.log("El numero es menor que 180");
    
}else {
    console.log("El numero es "+ numero);

}
let usuario= prompt('Ingresa tu usuario');
if(usuario == "Dani"){
 let pass = prompt('Ingresa tu pass')
    if(pass == "123"){
        console.log("bienvenido " + usuario);
    }else{
        console.log("hubo un error");
    }
} */

//Variables boolean

let esMayor = numero <= 33;

console.log(numero);
console.log(esMayor);

if (esMayor) {
  console.log("El numero es mayor o igual");
} else {
  console.log("El numero NO es mayor");
}

//Operadores Logicos
/* let edad= 18;
if(edad < 18){
    console.log("No podes entrar al casino");
}else{
    console.log("Bienvenido al casino");

} */

//AND devuelve true cuando dos condiciones son true  edad < 18   && nombre == "Dani"
let nombre = "Dani";
 let edad = 40;
 /*
if (edad >= 18 && nombre == "Dante") {
console.log("Bienvenido al casino");
} else {
  console.log("No podes entrar al casino");
} */

let nombreGuardado="Pepe";
let passGuardado="123";
let ingresoNombre= prompt("ingresa tu usuario");
let ingresoPass= prompt("ingresa tu password");

/* if(nombreGuardado == ingresoNombre && passGuardado == ingresoPass){
console.log("Bienvenido " + ingresoNombre);
}else{
    console.log("Hubo un error");
} */

//OR ||cualquiera de las condiciones que sea true  va  a dar true
/* console.log(edad <= 18);
console.log(nombre == "Juan");

if(edad <= 40 || nombre == "Juan"){
    console.log("Bienvenido al casino");
} else {
  console.log("No podes entrar al casino");
} */

if((nombreGuardado == ingresoNombre || ingresoNombre == "pepe")&& passGuardado == ingresoPass){
    console.log("Bienvenido " + ingresoNombre);
    }else{
        console.log("Hubo un error");
    }

