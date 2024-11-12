//Creacion variable numeroAleatorio

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 6;
let minimo = 0;
let maximo = 100;

for (let i = 6; i > 0; i--) {
        let numero = prompt(`Adivina un número entre 1 y 100. Te quedan ${i} intentos:`);
    if (numero < numeroAleatorio) {
        alert("El número es más alto.");
    } else if (numero > numeroAleatorio) {
        alert("El número es más bajo.");
    } else if (numero === numeroAleatorio){
        alert("¡Felicidades! Has adivinado el número.");
        break;
    } else if (typeof [i] !== 'number') {
        alert ("Debes ingresar un numero");
        i++;
    } //i++ Restablece el intento porque la entrada no es válida
}
alert(`¡Has agotado tus intentos! El número secreto era: ${numeroAleatorio}.`);
