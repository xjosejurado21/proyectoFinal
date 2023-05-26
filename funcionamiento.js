const squares = document.querySelectorAll(".square");
let currentPlayer = "🤺";


squares.forEach(square => {
  square.addEventListener("click", () => {
    if (!square.innerHTML) {
      square.innerHTML = currentPlayer;
      if (checkWin(currentPlayer)) {
        alert(`¡Jugador ${currentPlayer} ha ganado!`);
        return;
      }
      if (checkDraw()) {
        alert("¡Empate!");
        return;
      }
      currentPlayer = currentPlayer === "🤺" ? "🤸" : "🤺";
    }
  });
});

function checkWin(playerSymbol) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      squares[a].innerHTML === playerSymbol &&
      squares[b].innerHTML === playerSymbol &&
      squares[c].innerHTML === playerSymbol
    ) {
      return true;
    }
  }
  return false;
}
//Para verificar si hay empate
function checkDraw() {
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i].innerHTML) {
      return false;
    }
  }
  return true;
}

// LocalStorage
const localInput = document.getElementById('localInput');
const localButton = document.getElementById('localButton');
const localValue = document.getElementById('localValue');

localButton.addEventListener('click', () => {
  localStorage.setItem('localData', localInput.value);
  localValue.textContent = localStorage.getItem('localData');
});

localValue.textContent = localStorage.getItem('localData');

// SessionStorage
const sessionInput = document.getElementById('sessionInput');
const sessionButton = document.getElementById('sessionButton');
const sessionValue = document.getElementById('sessionValue');

sessionButton.addEventListener('click', () => {
  sessionStorage.setItem('sessionData', sessionInput.value);
  sessionValue.textContent = sessionStorage.getItem('sessionData');
});

sessionValue.textContent = sessionStorage.getItem('sessionData');
window.onload = function() {
  alert("Nombre: Jose Jurado Florido\nCurso: 1ºDAM");
}
document.getElementById('mode-switch').addEventListener('click', function() {
  const body = document.body;
  if (body.classList.contains('dark')) {
      body.classList.remove('dark');
      this.innerHTML = 'Cambiar a modo dia';
  } else {
      body.classList.add('dark');
      this.innerHTML = 'Cambiar a modo noche';
  }
});

function mostrarInformacion() {
  var nombreDelAlumno = "Jose Jurado Florido";
  var curso = "1 DAM";
  var requisitos = "1. Menú consistente en todas las páginas, con acceso a todas ellas y apertura de un modal específico.\n2. Tres páginas mínimas: inicio, ajustes y una adicional.\n3. Los ajustes se mantienen al recargar la página usando almacenamiento web.\n4. Modal que identifica alumno y curso, explicando las obligaciones ocultas.\n5. Uso opcional de XML y XSL.\n6. JavaScript para leer/modificar contenido y mostrar mensajes en la consola.\n7. Elementos HTML para ingresar datos, como formularios.\n8. Nombre de usuario siempre visible en las esquinas del viewport, mostrando 'sin identificar' si no se ha ingresado. Se olvida al cerrar sesión.";

  var mensaje = "Nombre del Alumno: " + nombreDelAlumno + "\nCurso: " + curso + "\nRequisitos:\n" + requisitos;
  alert(mensaje);
}

//Funcion viewPort
function mostrarNombre() {
  var usernameB = document.getElementById('username-display');
  var username = localStorage.getItem('username');
  if (usernameB) {
    usernameB.textContent = username || 'No identificado';
  }
}

window.addEventListener('DOMContentLoaded', function() {
  const usernameB = document.getElementById('username-display');
  const savedN = localStorage.getItem('username');

  if (savedN) {
    usernameB.textContent = savedN;
    document.getElementById('username-input').value = savedN;
  } else {
    usernameB.textContent = 'No identificado';
  }
});

const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', function() {
  const usernameInput = document.getElementById('username-input');
  const username = usernameInput.value;
  if (username) {
    localStorage.setItem('username', username);
    document.getElementById('username-display').textContent = username;
    usernameInput.value = '';
  }
});
mostrarNombre();
document.getElementById('mode-switch').addEventListener('click', function() {
  const body = document.body;
  if (body.classList.contains('dark')) {
    body.className = '';
    this.innerHTML = 'Cambiar a modo noche';
    sessionStorage.setItem('theme', ''); // changed localStorage to sessionStorage
  } else {
    body.className = 'dark';
    this.innerHTML = 'Cambiar a modo dia';
    sessionStorage.setItem('theme', 'dark'); // changed localStorage to sessionStorage
  }
});
 // On page load, get the stored theme if it exists
 window.addEventListener('DOMContentLoaded', (event) => {
  var savedTheme = sessionStorage.getItem('theme'); // Changed localStorage to sessionStorage
  if(savedTheme) {
    document.body.className = savedTheme;
    document.getElementById('mode-switch').innerText = savedTheme == 'dark' ? 'Cambiar a modo dia' : 'Cambiar a modo noche';
  }
});

function cambiarNombre() {
  var nuevoNombre = document.getElementById("nuevoNombreInput").value;
  sessionStorage.setItem("nombre", nuevoNombre);
  cargarNombre();
}

function cargarNombre() {
  var nombre = sessionStorage.getItem("nombre");
  if (nombre) {
    document.getElementById("nombreCaja").textContent = "Nombre: " + nombre;
  }
}

//guardar nombre
function guardarNombre() {
  var nombre = document.getElementById("nombreUsuario").value;
  localStorage.setItem("nombreUsuario", nombre);
  var nombreUsuarioBox = document.getElementById("nombreUsuarioBox");
  nombreUsuarioBox.textContent = nombre ? nombre : "Sin identificar";
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}




   
   
       
    




