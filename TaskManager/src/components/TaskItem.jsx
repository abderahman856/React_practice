export default function TaskItem({ task, onDelete, onEdit }) {
  return (
    <div className="p-3 bg-white shadow rounded-lg flex justify-between items-center">
      <p className="text-lg">{task.text}</p>

      <div className="flex gap-4">
        <button
          className="text-yellow-600 font-bold"
          onClick={onEdit}
        >
          Edit
        </button>

        <button
          className="text-red-600 font-bold"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
