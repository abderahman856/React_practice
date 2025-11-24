export default function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-3 mt-4 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
    />
  );
}
