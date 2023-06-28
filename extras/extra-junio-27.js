/*
1) Programar una función que tome un numero y que devuelva "Es par" si el número es par, y "Es impar" si el número es impar
*/

function calcularParImpar(numero) {
  if (numero % 2 === 0) {
    return 'Es par';
  } else if (numero % 2 !== 0) {
    return 'Es impar';
  }
}
console.log(calcularParImpar(15));


/*
2) Programar una función que tome una frase y devuelva la cantidad de palabras que tiene la frase
*/

function longitudDeLaFrase(cadena) {
  let x = cadena.split(' ');
  return x.length;
}
console.log(longitudDeLaFrase('Hola Planeta Tierra'));