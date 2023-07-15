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
  const value = event.target.value
  
  if (value === '') {
    return
  }
  
  if (event.key === 'Enter') {
    // console.log('agregando nueva tarea')
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

  // TODO: añadir el contenido "No hay tareas registradas" si no hay tareas en el array
  if (tasks.length === 0) {
    taskList.innerHTML = '<li class="p-4 text-sm bg-yellow-100 text-yellow-800 border-red-800 rounded-lg text-center font-medium">No hay tareas registradas</li>'
    return
  }

  tasks.forEach(function (task, index) {
    // console.log(task)
    lista = lista + `
      <li class="py-1 flex justify-between align-center gap-3">
        <input
          type="checkbox"
          onchange="checkTask(event, ${index})"
          ${task.done ? 'checked' : ''}
        />
        <div class="w-full">${task.title}</div>
        <button class="text-red-700 border border-red-700 font-medium rounded-full text-sm p-1 px-3 hover:bg-red-700 hover:text-white transition" onclick="removeTask(event, ${index})">Borrar</button>
      </li>
    `
  })

  taskList.innerHTML = lista
}

renderTasks()
