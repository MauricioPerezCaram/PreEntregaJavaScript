let nombreUsuario = prompt("Ingresa tu nombre: ");
alert("Hola " + nombreUsuario + "! Bienvenido");

let intentos = 0;
let usuarioValido = "Admin";
let contrasenaValida = "admin123";

let usuario = prompt("Ingresa tu nombre de usuario administrador (Admin)").toLowerCase();
let contrasena = prompt("Ingresa la contraseña de administrador (admin123)").toLowerCase();

while ((usuario !== usuarioValido.toLowerCase() || contrasena !== contrasenaValida.toLowerCase()) && intentos < 2) {
  alert("El usuario o contraseña son incorrectos. Intenta nuevamente.");
  intentos++;
  usuario = prompt("Ingresa un nombre de usuario administrador (Admin)").toLowerCase();
  contrasena = prompt("Ingresa una contraseña de administrador (admin123)").toLowerCase();
}

if (intentos === 2 && (usuario !== usuarioValido || contrasena !== contrasenaValida)) {
alert("Intentaste muchas veces. Acceso denegado.");
console.log("Recarga la página");
} else {
alert("Bienvenido al programa.");
let decision = prompt ("Queres saber como organizar tus gastos? Contesta Si o No")
if (decision == "Si"){      // cambiar que ignore si esta en mayúsculas o minúsculas
    let sueldo = parseFloat(prompt("Ingresá tu sueldo: "));
    console.log("Teniendo en cuenta que tu sueldo es de $" + sueldo + ", tus gastos deberian dividirse así:");
    gastosCasa = 35*sueldo/100
    gastosVivir = 22*sueldo/100
    gastosAuto = 15*sueldo/100      // podría usar function acá? Volver a ver clase para buscar una idea
    gastosEntretenimiento = 8*sueldo/100
    Invertir = 20*sueldo/100
    console.log("Deberías gastar como máximo: $ " + gastosCasa + " en alquiler y demás gastos de la casa. Esto corresponde a un 35% de tu sueldo.");
    console.log("Deberías gastar como máximo: $ " + gastosVivir + " en alimentos. Esto corresponde a un 22% de tu sueldo.");
    console.log("Deberías gastar como máximo: $ " + gastosAuto + " en tu auto. Esto corresponde a un 15% de tu sueldo.");
    console.log("Deberías gastar como máximo: $ " + gastosEntretenimiento + " en entretenimiento. Esto corresponde a un 8% de tu sueldo.");
    console.log("Deberías gastar como máximo: $ " + Invertir + " en invertir. Esto corresponde a un 20% de tu sueldo.");
    console.log("Debes tener en cuenta que todos estos gastos serían lo ideal para mantener ordenadas las finanzas personales.");
} else if (decision == "No"){       // cambiar que ignore si esta en mayúsculas o minúsculas
    console.log("Elegiste no tener detalle de cómo dividir tus gastos. Fin del programa.");
} else {
    console.log("Debes ingresar si o no. Recarga la página para volver a empezar.");
}
}



