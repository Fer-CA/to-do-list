const btnAdd = document.getElementById("add");
const listado = document.getElementById("listado");
const realizadas = document.getElementById("realizadas");
let total = document.getElementById("total");

let id = 3; 
let toDolist = [
    { id: 1, descripcion: "Limpiar arenero", estado: true },
    { id: 2, descripcion: "Tomar desayuno", estado: false },
    { id: 3, descripcion: "Estudiar", estado: false }
];

btnAdd.addEventListener("click", () => {
    const tarea = document.getElementById("tarea").value;
    if (tarea !== '') {
        id++;
        const objetoTarea = { id: id, descripcion: tarea, estado: false };
        toDolist.push(objetoTarea);
        listar(toDolist);
        document.getElementById("tarea").value = "";
    } else {
        alert('Ingresa tus tareas primero :c');
    }
});

const listar = () => {
    total.innerHTML = toDolist.length;
    realizadas.innerHTML = '';
    let contador = 0;
    let html = '';
    for (const task of toDolist) {
        html += `
        <tr>
            <td ${task.estado ? 'style="text-decoration:line-through"' : ''}>${task.id}</td>
            <td ${task.estado ? 'style="text-decoration:line-through"' : ''}>${task.descripcion}</td>
            <td ${task.estado ? 'style="visibility:hidden"' : ''}>
                <input type="checkbox" onclick="cambiarEstado(${task.id})" ${task.estado ? 'checked' : ''}>
            </td>
            <td>
                <button onclick="eliminar(${task.id})" class="btn"> X </button>
            </td>
        </tr>
        `;
        if (task.estado) { contador++; }
    }
    realizadas.innerHTML = contador;
    listado.innerHTML = html;
};

const eliminar = (id) => {
    toDolist = toDolist.filter((ele) => ele.id !== id);
    listar(toDolist);
};

const cambiarEstado = (id) => {
    toDolist = toDolist.map((ele) => (ele.id === id ? { ...ele, estado: !ele.estado } : ele));
    listar(toDolist);
};


listar(toDolist);

