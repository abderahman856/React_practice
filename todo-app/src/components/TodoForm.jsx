import { useState, useEffect } from "react";

export default function TodoForm({ onSave, editTodo }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editTodo) setText(editTodo.text);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return alert("Please enter a task");
    onSave(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        className="flex-1 border rounded p-2"
        placeholder="Enter a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {editTodo ? "Update" : "Add"}
      </button>
    </form>
  );
}
