// Obtener elementos del DOM
const formPerfil = document.getElementById('formulario');
const toggleModoOscuro = document.getElementById('toggleModoOscuro');
const body = document.body;

// Expresión regular para validar email
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// Manejar envío del formulario
formPerfil.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar envío por defecto

  // Capturar valores de los campos
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const nombreUsuario = document.getElementById('nombreUsuario').value;
  const email = document.getElementById('email').value;

  // Validar email
  if (!regexEmail.test(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }

  // Validar nombre de usuario
  if (nombreUsuario.length < 3) {
    alert('El nombre de usuario debe tener al menos 3 caracteres.');
    return;
  }

  // Simular actualización del perfil
  console.log('Actualizando perfil:', { nombre, apellido, nombreUsuario, email });

  // Redirigir a la página de inicio
  alert('¡Perfil actualizado exitosamente!');
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

});