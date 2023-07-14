const taskInput = document.querySelector('.task__input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuando hagamos click en el botón "Añadir tarea"

  // const button = document.createElement('button')
  // button.innerText = 'hola'
  
  const li = document.createElement('li')
  
  li.innerText = taskInput.value

  // document.body.appendChild(button)
  taskList.appendChild(li)
})