import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!search.trim()) {
      setError("Please enter a movie name");
      setMovies([]);
      return;
    }

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=4d75d70&s=${search}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
      } else {
        setMovies([]);
        setError(data.Error);
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Something went wrong. Try again!");
      setMovies([]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
      <h1 className="text-blue-800 font-bold pb-2.5">Welcome to the Movie App</h1>
      <p className="text-black font-medium mb-6">
        Find and explore movies to watch in your free time.
      </p>

      <div className="flex gap-2 mb-6 border-sky-500">
        <input
          type="text"
          placeholder="Search for movies..."
          className="w-full border rounded p-2 text-blue-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
