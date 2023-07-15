const taskInput = document.querySelector('.task__input')
const taskList = document.querySelector('.task__list')
const taskClear = document.querySelector('.task__clear')

// localStorage.setItem('frutas', 'manzanas, peras, plátanos')
// console.log(localStorage.getItem('frutas'))

// let tasks = [
//   {
//     title: 'Estudiar Javascript',
//     done: false
//   },
//   {
//     title: 'Salir al receso a las 9:00pm',
//     done: true
//   },{
//     title: 'Realizar el reto del fin de semana',
//     done: false
//   }
// ]

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

taskClear.addEventListener('click', function(event) {
  const completedTasks = tasks.filter(task => task.done === false)

  tasks = completedTasks

  renderTasks()

  console.log(completedTasks)

  localStorage.setItem('tasks', JSON.stringify(tasks))
})

taskInput.addEventListener('keypress', function(event) {
  // Lógica de la app
  // console.log(event)
  if (event.key === 'Enter') {
    // console.log('agregando nueva tarea')
    const value = event.target.value
    // console.log(value)

    const newTask = {
      title: value,
      done: false
    }

    console.log(newTask)

    tasks.push(newTask)

    localStorage.setItem('tasks', JSON.stringify(tasks))

    console.log(tasks)

    taskInput.value = ''

    renderTasks()
  }
})

function checkTask(event, currentIndex) {
  console.log('Funciona!')
  // TODO: Hacer que el todo se tache usando solo Javascript
  event.target.parentElement.classList.toggle('isChecked')
  const taskSelected = tasks[currentIndex]
  taskSelected.done = !taskSelected.done

  console.log(tasks)

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeTask(event, currentIndex) {
  console.log('Eliminando...', currentIndex)
  event.target.parentElement.remove()
  const newTasks = tasks.filter((task, index) => index !== currentIndex)
  console.log(newTasks)
  tasks = newTasks

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTasks() {
  let lista = ''
  tasks.forEach(function (task, index) {
    // console.log(task)
    lista = lista + `
      <li class="list-group-item d-flex justify-content-between">
        <input
          class="form-check-input me-1"
          type="checkbox"
          onchange="checkTask(event, ${index})"
          ${task.done ? 'checked' : ''}
        />
        <div class="form-check-label">${task.title}</div>
        <button class="btn btn-danger btn-sm" onclick="removeTask(event, ${index})">Borrar</button>
      </li>
    `
  })

  taskList.innerHTML = lista
}

renderTasks()
