import Navbar from "./components/Navbar";
import { useState } from "react";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setPage={setPage} />

      {page === "Home" && <Home />}
      {page === "Tasks" && <Tasks />}
    </div>
  );
}

export default App;
