const taskInput = document.querySelector('.task__input')
const taskList = document.querySelector('.task__list')

// localStorage.setItem('frutas', 'manzanas, peras, plátanos')
// console.log(localStorage.getItem('frutas'))

// let tasks = [
//   {
//     title: 'Estudiar Javascript',
//     completado: false
//   },
//   {
//     title: 'Salir al receso a las 9:00pm',
//     completado: true
//   },{
//     title: 'Realizar el reto del fin de semana',
//     completado: false
//   }
// ]

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

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
      <li>
        <input
          type="checkbox"
          onchange="checkTask(event, ${index})"
          ${task.done ? 'checked' : ''}
        />
        <span>${task.title}</span>
        <button onclick="removeTask(event, ${index})">Borrar</button>
      </li>
    `
  })

  taskList.innerHTML = lista
}

renderTasks()
