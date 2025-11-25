export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  return (
    <div
      className={`flex justify-between items-center p-2 border rounded ${
        todo.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.text}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          className="text-blue-500 hover:underline"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="text-red-500 hover:underline"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
