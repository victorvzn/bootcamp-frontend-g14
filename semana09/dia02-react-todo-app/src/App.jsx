import { useState } from "react"

function App() {

  const DEFAULT_TODOS = [
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)

  return (
    <>
      <h1 className="text-6xl font-bold underline">
        TODO APP
      </h1>

      {/* {JSON.stringify(todos)} */}

      <ul>
        {todos.map(todo => {
          return <li key={todo.id}>{todo.title}</li>
        })}
      </ul>

      {/* <li>delectus aut autem</li>, <li>quis ut ....</li>] */}
    </>
  )
}

export default App
