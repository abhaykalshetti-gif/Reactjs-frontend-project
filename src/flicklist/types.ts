export type Genre =
  | 'Sci-Fi' | 'Fantasy' | 'Drama' | 'Thriller' | 'Action' | 'Romance' | 'Comedy' | 'Classic';

export interface Movie {
  id: string;
  title: string;
  year: number;
  posterUrl: string;
  rating: number; // 0..10
  genres: Genre[];
  synopsis: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  tags: Genre[];
  movieIds: string[];
}

export interface CatalogState {
  selectedCollectionId: string | null;
  query: string;
  sort: 'title' | 'year' | 'rating';
  minRating: number;
  onlyGenres: Genre[];
  favorites: Record<string, boolean>;
}

export type CatalogAction =
  | { type: 'SELECT_COLLECTION'; id: string | null }
  | { type: 'SET_QUERY'; query: string }
  | { type: 'SET_SORT'; sort: CatalogState['sort'] }
  | { type: 'SET_MIN_RATING'; value: number }
  | { type: 'TOGGLE_GENRE'; genre: Genre }
  | { type: 'TOGGLE_FAVORITE'; movieId: string }
  | { type: 'RESET_FILTERS' };
