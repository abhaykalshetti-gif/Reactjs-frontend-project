export interface Comment {
  id: number;
  user: string;
  text: string;
}

export interface User {
  id: number;
  username: string;
  profilePicUrl: string;
}

export interface Post {
  text: string;
  movieTitle: string;
  moviePosterUrl: string;
}

export interface Movie {
  id: number;
  user: User;
  post: Post;
  likes: number;
  comments: Comment[];
}
