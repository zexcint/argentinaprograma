const readlineSync = require('readline-sync');
const numero = parseInt(readlineSync.question('Ingresa un número: '));

/*
A) Ejercicio de búsqueda de números: Escribe un programa que busque un número específico en un array de números. Si el número está presente, el programa deberá imprimir su posición en el array. Si no está presente, deberá imprimir un mensaje indicando que el número no se encontró.
*/

let array = [2, 54, 31, 997, 282, 40];

if (array.includes(numero)) {
  console.log('El indice del número ingresado es: ' + array.indexOf(numero));
} else {
  console.log('El número no existe en el arreglo');
}


for (let i = 0; i < array.length; i++) {
  if (array.includes(array[i])) {
    console.log(`El indice de ${array[i]} es: ` + array.indexOf(array[i]));
  } else {
    console.log('El número no existe en el arreglo');
  }
}