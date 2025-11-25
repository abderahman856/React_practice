import { useEffect, useState } from "react";

export default function TaskForm({ onSave, editTask, setSearch }) {
  const [text, setText] = useState("");

  // if editing, load old task
  useEffect(() => {
    if (editTask) {
      setText(editTask.text);
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return alert("Please enter a task");

    const newTask = {
      id: editTask ? editTask.id : Date.now(),
      text,
    };

    onSave(newTask);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        className="w-full border p-2 rounded-lg"
        type="text"
        placeholder="Add task or search..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setSearch(e.target.value);
        }}
      />

      <button className="bg-blue-600 text-white px-5 rounded-lg font-bold hover:bg-blue-700">
        {editTask ? "Update" : "Add"}
      </button>
    </form>
  );
}
