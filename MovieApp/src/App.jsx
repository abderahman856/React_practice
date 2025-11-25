import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setPage={setPage} />
      {page === "Home" && <Home />}
      {page === "Watchlist" && <Watchlist />}
    </div>
  );
}

export default App;
