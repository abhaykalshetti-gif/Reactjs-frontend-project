import React from "react";
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import { useCatalog, useFilteredMovies } from './CatalogContext';

export default function AllMovies() {
  const { dispatch } = useCatalog();
  const movies = useFilteredMovies();

  React.useEffect(() => {
    dispatch({ type: 'SELECT_COLLECTION', id: null });
  }, [dispatch]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      <h1 className="text-2xl font-bold">All Movies</h1>
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {movies.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  );
}
