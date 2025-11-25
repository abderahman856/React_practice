function Navbar({ setPage }) {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Movie App</h1>
      <div className="flex gap-4">
        <span
          className="cursor-pointer font-bold hover:text-blue-400 text-lg"
          onClick={() => setPage("Home")}
        >
          Home
        </span>
        <span
          className="cursor-pointer font-bold hover:text-blue-400 text-lg"
          onClick={() => setPage("Watchlist")}
        >
          Watchlist
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
