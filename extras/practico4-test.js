const readlineSync = require("readline-sync");

let resultado = {
  0: 'piedra',
  1: 'papel',
  2: 'tijeras'
};

function obtenerJugadaComputadora() {
  return Math.floor(Math.random() * 3);
}

function obtenerJugadaUsuario() {
  return readlineSync.question("¿Qué eliges: piedra, papel o tijera?: ");
}


let maquina = obtenerJugadaComputadora();
let jugador = obtenerJugadaUsuario();

function determinarGanador(pc, j) {
}

/*
- La piedra vence a las tijeras.
- Las tijeras vencen al papel.
- El papel vence a la piedra.
*/

/*
4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas
de la computadora y del usuario. Implementa las reglas del juego para determinar el
ganador y retorna el resultado.
5. Llama a las funciones en el orden adecuado para ejecutar el juego:
a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una
variable.
b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
c) Invoca la función determinarGanador pasando como argumentos las jugadas de
la computadora y del usuario. Almacena el resultado en una variable.
*/