import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import Home from "./pages/Home";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [page, setPage] = useState("Home"); // NEW

  // Load todos
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(saved);
  }, []);

  // Save todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (editTodo) {
      setTodos(
        todos.map((t) => (t.id === editTodo.id ? { ...t, text } : t))
      );
      setEditTodo(null);
    } else {
      const newTodo = { id: Date.now(), text, completed: false };
      setTodos([newTodo, ...todos]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {page === "Home" && <Home setPage={setPage} />}

      {page === "Todos" && (
        <div className="max-w-xl mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4 text-center">Todo App</h1>

          <TodoForm onSave={addTodo} editTodo={editTodo} />

          <div className="mt-6 space-y-2">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={() => setEditTodo(todo)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
