import  type { Movie } from "./types";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="border rounded-lg shadow-md p-3 bg-white flex flex-col items-center w-48">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="w-32 h-48 object-cover rounded"
      />
      <h2 className="mt-2 font-semibold text-center">{movie.title}</h2>
      <p className="text-sm text-gray-600">{movie.year}</p>
      <p className="text-sm">⭐ {movie.rating}</p>
      <div className="flex flex-wrap gap-1 mt-1">
        {movie.genres.map((g) => (
          <span
            key={g}
            className="text-xs bg-gray-200 px-2 py-0.5 rounded-full"
          >
            {g}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
