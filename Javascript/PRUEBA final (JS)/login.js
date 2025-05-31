/*const { usuario } = require("./registro");

const form = document.getElementById("login");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value; 

  // Expresión regular para validar email y contrasena
  const expresionEmail = /^[A -Za-z0-9_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}/;
  const expresionPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}$/;

  if (!email) { 
    alert("Ingrese su email");
  } else if (!expresionEmail.test(email)) {
    alert("El email es incorrecto");
  } else if (!password) {
    alert("Ingrese su contrasena");
  } else if (!expresionPassword.test(password)) {
    alert("La contrasena debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial");
  } else {
    alert("Login exitoso");
    addEventListener("click", (ok) => {
      window.location.href = "home.html";
    })
  }
}); 


*/




// Obtener elementos del DOM
const formLogin = document.getElementById('login');
const toggleModoOscuro = document.getElementById('toggleModoOscuro');
const body = document.body;

// Expresión regular para validar email
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// Manejar envío del formulario
formLogin.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar envío por defecto

  // Capturar valores de los campos
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validar email
  if (!regexEmail.test(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }

  // Validar contraseña
  if (password.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres.');
    return;
  }

  // Simular inicio de sesión
  console.log('Iniciando sesión con:', { email, password });

  // Redirigir a la página de inicio
  alert('¡Inicio de sesión exitoso!');
  window.location.href = 'home.html';
});

//Para cambiar el modo oscuro
toggleModoOscuro.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");

  if (document.body.classList.contains("modo-oscuro")) {
    toggleModoOscuro.textContent = "Modo Claro";
  } else {
    toggleModoOscuro.textContent = "Modo Oscuro";
  }

});usuario.nombreUsuario === nombreUsuario || usuario.mail === ("email");