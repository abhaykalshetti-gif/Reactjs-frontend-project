import type { Movie } from "./types";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movie[];
}

const ViewMovies = ({ movies }: Props) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🎥 Movie Feed</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default ViewMovies;
