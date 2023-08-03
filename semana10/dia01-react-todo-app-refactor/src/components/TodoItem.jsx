const TodoItem = ({ todo, onCompleted, onRemoveTodo }) => {
  return (
    <li className="flex">
      <input
        type="checkbox"
        className="mr-4"
        data-id={todo.id}
        checked={todo.completed}
        onChange={onCompleted}
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
          onClick={onRemoveTodo}
        >
          ❌
        </button>
      </div>
    </li>
  )
}

export default TodoItem