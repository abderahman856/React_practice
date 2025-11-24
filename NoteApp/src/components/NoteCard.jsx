export default function NoteCard({ note, onDelete, onPin, onEdit }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md relative">
      
      <button
        onClick={() => onPin(note.id)}
        className="absolute top-2 right-2 text-yellow-500"
      >
        {note.pinned ? "📌" : "📍"}
      </button>

      <h2 className="text-xl font-bold text-gray-800 dark:text-white">{note.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{note.text}</p>
      <p className="text-sm text-gray-400 mt-2">{note.date}</p>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => onEdit(note)}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(note.id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
