import  type { Movie } from "./types";
import MovieForm from "./MovieForm";

interface Props {
  addMovie: (movie: Movie) => void;
}

const AddMovie = ({ addMovie }: Props) => {
  return (
    <div className="p-4">
      <MovieForm addMovie={addMovie} />
    </div>
  );
};

export default AddMovie;
