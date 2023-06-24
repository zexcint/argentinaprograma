let numeros = [2, 54, 31, 997, 282, 40];
/*
A) Ejercicio de búsqueda de números: Escribe un programa que busque un número específico en un array de números. Si el número está presente, el programa deberá imprimir su posición en el array. Si no está presente, deberá imprimir un mensaje indicando que el número no se encontró.
*/

// Funciona solo si le paso el número exacto en el includes y el indexOf
if (numeros.includes(54) === true) {
  console.log(numeros.indexOf(54));
} else {
  console.log('El número no existe en el arreglo numeros');
}

// Me retorna -1
if (numeros.includes(54) === true) {
  console.log(numeros.indexOf());
} else {
  console.log('El número no existe en el arreglo numeros');
}