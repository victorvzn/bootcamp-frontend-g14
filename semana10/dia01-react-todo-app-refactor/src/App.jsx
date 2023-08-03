import { useState } from "react"

import Header from './components/Header'
import Form from "./components/Form"
import Stats from "./components/Stats"

function App() {

  const DEFAULT_TODOS = [
    {
      "id": '1',
      "title": "delectus aut autem",
      "completed": true
    },
    {
      "id": '2',
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "id": '3',
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "id": '4',
      "title": "et porro tempora",
      "completed": true
    },
    {
      "id": '5',
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)


  const handleCompleted = (event) => {
    // console.log(event)
    const isChecked = event.target.checked
    const idSeleted = event.target.dataset.id

    const newTodos = todos.map(todo => {
      if (todo.id === idSeleted) {
        return { ...todo, completed: isChecked }
      }
      return todo
    })

    console.log(newTodos)

    setTodos(newTodos)
  }

  const handleRemoveTodo = (event) => {
    const idSelected = event.target.dataset.id

    const newTodos = todos.filter(todo => todo.id !== idSelected)

    console.log(newTodos)

    setTodos(newTodos)
  }

  const handleClearTodos = (event) => {
    const newTodos = todos.filter(todo => todo.completed === false)

    setTodos(newTodos)
  }

  const handleSubmit = (newTodo) => setTodos([...todos, newTodo])

  return (
    <>
      <main className="w-full max-w-sm mx-auto mt-10 rounded-lg bg-yellow-100 border border-yellow-600 p-4 shadow-lg">
        <Header title="TODO APP" /> 

        <Form onSubmit={handleSubmit} />

        <Stats
          todos={todos}
          onClearTodos={handleClearTodos}
        />

        <section className="mt-5">
          <ul className="flex flex-col gap-3">
            {todos.map(todo => {
              return (
                <li key={todo.id} className="flex">
                  <input
                    type="checkbox"
                    className="mr-4"
                    data-id={todo.id}
                    checked={todo.completed}
                    onChange={handleCompleted}
                  />
                  <div className="flex justify-between items-center w-full">
                    <div
                      className={`text-stone-900 ${todo.completed ? 'line-through' : ''}`}
                    >
                      {todo.title}
                    </div>
                    <button
                      className="font-bold bg-red-300 rounded-lg px-2 py-2 text-white"
                      data-id={todo.id}
                      onClick={handleRemoveTodo}
                    >
                      ❌
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
