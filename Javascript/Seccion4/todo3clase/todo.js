/**
 * Arreglo que almacena las tareas
 */
let tasks = [];

/**
 * Verificar si existen tareas en LocalStorage
 */
if(localStorage.getItem("tasks") != null){
  tasks = JSON.parse(localStorage.getItem("tasks"));
  showTasks();
}

/**
 * LocalStorage
 * Es un objeto que permite almacenar información en el navegador del usuario
 */

/**
 * @function addTask
 * @description Función que agrega una tarea al arreglo de tareas
 */
function addTask() {
  let task = document.getElementById("task").value;
  tasks.push(task);
  // Almacenar en LocalStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById("task").value = "";
  showTasks();
}

/**
 * @function showTasks
 * @description Función que muestra las tareas en el DOM
 */
function showTasks() {
  let list = document.getElementById("list");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="removeTask(${index})">X</button>`;
    list.appendChild(li);
  });
}

/**
 * @function removeTask
 * @description Función que elimina una tarea del arreglo de tareas
 * @param {number} index - Índice de la tarea a eliminar
 */
function removeTask(index) {
  tasks.splice(index, 1);
  // Actualizar LocalStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}

/**
 * @function clearTasks
 * @description Función que elimina todas las tareas del arreglo de tareas y de LocalStorage
 */
document.getElementById("delete").addEventListener("click", () => {
  localStorage.removeItem("tasks");
  tasks = [];
  showTasks();
});

document.getElementById("add").addEventListener("click", addTask);

/**
 * SessionStorage
 * Es un objeto que permite almacenar información en el navegador del usuario,
 * pero esta información se elimina al cerrar la pestaña
 */

/**
 * Cookies
 * Son pequeños archivos que se almacenan en el navegador del usuario
 */

/**
 *  Ejemplo de uso de Cookies
 *  document.cookie("nombre=valor; expires=fecha; path=directorio");
 */

//Ejemplo de una cookie que se elimina en 1 día
let fechaActual = new Date();
let fechaExpiracion = new Date(fechaActual.getTime() + 24 * 60 * 60 * 1000);
document.cookie = `name=Hola; expires=${fechaExpiracion.toUTCString()}; path=/`;

console.log(document.cookie);