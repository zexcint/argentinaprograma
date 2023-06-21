const readlineSync = require("readline-sync");
const numero = parseInt(readlineSync.question("Ingrese un número: "));

if (numero > 0) {
  console.log("El numero es positivo");
} else if (numero === 0) {
  console.log("El numero es cero");
} else if (numero < 0) {
  console.log("El numero es negativo");
}