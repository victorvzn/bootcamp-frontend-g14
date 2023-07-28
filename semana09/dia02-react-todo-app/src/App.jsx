import { useState } from "react"

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
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    const value = event.target.value
    console.log(value)
    setInput(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Estoy funcionando....')

    const newTodo = {
      "id": crypto.randomUUID(),
      "title": input,
      "completed": false
    }

    setTodos([...todos, newTodo])
  }

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

  return (
    <>
      <main className="w-full max-w-sm mx-auto mt-10 rounded-lg bg-yellow-100 border border-yellow-600 p-4 shadow-lg">
        <h1 className="text-2xl font-bold">TODO APP</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full border my-3 p-3"
            placeholder="¿Qué deseas hacer hoy?"
            onChange={handleChange}
          />
        </form>

        <section className="mt-5">
          <ul className="flex flex-col gap-3">
            {todos.map(todo => {
              return (
                <li
                  key={todo.id}
                  className={`flex text-stone-900 ${todo.completed ? 'line-through' : ''}`}
                >
                  <input
                    type="checkbox"
                    className="mr-4"
                    data-id={todo.id}
                    checked={todo.completed}
                    onChange={handleCompleted}
                  />
                  <span className="pr-3">{todo.title}</span>
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
