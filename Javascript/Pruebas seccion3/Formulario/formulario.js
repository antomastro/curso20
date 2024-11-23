const form = document.getElementById("formularioDeRegistro");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("password").value;

// Expresión regular para validar el nombre y el apellido
  const expresionNombre = /[A-Za-z-òèìòùéíóü\s]/;
  const expresionApellido = /[A-Za-z-òèìòùéíóü\s]/;
// Expresión regular para validar el email, la password y la confirmacion de la password
  const expresionEmail = /[A -Za-z0-9_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}/;
  const expresionPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}$/;
  const expresionConfirmPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}$/;

  if (!expresionNombre) {
    alert("Ingrese su nombre");
    return; 
  }
  if (!expresionApellido) {
    alert("Ingrese su apellido");
    return;   
  }
  if (!expresionEmail) {
    alert("Ingrese su email");
    return;
  }
  if (!password) {
    alert("Ingrese su contraseña");
    return;
  }
  if (!expresionPassword) {
    alert("La password debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número'");
    return;
  }
  if (!expresionConfirmPassword) {
    alert("La confirmacion de la password es incorrecta");
    return;
  }
  if (password !== confirmPassword) {
    alert("Las passwords no coinciden");
    return;
  }
  if (expresionNombre && expresionApellido && expresionEmail && expresionPassword && expresionConfirmPassword && password === confirmPassword) {
  if (expresionNombre.test(nombre) && expresionApellido.test(apellido) && expresionEmail.test(email) && expresionPassword.test(password) && expresionConfirmPassword.test(confirmPassword)) {
    alert("Registro exitoso");
  } else {
  if (!expresionNombre.test(nombre)) {
    alert("El nombre es incorrecto");
  } else if (!expresionApellido.test(apellido)) {
    alert("El apellido es incorrecto");
  } else if (!expresionEmail.test(email)) {
    alert("El email es incorrecto");
  } else if (!expresionPassword.test(password)) {
    alert("La password debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial");
  } else if (!expresionConfirmPassword.test(confirmPassword)) {
    alert("La confirmacion de la password es incorrecta");
  } else if (password !== confirmPassword) {
    alert("Las passwords no coinciden");
  } else {
    alert("Registro exitoso");
  }
  }
  }
});
console.log(formularioDeRegistro);