//Objetos
/* let nombre= "Fausto";
let edad= 33;
let direccion= "Calle Falsa 123"
let tel= "765456787";
let nombre1= "Faustina";
let edad1= 33;
let direccion1= "Calle Falsa 123"
let tel1= "765456787"; */


//Objeto literal
const persona={
  nombre:"Daniel",
  edad:40,
  telefono:"45678987654",
  email:"dani@mail.com"
}

const persona1={
  nombre:"Marina",
  edad:33,
  telefono:"936239346",

}

//acceso a las propiedades
/* console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.telefono);
console.log(persona.email);
console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.telefono);
console.log(persona1.email);//prop que no existe indefinido */

/* console.log(persona["nombre"]);
console.log(persona1["email"]);
 */
//Asignar o cambiar una propiedad
persona1.telefono = "123568896";
persona["email"]= "danny@mail";
//console.log(persona.email);
/* console.log(persona1.telefono);
console.log(persona1); */

persona1.email= "marina@mail.com";
persona1.direccion= "Bal 123"
//console.log(persona1);
//funcion constructora
function Persona(nombre, edad, telefono, email){
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;
    this.email= email;
    //metodo
    this.saludar = function (){
        console.log("Hola me llamo " + this.nombre);
    }
    this.caminar= ()=>{
      console.log("Estoy caminando");
    }
    this.estudiar=()=>
  {
    console.log("Estoy aprendiendo objetos");
  }

}

const persona2 = new Persona("Mariana", 30, "12345678", "mariana@mail.com");

const persona3 = new Persona("Julian", 33, "telefono", "email")

//métodos 

/* let frase= "Hay Caramba!"
console.log(frase);
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
console.log(frase.length);
//persona1.saludar()
persona2.saludar()
persona3.saludar()
persona3.caminar()
console.log(persona2.nombre);
persona2.estudiar() */

//Operador in

/* console.log( "email" in persona2 );
console.log( persona2.email ); 

persona["nombre"]*/

//for in

for (const atributo in persona2) {
  console.log(atributo + ": " + persona2[atributo]);//persona2["nombre"]
}
