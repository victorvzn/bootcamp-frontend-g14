const taskInput = document.querySelector('.task__input')
const taskList = document.querySelector('.task__list')

const tasks = []

taskInput.addEventListener('keypress', function(event) {
  // Lógica de la app
  // console.log(event)
  if (event.key === 'Enter') {
    // console.log('agregando nueva tarea')
    const value = event.target.value
    // console.log(value)

    tasks.push(value)

    // console.log(tasks)

    taskInput.value = ''

    renderTasks()
  }
})

function checkTarea(event) {
  console.log('Funciona!')
  // TODO: Hacer que el todo se tache usando solo Javascript
}

function renderTasks() {
  let lista = ''
  tasks.forEach(function (task) {
    // console.log(task)
    lista = lista + `
      <li>
        <input type="checkbox" onchange="checkTarea()" />
        <span>${task}</span>
        <button>Borrar</button>
      </li>
    `
  })

  taskList.innerHTML = lista
}

