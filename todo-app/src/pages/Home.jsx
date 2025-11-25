export default function Home({ setPage }) {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Welcome to the Todo App
      </h1>

      <p className="text-gray-700 text-lg mb-10">
        Organize your day by adding, editing, and managing your tasks.
      </p>

      <button
        onClick={() => setPage("Todos")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
      >
        Go to Todo App
      </button>
    </div>
  );
}
