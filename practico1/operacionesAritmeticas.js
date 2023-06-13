let var1 = 10;
let var2 = 12;
let var3 = 6;
let var4 = 8;

let sumaEntre = var1 + var2;
let restaEntre = var4 - var3;
let resultadoFinal = sumaEntre * restaEntre;
let esPar = (resultadoFinal % 2 === 0);
console.log("Mis variables iniciales fueron: %i, %i, %i y %i. La respuesta a verificar si el resultado final es par es: %s", var1, var2, var3, var4, esPar);