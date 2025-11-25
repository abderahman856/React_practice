import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSave = (task) => {
    if (editTask) {
      setTasks(tasks.map((t) => (t.id === editTask.id ? task : t)));
      setEditTask(null);
    } else {
      setTasks([task, ...tasks]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const searched = tasks.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <TaskForm onSave={handleSave} editTask={editTask} setSearch={setSearch} />

      <div className="space-y-4 mt-6">
        {searched.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onEdit={() => setEditTask(task)}
          />
        ))}
      </div>
    </div>
  );
}
