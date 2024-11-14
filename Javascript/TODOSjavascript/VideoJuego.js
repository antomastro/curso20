/*
  Realiza un videojuego utilizando clases y herencia.
  Este videojuego debe tener las siguientes clases:
  - Personaje
    - Propiedades: nombre, vida, ataque, defensa, velocidad
    - Metodos: Atacar, Saludar
  - Mago
    - Propiedades: hechizos (array de hechizos, cada hechizo tiene un nombre y un daño)
    ejemplo de hechizo: {nombre: "Fuego", daño: 50}
    - Metodos: Lanzar hechizo (seleccionar un hechizo aleatoriamente)
  - Guerrero
    - Propiedades: armas (array de armas, cada arma tiene un nombre y un daño)
    - Metodos: Atacar con arma (seleccionar un arma aleatoriamente)
    ejemplo de arma: {nombre: "Espada", daño: 30}
  - Arquero
    - Propiedades: flechas (array de flechas)
    - Metodos: Disparar flecha

  Debes de crear 5 personajes, 2 magos, 2 guerreros y 1 arquero.
  Cada personaje debe de tener una vida, un ataque diferente, una defensa, velocidad aleatoria.

  Crea un loop que permita a cada personaje atacar a otro personaje.
  Al momento de realizar un ataque, el personaje que fue atacado debe de defenderse.

  Cada vez que un personaje ataque a otro, se debe de imprimir el nombre del personaje que ataca,

  Para calcular el daño que un personaje recibe se debe utilizar la siguiente formula:
  Daño = (%Ataque del atacante) - (%Defensa del atacado)

  Nota: El daño no puede ser menor a 0, y el ataque y defensa es un numero aleatorio entre
  0 y el valor de ataque o defensa del personaje.

  Cada vez que un personaje ataque a otro, se debe de imprimir el daño que recibe el personaje atacado
  y quien ataca y quien es el atacado.
  
  Cuando un personaje ataca a otro, cada personaje debe atacar una vez al menos (Rondas),
  sin embargo, el orden de cada ronda se determina aleatoriamente imprimiendo un numero
  entre 0 y su velocidad.

  Cuando la vida de un personaje llega a 0, se debe de imprimir que el personaje ha muerto.
  y no puede seguir atacando.

  Al final solo debe de quedar un personaje en pie.

  Y debes imprimir un mensaje diciendo quien ha ganado.

  Cada personaje realizara una acción aleatoria, es decir. Aleatoriamente puede atacar (de forma normal),
  atacar con un hechizo o atacar con un arma. (Según el tipo de personaje).

  Además, a quien ataca también se debe de seleccionar aleatoriamente.

  Puedes utilizar metodos como Math.random() para seleccionar aleatoriamente un numero.

  Math.random devuelve un numero entre 0 y 1, si quieres un numero entre 0 y 10, debes de multiplicar
  el resultado por 11.

  Math.floor() redondea un numero decimal hacia abajo. Es importante porque Math.random() devuelve
  numeros decimales.

  Ejemplo:
  Math.floor(Math.random() * 10) //Devuelve un numero entre 0 y 9

  Opcional:
  - Que cada personaje tenga una habilidad especial que se pueda activar una vez por juego.
  - Que cada personaje tenga una probabilidad de esquivar un ataque.
  - Que cada personaje pueda tener items, estos pueden aumentar sus estadisticas o incluso curar al personaje


  Fecha de entrega: 04/11/2024
*/
// Pasos a seguir para crear un video juego
//0. Creacion personajes
//1. Iniciar el juego
//2. Elegir ataque de los jugadores
//3. Elegir ataque aleatorio del enemigo
//4. Mostrar el resultado 
//5. Bugs

//Creacion de Personaje con Propiedades y Metodos,general para todos.

class Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
}


saludar() {
  console.log(`Hola, soy ${this.nombre}, ¡prepárate para la batalla!`);
  }

}

atacar(objetivo) {
  const ataqueRealizado = Math.floor(Math.random() * this.ataque);
  const defensaObjetivo = Math.floor(Math.random() * objetivo.defensa);
  const daño = Math.max(0,ataqueRealizado - defensaObjetivo);

  if (Math.random() < 0.2) {
    this.mensajeFallo(objetivo);
  } else {
    objetivo.vida -= daño;
    console.log(`${this.nombre} ataca a ${objetivo.nombre} y causa ${daño} de daño. Vida restante de ${objetivo.nombre}: ${objetivo.vida}`);
  }
  if (objetivo.vida <= 0) {
    console.log(`${objetivo.nombre} ha muerto.`);
  }

mensajeFallo(objetivo) {
  console.log(`${this.nombre} intentó atacar a ${objetivo.nombre}, pero falló.`);
  }
}


explotarAlMorir() {
  if (Math.random() < 0.4); {
    console.log (`${this.nombre} El mago se volvió loco y voló en mil pedazos llevándose a todos con él.`);
    personajes.forEach(p => p.vida = 0);
  }
}

/* Personajes realizados por compa#eros del curso
const personajes = [
  new Mago("Merlin"),
  new Mago("Veigar"),
  new Guerrero("Thor"),
  new Guerrero("Power"),
  new Arquero("Arch"),
] */

//Crear personajes:nombre,vida,ataque,defensa,velocidad 
let personajeMago1 = new Personaje("Merlin", 100, 50, 200, 70);
let personajeMago2 = new Personaje("Veigar", 50, 20,);
let personajeGuerrero3 = new Personaje("Thor", 150, 70,);
let personajeGuerrero4 = new Personaje("Power", 60, 20,);
let personajeAr5 = new Personaje("Arch", 140, 70,);

console.log(personaje1.decirInformacion());
console.log(personaje2.decirInformacion());
console.log(personaje3.decirInformacion());
console.log(personaje4.decirInformacion());
console.log(personaje5.decirInformacion());


///////////////////////////

//Creo la clase Personaje
class Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad){
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

  saludar(clase){
    return `Hola soy ${this.nombre}, un ${clase}`;
  }

  //El metodo para atacar recibe un objetivo
  atacar(objetivo){
    //Genero un numero aleatorio entre 0 y el ataque del personaje
    let ataque = Math.floor(Math.random() * (this.ataque + 1)) ;
    //Genero un numero aleatorio entre 0 y la defensa del objetivo
    let defensa = Math.floor(Math.random() * (objetivo.defensa + 1));
    //Calculo el daño
    let danio = ataque - defensa;
    //Si el daño es menor a 0, lo cambio a 0
    if(danio < 0){
      danio = 0;
    }
    //Imprimo el daño que se hizo
    console.log(`${this.nombre} ataca a ${objetivo.nombre} y le hace ${danio} de daño`);
    //Retorno el daño hecho
    return danio;
  }
}

class Mago extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, hechizos){
    super(nombre, vida, ataque, defensa, velocidad);
    this.hechizos = hechizos;
  }

  lanzarHechizo(objetivo){
    //Seleccionar un hechizo aleatorio
    let hechizo = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
    let ataque = Math.floor((Math.random() * (hechizo.danio + 1)) );
    let defensa = Math.floor(Math.random() * (objetivo.defensa + 1));
    let danio = ataque - defensa;
    if(danio < 0){
      danio = 0;
    }
    console.log(`${this.nombre} lanza un hechizo de ${hechizo.nombre} a ${objetivo.nombre} y le hace ${danio} de daño`);
    return danio;
  }
}

class Guerrero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, armas){
    super(nombre, vida, ataque, defensa, velocidad);
    this.armas = armas;
  }

  atacarConArma(objetivo){
    let arma = this.armas[Math.floor(Math.random() * this.armas.length)];
    let ataque = Math.floor(Math.random() * (arma.danio + 1));
    let defensa = Math.floor(Math.random() * (objetivo.defensa + 1));
    let danio = ataque - defensa;
    if(danio < 0){
      danio = 0;
    }
    console.log(`${this.nombre} ataca con ${arma.nombre} a ${objetivo.nombre} y le hace ${danio} de daño`);
    return danio;
  }
}

class Arquero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, flechas){
    super(nombre, vida, ataque, defensa, velocidad);
    this.flechas = flechas;
  }

  dispararFlecha(objetivo){
    let flecha = this.flechas[Math.floor(Math.random() * this.flechas.length)];
    let ataque = Math.floor(Math.random() * (flecha.danio + 1));
    let defensa = Math.floor(Math.random() * (objetivo.defensa + 1));
    let danio = ataque - defensa;
    if(danio < 0){
      danio = 0;
    }
    console.log(`${this.nombre} dispara una flecha a ${objetivo.nombre} y le hace ${danio} de daño`);
    return danio;
  }
}

let mago1 = new Mago("Gandalf", 100, 50, 20, 10, [
  {nombre: "Fuego", danio: 120},
  {nombre: "Hielo", danio: 150}
]);

let mago2 = new Mago("Merlin", 100, 50, 20, 10, [
  {nombre: "Rayo", danio: 180},
  {nombre: "Viento", danio: 100}
]);

let guerrero1 = new Guerrero("Aragorn", 150, 70, 30, 5, [
  {nombre: "Espada", danio: 100},
  {nombre: "Hacha", danio: 110}
]);

let guerrero2 = new Guerrero("Conan", 150, 70, 30, 5, [
  {nombre: "Maza", danio: 120},
  {nombre: "Lanza", danio: 105}
]);

let arquero1 = new Arquero("Legolas", 120, 60, 20, 15, [
  {nombre: "Flecha de fuego", danio: 110},
  {nombre: "Flecha de hielo", danio: 120}
]);

let personajes = [mago1, mago2, guerrero1, guerrero2, arquero1];
let personajes_vivos = personajes;
let ronda = 1;
while( personajes_vivos.length > 1 ){
  console.log(`Ronda ${ronda}`);
  //Creo un arreglo de objetos con la velocidad de cada personaje
  let turno = [];
  // Lleno el arreglo turno con los personajes vivos y su velocidad
  for(let personaje of personajes_vivos){
    turno.push(
      {
        personaje: personaje,
        velocidad: Math.floor(Math.random() * (personaje.velocidad + 1))
      }
    );
  }
  //Organizar de mayor a menor velocidad
  turno.sort((a, b) => b.velocidad - a.velocidad);

  //Comienza la ronda de ataques
  for(let i = 0; i < turno.length; i++){
    //Seleccionar al personaje que ataca
    let atacante = turno[i].personaje;

    //Seleccionar al objetivo aleatorio
    do{
      var objetivo = personajes_vivos[Math.floor(Math.random() * personajes_vivos.length)];
    } while(atacante === objetivo);

    //Creo variable para guardar el daño
    let danio = 0;
    //Verifico si el atacante es un mago
    if(atacante instanceof Mago){
      //Creo una probabilidad de 50% para lanzar hechizo o atacar
      let probabilidad = Math.floor(Math.random() * 2);
      if(probabilidad === 0){
        danio = atacante.lanzarHechizo(objetivo);
      } else {
        danio = atacante.atacar(objetivo);
      }
    } else if(atacante instanceof Guerrero){
      // Creo una probabilidad de 50% para atacar con arma o atacar
      let probabilidad = Math.floor(Math.random() * 2);
      if(probabilidad === 0){
        danio = atacante.atacarConArma(objetivo);
      } else {
        danio = atacante.atacar(objetivo);
      }
    } else if(atacante instanceof Arquero){
      // Creo una probabilidad de 50% para disparar flecha o atacar
      let probabilidad = Math.floor(Math.random() * 2);
      if(probabilidad === 0){
        danio = atacante.dispararFlecha(objetivo);
      } else {
        danio = atacante.atacar(objetivo);
      }
    }
    //Restar la vida al objetivo
    objetivo.vida -= danio;
    console.log(`${objetivo.nombre} tiene ${objetivo.vida} de vida`);
    //objetivo.vida = objetivo.vida - danio;
    //Verificar si el objetivo murio
    if( objetivo.vida <= 0 ){
      console.log(`${objetivo.nombre} ha muerto`);
      //Eliminar al personaje del arreglo de personajes vivos
      personajes_vivos = personajes_vivos.filter(personaje => personaje !== objetivo);
    }

    //Verificar si solo queda un personaje vivo
    if(personajes_vivos.length === 1){
      console.log(`${personajes_vivos[0].nombre} ha ganado la batalla`);
      break;
    }
  }
  ronda++;
}
