/*const form = document.getElementById("registro");
const toggleModoOscuro = document.getElementById("toggleModoOscuro");
const button = document.getElementById("button"); 
const body = document.body;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const nombreUsuario = document.getElementById("nombreUsuario").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const role = document.getElementById("role").value;
  const admin = document.getElementById("admin");
  const user = document.getElementById("user");
  const registrar = document.getElementById("registrar");
  const login = document.getElementById("login");  


// Expresión regular para validar nombre, apellido y nombre de usuario
  const expresionNombre = /^[A-Za-z-òèìòùéíóü\s]/;
  const expresionApellido = /^[A-Za-z-òèìòùéíóü\s]/;
  const expresionNombreUsuario = /^[A-Za-z-òèìòùéíóü\s]/;
// Expresión regular para validar el email, la password y la confirmacion de la password
  const expresionEmail = /^[A -Za-z0-9_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}/;
  const expresionPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}$/;
  const expresionConfirmPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}$/;

  if (!nombre) {
    alert("Ingrese su nombre");
    return; 
  }
  if (!apellido) {
    alert("Ingrese su apellido");
    return;   
  }
  if (!nombreUsuario) {
    alert("Ingrese su nombre de usuario");
    return;
  }
  if (!email) {
    alert("Ingrese su email");
    return;
  }
  if (!password) {
    alert("Ingrese su contraseña");
    return;
  }
  if (!confirmPassword){
    alert("Confirme su contraseña");
    return;
  }
    
  if (!expresionPassword) {
    alert("La contrasena debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número'");
    return;
  }
  if (!expresionConfirmPassword) {
    alert("La confirmacion de la contrasena es incorrecta");
    return;
  }
  if (password !== confirmPassword) {
    alert("Las contrasenas no coinciden");
    return;
  }
  if (expresionNombre && expresionApellido && expresionNombreUsuario && expresionEmail && expresionPassword && expresionConfirmPassword && password === confirmPassword) {
  if (expresionNombre.test(nombre) && expresionApellido.test(apellido) && expresionNombreUsuario.test(nombreUsuario) && expresionEmail.test(email) && expresionPassword.test(password) && expresionConfirmPassword.test(confirmPassword)) {
    alert("Registro exitoso");
  } else {
  if (!expresionNombre.test(nombre)) {
    alert("El nombre es incorrecto");
  } else if (!expresionApellido.test(apellido)) {
    alert("El apellido es incorrecto");
  } else if (!expresionNombreUsuario.test(nombreUsuario)) {
    alert("El nombre de usuario es incorrecto");
  } else if (!expresionEmail.test(email)) {
    alert("El email es incorrecto");
  } else if (!expresionPassword.test(password)) {
    alert("La password debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial");
  } else if (!expresionConfirmPassword.test(confirmPassword)) {
    alert("La confirmacion de la contrasena es incorrecta");
  } else if (password !== confirmPassword) {
    alert("Las contrasenas no coinciden");
  }
  }
  }
});


const usuario = JSON.parse(localStorage.getItem("usuario")) || [];
const usuarioExistente = usuario.some(usuario => usuario.nombreUsuario === nombreUsuario) || usuario.some(usuario => usuario.email === email);

  if (usuarioExistente) {
  alert("El nombre de usuario ya existe,inicie sesion");
  window.location.href = "login.html";
  return;
  }
  usuario.push(usuario);
  localStorage.setItem("usuario", JSON.stringify(usuario));
  alert("Registro exitoso, inicie sesion");
  window.location.href = "login.html";

*/

// Obtener elementos del DOM
const formRegistro = document.getElementById('registro');
const toggleModoOscuro = document.getElementById('toggleModoOscuro');
const body = document.body;

// Expresiones regulares para validación
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;


// Manejar envío del formulario
formRegistro.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar envío por defecto

  // Capturar valores de los campos
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const nombreUsuario = document.getElementById('nombreUsuario').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validar email
  if (!regexEmail.test(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }

  // Validar contraseñas
  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden.');
    return;
  }

  if (!regexPassword.test(password)) {
    alert('La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un símbolo especial.');
    return;
  }

  // Simular envío al servidor
  console.log('Enviando datos:', { nombre, apellido, nombreUsuario, email, password });

  // Redirigir a la página de login
  alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
  window.location.href = 'login.html';
});

//Para cambiar el modo oscuro
toggleModoOscuro.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");

  if (document.body.classList.contains("modo-oscuro")) {
    toggleModoOscuro.textContent = "Modo Claro";
  } else {
    toggleModoOscuro.textContent = "Modo Oscuro";
  }
});


