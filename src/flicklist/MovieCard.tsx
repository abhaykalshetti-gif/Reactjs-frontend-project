import { memo } from 'react';
import type { Movie } from './types';
import { useCatalog } from './CatalogContext';
import RatingStars from './RatingStars';

const MovieCard = memo(function MovieCard({ movie }: { movie: Movie }) {
  const { state, dispatch } = useCatalog();
  const isFav = !!state.favorites[movie.id];

  return (
    <article className="rounded border shadow-sm overflow-hidden">
      <div className="relative">
        <img src={movie.posterUrl} alt={movie.title} className="w-full h-72 object-cover" loading="lazy" />
        <button
          className={`absolute top-3 right-3 rounded px-3 py-1 text-sm ${isFav ? 'bg-rose-600 text-white' : 'bg-white border'}`}
          onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', movieId: movie.id })}
          aria-label={isFav ? 'Remove favorite' : 'Add favorite'}
        >
          {isFav ? '♥' : '♡'}
        </button>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg leading-tight">
          {movie.title} <span className="text-gray-500 text-sm">({movie.year})</span>
        </h3>
        <RatingStars value={movie.rating} />
        <p className="text-sm text-gray-600">{movie.synopsis}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {movie.genres.map(g => (
            <span key={g} className="rounded-full bg-gray-100 px-3 py-1 text-xs">{g}</span>
          ))}
        </div>
      </div>
    </article>
  );
});

export default MovieCard;
