const Stats = () => {
  return (
    <div className="flex justify-between">
      <span className="">{completedTodos()} / {todos.length}</span>
      <button
        className="bg-blue-500 rounded-lg px-2 py-1 text-white"
        onClick={handleClearTodos}
      >
        Limpiar tareas completadas
      </button>
    </div>
  )
}

export default Stats