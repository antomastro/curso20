// Obtener elementos
const toggleModoOscuro = document.getElementById('toggleModoOscuro');
const body = document.body;

// Manejar selección de opciones
document.getElementById('escoger').addEventListener('change', (event) => {
  const seleccion = event.target.value;
  if (seleccion === 'juego') {
    alert('Iniciando el juego...');
  }
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