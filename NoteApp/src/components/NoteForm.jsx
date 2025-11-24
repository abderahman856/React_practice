import { useEffect, useState } from "react";

export default function NoteForm({ onSave, editNote }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setText(editNote.text);
    }
  }, [editNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !text.trim()) {
      alert("please add note to it");
      return;
    }

    const note = {
      id: editNote ? editNote.id : Date.now(),
      title,
      text,
      pinned: editNote ? editNote.pinned : false,
      date: new Date().toLocaleString(),
    };

    onSave(note);

    setTitle("");
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mt-4"
    >
      <input
        type="text"
        placeholder="Note title"
        className="w-full p-2 border rounded mb-2 dark:bg-gray-700 dark:text-white"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write your note..."
        className="w-full p-2 border rounded h-24 dark:bg-gray-700 dark:text-white"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        type="submit"
        className="mt-3 w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
      >
        {editNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
}
