const readlineSync = require("readline-sync");

let valoresPosibles = {
  0: 'piedra',
  1: 'papel',
  2: 'tijeras'
};

function obtenerJugadaComputadora() {
  let x = Math.floor(Math.random() * 3);
  if (x === 0) {
    return valoresPosibles[0];
  } else if (x === 1) {
    return valoresPosibles[1];
  } else if (x === 2) {
    return valoresPosibles[2];
  }
}

function obtenerJugadaUsuario() {
  let x = readlineSync.question('¿Qué eliges: piedra, papel o tijeras?: ');
  return x.toLowerCase();
}

function determinarGanador(pc, player) {
    if (pc === player) {
      return 'Empate';
    } else if (pc !== player && pc === valoresPosibles[0] && player === valoresPosibles[2]) {
      return 'Gana la computadora';
    } else if (pc !== player && player === valoresPosibles[0] && pc === valoresPosibles[2]) {
      return 'Gana el usuario';
    } else if (pc !== player && pc === valoresPosibles[2] && player === valoresPosibles[1]) {
      return 'Gana la computadora';
    } else if (pc !== player && player === valoresPosibles[2] && pc === valoresPosibles[1]) {
      return 'Gana el usuario';
    } else if (pc !== player && pc === valoresPosibles[1] && player === valoresPosibles[0]) {
      return 'Gana la computadora';
    } else if (pc !== player && player === valoresPosibles[1] && pc === valoresPosibles[0]) {
      return 'Gana el usuario';
    }
}

let maquina = obtenerJugadaComputadora();
let jugador = obtenerJugadaUsuario();
let ganador = determinarGanador(maquina, jugador);

console.log(`La computadora eligio: ${maquina}.`);
console.log(`El usuario eligio: ${jugador}.`);
console.log(`El resultado fue: ${ganador}.`);