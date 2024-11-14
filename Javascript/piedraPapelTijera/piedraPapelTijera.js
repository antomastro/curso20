// Variables
let opciones = ["piedra", "papel", "tijera"];
let computadora = opciones[Math.floor(Math.random() * 3)];
let jugador = prompt("Escribe: piedra, papel o tijera (o salir para terminar).").toLowerCase();
let seguirJugando = true;
let partidasJugadas = 0;
let ganadas = 0;
let empatadas = 0;
let perdidas = 0;
let resultado;

while (seguirJugando) {
  // Pedir elección del jugador
  let jugador = prompt("Escribe: piedra, papel o tijera (o salir para terminar).").toLowerCase();
  if( jugador == "salir"){
  alert (`"Gracias por jugar!". Partidas jugadas:${partidasJugadas} Ganadas:${ganadas} Empatadas:${empatadas} Perdidas:${perdidas}`);
  break;
  }

  // Validar elección del jugador
  if (jugador !== "piedra" && jugador !== "papel" && jugador !== "tijera") {
  alert("Elección no válida. Por favor elige piedra, papel o tijera.");
  continue; // Reiniciar el ciclo si la elección es inválida
  }

  // Generar elección de la computadora
  let opciones = ["piedra", "papel", "tijera"];
  let computadora = opciones[Math.floor(Math.random() * 3)];

  // Determinar el resultado
  let resultado;
  partidasJugadas++;
  if (jugador === computadora) {
  resultado = "Empate!";
  empatadas++;
  } else if (
  (jugador === "piedra" && computadora === "tijera") ||
  (jugador === "papel" && computadora === "piedra") ||
  (jugador === "tijera" && computadora === "papel")) {
  resultado = "Ganastes!!!";
  ganadas++;
  } else {
  resultado = "Perdistes!";
  perdidas++;
  }
  // Mostrar el resultado
  alert(`"Elegiste:" ${jugador} - "Computadora eligió:" ${computadora} - "Resultado:" ${resultado}`);

  // Preguntar si el jugador quiere seguir jugando
  jugador = confirm("¿Quieres jugar otra vez?");
}