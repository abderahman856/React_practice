import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";

export default function Home({ toggleTheme, theme }) {

  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [editNote, setEditNote] = useState(null);

  // Load notes on first render
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(saved);
  }, []);

  // Save notes every time they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add or update note
  const handleSave = (note) => {
    if (editNote) {
      setNotes(notes.map(n => n.id === editNote.id ? note : n));
      setEditNote(null);
    } else {
      setNotes([note, ...notes]);
    }
  };

  // Delete note
  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  // Pin note
  const togglePin = (id) => {
    setNotes(notes.map(n =>
      n.id === id ? { ...n, pinned: !n.pinned } : n
    ));
  };

  // Search notes
  const filteredNotes = notes.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.text.toLowerCase().includes(search.toLowerCase())
  );

  // Sort pinned first
  const sortedNotes = [...filteredNotes].sort((a, b) =>
    b.pinned - a.pinned
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <div className="max-w-3xl mx-auto mt-5">
        <SearchBar setSearch={setSearch} />
        <NoteForm onSave={handleSave} editNote={editNote} />
        
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {sortedNotes.map(note => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={deleteNote}
              onPin={togglePin}
              onEdit={setEditNote}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
