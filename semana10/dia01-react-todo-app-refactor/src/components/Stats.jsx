const Stats = ({ todos, onClearTodos  }) => {
  const completedTodos = todos.filter(todo => todo.completed === true)

  return (
    <div className="flex justify-between">
      <span className="">{completedTodos.length} / {todos.length}</span>
      <button
        className="bg-blue-500 rounded-lg px-2 py-1 text-white"
        onClick={onClearTodos}
      >
        Limpiar tareas completadas
      </button>
    </div>
  )
}

export default Stats