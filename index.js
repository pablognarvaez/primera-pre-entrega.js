//NOMBRE Y APELLIDO
let nombreyapellidoIngresado = prompt("Ingrese su Nombre y Apellido");
console.log(nombreyapellidoIngresado);
console.log(typeof nombreyapellidoIngresado);

// LEGAJO DEL CLIENTE
let intentos = 3;
let numeroDeCliente = Number(prompt("Ingrese su número de Legajo Mayor a 1750"));
console.log(numeroDeCliente);
console.log(typeof numeroDeCliente);

while (numeroDeCliente < 1750 && intentos > 1) {
    console.log("Número de Legajo Inexistente, por favor intente de nuevo!");
    numeroDeCliente = Number(prompt("Ingrese su número de Legajo Mayor o igual a 1750"));
    intentos--;
}

if (numeroDeCliente >= 1750) {
    console.log("Puede Loguearse");
    document.write("Bienvenido de nuevo " + nombreyapellidoIngresado);
} else {
    console.log("Número de Legajo Incorrecto. Intente nuevamente.");
    document.write("Número de Legajo Incorrecto. Intente nuevamente.");
}

/*consigna 3*/

