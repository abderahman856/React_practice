function MovieCard({ title, year, poster }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden">
      <img
        src={poster !== "N/A" ? poster : "https://via.placeholder.com/300x450"}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600">{year}</p>
        <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
          Add to Watchlist
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
