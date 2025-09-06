import { useState } from "react";
import { movies } from "./data";
import MovieCard from "./MovieCard";
import FilterBar from "./FilterBar";

const MovieNightPickerApp = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedDecade, setSelectedDecade] = useState<string | null>(null);

  const allGenres = Array.from(new Set(movies.flatMap((m) => m.genres)));
  const allTags = Array.from(new Set(movies.flatMap((m) => m.tags)));
  const decades = ["1980s", "1990s", "2000s", "2010s", "2020s"];

  const filteredMovies = movies.filter((m) => {
    const genreMatch = selectedGenre ? m.genres.includes(selectedGenre) : true;
    const tagMatch = selectedTag ? m.tags.includes(selectedTag) : true;

    const decadeMatch =
      !selectedDecade ||
      (selectedDecade === "1980s" && m.year >= 1980 && m.year < 1990) ||
      (selectedDecade === "1990s" && m.year >= 1990 && m.year < 2000) ||
      (selectedDecade === "2000s" && m.year >= 2000 && m.year < 2010) ||
      (selectedDecade === "2010s" && m.year >= 2010 && m.year < 2020) ||
      (selectedDecade === "2020s" && m.year >= 2020);

    return genreMatch && tagMatch && decadeMatch;
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎬 Movie Night Picker</h1>

      <FilterBar
        genres={allGenres}
        tags={allTags}
        decades={decades}
        selectedGenre={selectedGenre}
        selectedTag={selectedTag}
        selectedDecade={selectedDecade}
        onGenreSelect={setSelectedGenre}
        onTagSelect={setSelectedTag}
        onDecadeSelect={setSelectedDecade}
      />

      {filteredMovies.length === 0 ? (
        <p className="text-gray-600">No movies match your filters.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieNightPickerApp;
