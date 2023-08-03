import { useState } from "react"

const Form = ({ onSubmit }) => {
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    const value = event.target.value
    console.log(value)
    setInput(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input === '') return

    const newTodo = {
      "id": crypto.randomUUID(),
      "title": input,
      "completed": false
    }

    onSubmit(newTodo)

    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full border my-3 p-3"
        placeholder="¿Qué deseas hacer hoy?"
        required
        value={input}
        onChange={handleChange}
      />
    </form>
  )
}

export default Form