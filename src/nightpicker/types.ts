export interface Movie {
  id: string;
  title: string;
  year: number;
  posterUrl: string;
  rating: number;
  genres: string[];
  tags: string[]; // mood tags like funny, intense, relaxing
}
