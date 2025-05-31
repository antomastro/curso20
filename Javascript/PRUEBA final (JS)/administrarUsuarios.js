/*let usuario = {nombre:"", role:["admin", "user"]};

function administrarUsuarios() {
  let admin = "admin";
  let user = "user";
  console.log(admin);
  console.log(user);
} 

administrarUsuarios();

//funcion para mostrar el usuario
function mostrarUsuario( usuario) {
  document.getElementById("nombreUsuario").textContent = usuario.nombre;
  const role = document.getElementById("role");
  usuario.role.forEach((rol) => {
    let li = document.createElement("li");
    li.textContent = rol;
    role.appendChild(li);
  });
  
  


//mostrar o ocultar el usuario segun el role

  if (usuario.role == "admin") {
    document.getElementById("admin").classList.remove("ocultar");
  }

  
}
show = mostrarUsuario(usuario);

*/



// Simular datos de usuario cargados
const usuarioData = {
  nombre: 'Anto',
  apellido: 'Mastro',
  correo: 'antomastro2009@gmail.com',
  role: 'admin',
  id: 123,
  fechaCreacion: '2024-01-01',
  fechaActualizacion: '2024-12-01',
  ultimoAcceso: '2024-12-09',
};

// Cargar datos en el DOM
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nombreUsuario').textContent = usuarioData.nombre;
  document.getElementById('apellidoUsuario').textContent = usuarioData.apellido;
  document.getElementById('correoUsuario').textContent = usuarioData.correo;
  document.getElementById('roleUsuario').textContent = usuarioData.role;
  document.getElementById('idUsuario').textContent = usuarioData.id;
  document.getElementById('fechaCreacionUsuario').textContent = usuarioData.fechaCreacion;
  document.getElementById('fechaActualizacionUsuario').textContent = usuarioData.fechaActualizacion;
  document.getElementById('ultimoAcceso').textContent = usuarioData.ultimoAcceso;
});

//Para cambiar el modo oscuro
const toggleModoOscuro = document.getElementById("toggleModoOscuro");
const body = document.body;
toggleModoOscuro.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");
  if (document.body.classList.contains("modo-oscuro")) {
    toggleModoOscuro.textContent = "Modo Claro";
  } else {
    toggleModoOscuro.textContent = "Modo Oscuro";
  }
});