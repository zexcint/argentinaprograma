/*
Imprimir los numeros impares del 1 al 999.
*/

for (let i = 1; i <= 999; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

/*
Programar un bucle que sume todos los elementos de un arreglos de números
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // longitud 10
let sumaNumero = 0
for (let i = 0; i < numeros.length; i++) {
  sumaNumero += numeros[i];
}
console.log(sumaNumero);