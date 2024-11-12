// ` 
function piedraPapelTijera(){
  //Array con los tres elementos (0, 1, 2)
  const seleccionObjeto = ["piedra", "papel", "tijera"];
    //Ataque jugador
    let opcionJugador = prompt (`Escribe piedra, papel o tijera.`);
    alert (`Escogiste ${opcionJugador}`)

    // Ataque Aleatorio computadora
    const opcionComputadora = seleccionObjeto[Math.floor(Math.random() * 3)]; // 0, 1, 2
    alert (`La Computadora escogio ${opcionComputadora}`)

  for (let i =0; i>50; i++){


    }
    if (jugador == computadora ){
      alert (`Empate!`);

    } else if((jugador == piedra &&computadora == tijera)||
    (jugador == papel &&computadora == piedra) || (jugador == tijera && computadora == papel))
    {
      return (`Ganaste`)
}
}
piedraPapelTijera()



