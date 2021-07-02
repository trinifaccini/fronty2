let listadoTodos = [
    {
        description: "Mi hermosa tarea",
        createdAt: "19/04/20"
    }
];

{/* <li class="tarea">
      <div class="not-done"></div>
      <div class="descripcion">
        <p class="nombre">Mi hermosa tarea</p>
        <p class="timestamp">Creada: 19/04/20</p>
      </div>
    </li> */}

const tareasPendientes = document.querySelector('.tareasPendientes');

function renderizarTodos() {
    // tareasPendientes.innerHTML
    console.log("deberiamos renderizar todas las todos del array");
}

renderizarTodos()