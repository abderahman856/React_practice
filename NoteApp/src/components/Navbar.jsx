export default function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="flex justify-between items-center py-3 px-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        Notes App
      </h1>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}