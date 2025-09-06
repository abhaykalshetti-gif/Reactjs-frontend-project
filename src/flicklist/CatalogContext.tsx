import React, { createContext, useContext, useMemo, useReducer } from 'react';
import type { CatalogAction, CatalogState, Movie } from './types';
import { movies as initialMovies, collections } from './collection';
import { useLocalStorage } from './useLocalStorage';

const defaultState: CatalogState = {
  selectedCollectionId: null,
  query: '',
  sort: 'rating',
  minRating: 0,
  onlyGenres: [],
  favorites: {}
};

function reducer(state: CatalogState, action: CatalogAction): CatalogState {
  switch (action.type) {
    case 'SELECT_COLLECTION':
      return { ...state, selectedCollectionId: action.id };
    case 'SET_QUERY':
      return { ...state, query: action.query };
    case 'SET_SORT':
      return { ...state, sort: action.sort };
    case 'SET_MIN_RATING':
      return { ...state, minRating: action.value };
    case 'TOGGLE_GENRE': {
      const has = state.onlyGenres.includes(action.genre);
      return { ...state, onlyGenres: has ? state.onlyGenres.filter(g => g !== action.genre) : [...state.onlyGenres, action.genre] };
    }
    case 'TOGGLE_FAVORITE': {
      const f = { ...state.favorites };
      f[action.movieId] = !f[action.movieId];
      return { ...state, favorites: f };
    }
    case 'RESET_FILTERS':
      return { ...state, query: '', onlyGenres: [], minRating: 0 };
    default:
      return state;
  }
}

interface CatalogContextValue {
  state: CatalogState;
  dispatch: React.Dispatch<CatalogAction>;
  movies: Movie[];
  collections: typeof collections;
}

const CatalogCtx = createContext<CatalogContextValue | null>(null);

export const CatalogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [persisted, setPersisted] = useLocalStorage<CatalogState>('flicklist:state', defaultState);
  const [state, dispatch] = useReducer(reducer, persisted);

  React.useEffect(() => setPersisted(state), [state, setPersisted]);

  const value = useMemo(() => ({ state, dispatch, movies: initialMovies, collections }), [state]);
  return <CatalogCtx.Provider value={value}>{children}</CatalogCtx.Provider>;
};

export function useCatalog() {
  const ctx = useContext(CatalogCtx);
  if (!ctx) throw new Error('useCatalog must be used within CatalogProvider');
  return ctx;
}

export function useFilteredMovies() {
  const { state, movies } = useCatalog();
  const { selectedCollectionId, query, sort, minRating, onlyGenres } = state;

  return React.useMemo(() => {
    let list = movies.slice();

    if (selectedCollectionId) {
      const col = collections.find(c => c.id === selectedCollectionId);
      if (col) list = list.filter(m => col.movieIds.includes(m.id));
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(m => m.title.toLowerCase().includes(q) || m.synopsis.toLowerCase().includes(q));
    }

    if (onlyGenres.length) {
      list = list.filter(m => onlyGenres.every(g => m.genres.includes(g)));
    }

    if (minRating > 0) list = list.filter(m => m.rating >= minRating);

    list.sort((a, b) => {
      if (sort === 'title') return a.title.localeCompare(b.title);
      if (sort === 'year') return b.year - a.year;
      return b.rating - a.rating;
    });

    return list;
  }, [selectedCollectionId, query, sort, minRating, onlyGenres, movies]);
}
