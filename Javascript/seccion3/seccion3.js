// ES6 (map, arrows functions, spread)

//map 

/* 

Permite transformar elementos de un array sin modificar el original

*/

const numbers = [[14,24,34,68], 2, 3, 4, 5,]

const newArray = numbers[0].map(number => number * 2);

console.log(newArray);

//spread operator

/* 

Es un operador que permite expandir elementos de un array, realizando una copia
del array original sin modificarlo y sin perder sus elementos, y agregando nuevos
valores

*/

const moreNumbers = [...numbers, 6, 7, 8, 9, 10];

console.log(moreNumbers);

const User = {
  name: "Delvis",
  age: 23
}

const updatedUser = { ...User, country: "Venezuela"}

console.log(updatedUser);

const numbersBidimensionales =[
  [1, 2, 3],
  [4, 5, 6],]

const newNumbersBidimensionales = [...numbersBidimensionales, [7, 8, 9]];

console.log(newNumbersBidimensionales);

const esteSiDefinitivoTesisV5EstaSi = [newNumbersBidimensionales, [10, 11, 12]];

console.log(esteSiDefinitivoTesisV5EstaSi);

//Desestructuracion

/* 

Permite extraer elementos de un objeto u array y asignarlos a variables
de una manera mas directa

*/

//Para Objetos

const person1 = {
  names: "Delvis",
  age: 23,
  country: "Venezuela",
  city: "Caracas"
}

const person1Name = person1.names;

const person1Age = person1.age;

console.log(person1Name);

const {names, age, country, city} = person1;

//Para Arrays

const colors =["red", "green", "blue", "yellow"];

const [color1, color2, color3, color4] = colors;

console.log(color1);

//En funciones

function IntroduceMe({names}) {
  console.log(`Hola, soy ${names}, el desarrollador de este sitio web`);
}

IntroduceMe(person1);

//DOM


//Ejemplo de uso de DOM

//Crear un nuevo elemento del DOM

const newDiv = document.createElement("div")

//Propiedades de un elemento del dom manipulables desde js

/* newDiv.innerHTML = `<h1>Esto es un nuevo div</h1>`

newDiv.className = "Button"

newDiv.id = "newDiv"

newDiv.style.color = "red"

newDiv.innerText = "Esto es un parrafo"

document.body.appendChild(newDiv) */

//Selectores

//Por el nombre del tag

const h1 = document.querySelector("h1")

h1.innerText = "Esto es un h1"

h1.className = "Tittle"

// Otras formas

/* const h1 = document.querySelector("h1")

const h1s = document.querySelectorAll("h1") 

*/

//Por la clase

const button = document.getElementsByClassName("Button")

button[0].innerText = "Esto es un boton"

//Por id

const container = document.getElementById("principal")

container.className = "Container"

//Por querySelector 

const container2 = document.querySelector("#principal")

//Todos los elementos de una clase

const buttons = document.querySelectorAll(".Button")

buttons.forEach((button, index) => {
  button.innerText = `Esto es el boton ${index + 1}`
})

//Eventos

const goodButton = document.querySelector("#buton-bueno")

goodButton.addEventListener("click", () => {
  console.log("Presionaste el boton bueno")
})


///////////////
//Primera clase del suplente hecha bien por el mismo.
/*
// ES6 (map, arrows functions, spread)

/* 

ES6 (o ECMAScript 2015) introdujo nuevas características en JavaScript
para escribir código más limpio y conciso. 

map permite transformar elementos de
un arreglo sin modificar el original. 
 
Las arrow functions (funciones de flecha) son una forma abreviada de escribir funciones
y manejan el contexto (this) de manera diferente. 

El spread operator (...) permite expandir elementos de un arreglo u objeto, facilitando
la copia y combinación de datos.

*/

//Map

const numbers = [[14,24,34,68], 2, 3, 4, 5,]

const newArray = numbers[0].map(number => number * 2);

console.log(newArray);

//spread operator

/* 

Es un operador que permite expandir elementos de un array, realizando una copia
del array original sin modificarlo y sin perder sus elementos, y agregando nuevos
valores

*/

//Ejemplo 1

const moreNumbers = [...numbers, 6, 7, 8, 9, 10];

console.log(moreNumbers);

//Ejemplo 2 (Objetos)

const User = {
  name: "Delvis",
  age: 23
}

const updatedUser = { ...User, country: "Venezuela"}

console.log(updatedUser);

//Ejemplo 3 (Arreglos bidimensionales)

const numbersBidimensionales =[
  [1, 2, 3],
  [4, 5, 6],]

const newNumbersBidimensionales = [...numbersBidimensionales, [7, 8, 9]];

console.log(newNumbersBidimensionales);

const esteSiDefinitivoTesisV5EstaSi = [newNumbersBidimensionales, [10, 11, 12]];

console.log(esteSiDefinitivoTesisV5EstaSi);


//Desestructuracion

/* 

Permite extraer elementos de un objeto u array y asignarlos a variables
de una manera mas directa

*/

//Para Objetos

const person1 = {
  names: "Delvis",
  age: 23,
  country: "Venezuela",
  city: "Caracas"
}

//Forma convencional de extraer propiedades de un objeto

const person1Name = person1.names;

const person1Age = person1.age;

console.log(person1Name);

//Desestructuracion

const {names, age, country, city} = person1; //Extrae las propiedades del objeto person1 y las asigna a las variables

//Para Arrays

const colors =["red", "green", "blue", "yellow"];

const [color1, color2, color3, color4] = colors;

console.log(color1);

//En funciones

function IntroduceMe({names}) {
  console.log(`Hola, soy ${names}, el desarrollador de este sitio web`);
}

IntroduceMe(person1);

//DOM

/* 

El "DOM" (Document Object Model o *Modelo de Objeto del Documento*), también conocido
como árbol de elementos, es una representación en forma de árbol de la estructura de
un documento HTML.

Cada nodo en el árbol de elementos representa un elemento HTML en la página web.

El árbol de elementos comienza con el elemento raíz, que es "document", y luego se
descompone en elementos hijo, nietos, bisnietos, etc. Cada elemento tiene
propiedades, como id, class, name, value, etc... que pueden ser accedidas mediante 
selectores y manipuladas con JavaScript.

*/

//Ejemplo de uso de DOM

//Crear un nuevo elemento del DOM

const newDiv = document.createElement("div")

//Propiedades de un elemento del dom manipulables desde js

//innerHTML: Permite insertar HTML dentro del elemento
newDiv.innerHTML = `<h1>Esto es un nuevo div</h1>`

//className: Permite cambiar la clase del elemento
newDiv.className = "Button"

//id: Permite cambiar el id del elemento
newDiv.id = "newDiv"

//style: Permite cambiar el estilo del elemento (usando estilos en linea)
newDiv.style.color = "red"

//innerText: Permite cambiar el texto del elemento
newDiv.innerText = "Esto es un parrafo"

//document.body: Permite acceder al cuerpo del documento en este caso el body
//appendChild: Permite agregar un elemento hijo al elemento padre
document.body.appendChild(newDiv)

//Selectores

/* 

Los selectores permiten acceder a elementos específicos
en el DOM según sus atributos (id, class, tag, name). Seleccionar
elementos es esencial para aplicar estilos, manipular contenido o
responder a eventos específicos en una página web.

*/

//Por el nombre de la etiqueta

const h1 = document.querySelector("h1")

h1.innerText = "Esto es un h1"

h1.className = "Tittle"

// Otras formas de seleccionar elementos por el nombre de la etiqueta

const h1 = document.querySelector("h1")

const h1s = document.querySelectorAll("h1") 


//Por la clase

const button = document.getElementsByClassName("Button")

button[0].innerText = "Esto es un boton"

//Por id

const container = document.getElementById("principal")

container.className = "Container"

//Seleccionar por ID con querySelector 

const container2 = document.querySelector("#principal")

//Todos los elementos de una clase

const buttons = document.querySelectorAll(".Button")

//aplicar cambios a todos los elementos seleccionados arriba
buttons.forEach((button, index) => {
  button.innerText = `Esto es el boton ${index + 1}`
})

//Eventos

/* 

Los eventos son la manera en la cual JavaScript controla las acciones de los visitantes
y define el comportamiento de la página cuando estos se produzcan.

Para entender los eventos es necesario conocer algunos conceptos básicos:

-Evento: Es algo que ocurre. Generalmente los eventos ocurren cuando el usuario
interactúa con el documento, pero podrían producirse por situaciones ajenas
al usuario, como el caso en el que una imagen no esté disponible.

-Tipo de evento: Es el tipo del suceso que ha ocurrido, por ejemplo, un clic sobre 
un botón o el envío de un formulario. Cada tipo de elemento de la página ofrece diversos
tipos de eventos de JavaScript.

-Manejador de evento: Es el comportamiento que nosotros podemos asignar como respuesta
a un evento. Se especifica mediante una función en JavaScript, que se asocia a un tipo de
evento en concreto. Una vez asociado el manejador a un tipo de evento sobre un elemento
de la página, y cada vez que ocurre ese tipo de evento sobre ese elemento en concreto, se
ejecutará el manejador de evento asociado.

*/

const goodButton = document.querySelector("#buton-bueno")

goodButton.addEventListener("click", () => {
  console.log("Presionaste el boton bueno")
})

/* 

Para el profesor Juan: Quedamos por la practica de eventos y manejo de escucha de 
eventos

*/



///////////////////////////// Segunda clase


function saludar(){
  alert("Hola desde la sección 3");
}

let boton = document.getElementById("boton");

/*
  Programación orientada a eventos
  Consta de la creación de un evento y la asignación de una función a dicho evento
  En este caso, se asigna la función saludar al evento click del botón
*/
boton.addEventListener("click", saludar);

let input = document.getElementById("input");

//Configurar que el evento se ejecute cuando presiono la tecla "Enter"
input.addEventListener("keydown", function(event){
  if(event.key == "Enter"){
    saludar();
  }
});

let videos = [
  {
    titulo: "Video 1",
    duracion: 30
  },
  {
    titulo: "Video 2",
    duracion: 40
  },
  {
    titulo: "Video 3",
    duracion: 50
  }
]
/**
 * Input de búsqueda
 */
let search = document.getElementById("search");

/**
 * Botón de búsqueda
 */
let searchButton = document.getElementById("searchButton");

/**
 * @function buscarVideo
 * @description Busca un video en el array de videos
 * @returns {void}
 */
function buscarVideo(){
  let searchValue = search.value;
  let result = videos.filter(video => video.titulo == searchValue);
  if(result.length > 0){
    alert("Video encontrado: " + result[0].titulo);
  } else {
    alert("Video no encontrado");
  }
}

/**
 * Ejecutar función si se hace click en el botón
 */
searchButton.addEventListener("click", buscarVideo);

/**
 * Ejecutar funcion si se presiona enter
 */
search.addEventListener("keydown", function(evento){
  if(evento.key == "Enter"){
    buscarVideo();
  }
});

/**
 * Programación funcional
 * Consta de la creación de funciones que reciben otras funciones como parámetros
 * En este caso, se crea una función que recibe un array y una función de filtrado
 */

/**
 * @function filtrarVideos
 * @description Filtra un array de videos según un criterio
 * @param {Array} videos
 * @param {Function} filtro
 * @returns {Array}
 */
function filtrarVideos(videos, filtro){
  return videos.filter(filtro);
}

/**
 * @function validarLongitudArray
 * @description Valida si un array tiene una longitud mayor a 0
 * @param {Array} array
 * @returns {Boolean}
 */
function validarLongitudArray(array){
  return array.length > 0;
}

/**
 * @function imprimirResultado
 * @description Imprime el resultado de la búsqueda
 * @returns {void}
 */
function imprimirResultado(){
  let result = filtrarVideos(videos, video => video.titulo == search.value);
  if(validarLongitudArray(result)){
    alert("Su video fue encontrado");
  } else {
    alert("No se encontró ningún video");
  }
}

/**
 * Crea una calculadora utilizando
 * - Programación orientada a eventos
 * - Programación funcional
 * - Programación orientada a objetos
 * 
 * Nota: La programación orientada a eventos debe tener interfaz gráfica
 */

// tercera clase exppplicacion de los ejercicios

/**
 * Más ejercicios de programacion funcional, programacion orientada a eventos y programacion orientada a objetos
 * 1) Crea una lista de tarea en donde puedas agregar, eliminar, editar y marcar como completada una tarea
 * 2) Crea un conversor de divisas en donde puedas convertir de una divisa a otra
 * 3) Crea un juego de memoria en donde puedas emparejar cartas
 */



///////////////////// Cuarta clase

/**
 * Expresiones regulares
 * Son una herramienta que permite realizar validacion de strings
 * Estructura de una expresion regular: /patron/modificadores 
 * Se pueden usar en JavaScript como en otros lenguajes de programacion como Python pero con algunas diferencias
 */

let texto = "Hola mundo";
let expresion = /mundo/;  /*Es una expresion regular y Siempre estan entre sleshes como en este caso: /mundo/ .Tambien son como una especie de tipos de datos y por lo tanto tienen sus propios metodos . ES como un buscador:aqui lo que se busca es que el string contenga la palabra mundo, no que el string sea mundo*/

let nombre = "Juan1";
let expresionNombre= /[A-Za-z]/; // En este caso hay una reglay va seguida del el slash y entre corchetes y se cierra el slash:indica que se pueden colocar nombres de la A a la Z en mayusculas y de la a a la z en minusculas.NO acepta espacios
console.log(expresion.test(texto));
console.log(expresionNombre.test(nombre));

let nombreCompleto = "Juan Perez";
let expresionNombreCompleto = /[A-Za-zàèìòùéíóüüé\s]/;  //Aqui se puede colocar que acepta espacios (por el \s ) y acentos por las vocales acentuadas.
console.log(expresionNombreCompleto.test(nombreCompleto));

let email = "hola@hola.com";

let expresionEmail = /[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}/;

/* Explicacion de la expresion regular Email 
/[A-Za-z0-9._-] //acepta palabras de la A a la Z en mayusculas y de la a a la z en minusculas y numeros del 0 al 9 y los signos .(punto) - (guiòn o menos) y el _ (guiòn bajo)
+  //porque hay que agregar otra regla que le sigue
@  //esta es la regla que le sigue
[A-Za-z0-9.-]  //acepta palabras de la A a la Z en mayusculas y de la a a la z en minusculas y numeros del 0 al 9 y el - (guiòn o menos)
+  //porque hay que agregar otra regla que le sigue 
\.  //backslash y punto para indicar que se quiere un dominio
[A-Za-z]  // el dominio puede ser de la A a la Z en mayusculas y de la a a la z en minusculas
{2,}/;  //indica que el dominio puede tener minimo  2 letras y maximo 8 (o nada si en donde esta el 8 no se coloca nada) 
// Para mayor informacion ver en W3Schools javascript JS RegExp Brackets.
[abc]  //acepta las letras a, b , c
[^abc]  //acepta todo menos las letras a, b , c  por el simbulo (^)
[0-9]  //acepta los numeros del 0 al 9
[^0-9]  //acepta todo menos los numeros del 0 al 9
(x\+y)  //acepta x y y
(x|y)  //acepta x o y
*/
console.log(expresionEmail.test(email));

let telefono = "1234567890";
let expresionTelefono = /\d{10}/;  // \d{10} acepta 10 digitos del 0 al 9
// \w encuentra palabras con el caractere w 
// \s encuentra espacios en blanco

console.log(expresionTelefono.test(telefono)); //true porque acepta minimo 10 digitos del 0 al 9 para que acepte un maximo hay que colovar una coma (,) despues del 10 

/* IMPORTANTE: Hay que tener cuidado con las expresiones regulares ya que se pueden usar solamente para hacer variaciones en strings o mejor dicho para validar strings y NO para objetos
,se pueden validar VALORES de un objeto siempre y cuando sean de tipo string. NO se puede validar un Array entero solo cada uno de los elementos.
*/
let fecha = "12/12/2021"; // se pude validar porque es un string a pesar de averlo llamado fecha
let expresionFecha = /\d{2,2}\/\d{2,2}\/\d{4,4}/; // aquì se està diciendo que acepte minimo dos dígitos y maximo 2 digitos seguidos de ( \/ ) backslash (este indica que el lo que escribo luego lo debes colocar tal cual que en este caso es el slash / de la fecha que separa los numeros) y minimo dos dígitos y maximo 2 digitos seguidos de ( \/ ) backslash y minimo cuatro dígitos y maximo 4 digitos. 
console.log(expresionFecha.test(fecha)); //true
// Contrasena con minimo una letra minuscula, mayuscula, un numero y un caracter especial
let password = "Aa1@123456";
let expresionPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}$/;
// /^ indica el inicio de la regla
// $ indica el final de la regla
// /^(?=.*[a-z]) indica que en qualquier parte de la regla debe haber letras minusculas de la a la z,
// (?=.*[A-Z]) indica que en qualquier parte de la regla debe haber letras mayusculas de la A la Z,
// (?=.*\d) indica que en qualquier parte de la regla debe haber numeros del 0 al 9,
// (?=.*[$@$!%*?&]) indica que en qualquier parte de la regla debe haber un caracter especial,
// [A-Za-z\d$@$!%*?&]{8,} indica que en qualquier parte de la regla debe haber minimo 8 caracteres y maximo 32 caracteres


// Modificadores
"hola" == "Hola"

let saludo = "Hola";
let saludoRegex = /hola/i; // i es para ignorar mayusculas y minusculas en la busqueda
console.log(saludoRegex.test(saludo));

/**
 * Importar y exportar modulos
 * Permite dividir el codigo en diferentes archivos
 * Exportar: Se exporta una variable, una funciòn o clase
 * Importar: Se importa una variable, una funciòn o clase
 */


/*Aqui tengo una funcion que es una variable y adentro tiene otra funcion ( => ) 
  a la vez y tengo data que es un string que dice Hola*/
let funcion = () => {
  console.log("Hola");
}
let data = "Hola";

//Node.js
export { funcion, data }; //Aqui estoy exportando la variable(objeto) que contiene funcion y la variable(objeto) que contiene data. Las exportaciones se utilizan para ser importadas en otros archivos. Hay dos formas de exportarlos con: Node.js y Vanilla JS (este es el que se utiliza)

// Vanilla JS
module.exports = { funcion, data };

// Anexos import.js y import.html en esta clase

/**
 * 1)
 * Proyectos para la sección 3
 * Crea un formulario de registro que pidan los siguientes datos:
 * - Nombre
 * - Apellido
 * - Correo electrónico
 * - Contraseña
 * - Confirmar contraseña
 * 
 * Validaciones:
 * - Nombre y apellido: Solo letras y espacios
 * - Correo electrónico: Debe tener un formato válido
 * - Contraseña: Mínimo una letra minúscula, una mayúscula, un número, un caracter especial (!$-_.,) y mínimo 8 caracteres
 * - Confirmar contraseña: Debe ser igual a la contraseña
 * 
 * Debes crear una interfaz gráfica para el formulario y mostrar mensajes de error en caso de que el
 * usuario ingrese datos incorrectos.
 * 
 * 2) Crea una lista de tareas en donde puedas agregar, eliminar, editar y marcar como completada una tarea
 * Debe de tener una interfaz gráfica
 * 
 * 3) Crea un juego de piedra papel o tijera en donde puedas jugar contra la computadora,
 * que te muestre la cantidad de victorias, derrotas, empates y un historial de las ultimas
 * 5 partidas jugadas (debe mostrar que jugaste, que jugó la computadora)
 * 
 * Fecha de entrega: 22 de noviembre
 */