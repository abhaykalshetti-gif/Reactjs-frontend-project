
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import { collections } from './collection';
import { useCatalog, useFilteredMovies } from './CatalogContext';

export default function CollectionView() {
  const { id } = useParams();
  const { dispatch } = useCatalog();
  const movies = useFilteredMovies();
  const col = collections.find(c => c.id === id);

  useEffect(() => {
    dispatch({ type: 'SELECT_COLLECTION', id: id ?? null });
    return () => { dispatch({ type: 'SELECT_COLLECTION', id: null }); };
  }, [id, dispatch]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{col?.name ?? 'Collection'}</h1>
          <p className="text-gray-600">{col?.description}</p>
        </div>
      </div>

      <SearchBar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {movies.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  );
}
