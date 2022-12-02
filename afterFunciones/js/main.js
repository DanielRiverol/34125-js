let savedPIN = "5461";

function login() {
  let ingresar = false;

  for (let i = 2; i >= 0; i--) {
    let userPIN = prompt("Ingresa tu PIN. Tenés " + (i + 1) + " Oportunidades");

    if (userPIN === savedPIN) {
      alert("Ingreso exitoso");
      ingresar = true;
      break;
    } else {
      alert("Error. Te quedan " + i + "intentos");
    }
  }
  return ingresar;
}

//console.log(login());
let exito = login();
//console.log(exito);
//Estoy dentro de mi cuenta
if (exito) {
  //Accedemos a la info de la cuenta
  let saldo = 35000;

  let opcion = prompt(
    "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
  );

  while (opcion != "X" && opcion != "x") {
    switch (opcion) {
      case "1":
        alert("Tu saldo es $" + saldo);
        break;
      case "2":
        let retiro = parseInt(prompt("Ingresa cantidad a retirar"));

        if (retiro <= saldo) {
          saldo = saldo - retiro;
          alert("Retiraste $" + retiro + " Tu nuevo saldo es $" + saldo);
        } else {
          alert("Anda a laburar");
        }
        break;
      case "3":
        let deposito = parseInt(prompt("Ingresa cantidad a depositar"));

        saldo = saldo + deposito;
        alert("Tu nuevo saldo es $" + saldo);

        break;

      default:
        alert("opcion no valida");
        break;
    }

    //condicion de salida del while
    opcion = prompt(
      "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n Presioná X para finalizar."
    );
  }
} else {
  alert("Retendremos tu tarjeta");
}
alert("Gracias por operar con nosotros");
