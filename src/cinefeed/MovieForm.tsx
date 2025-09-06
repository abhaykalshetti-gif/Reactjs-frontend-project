import { useState } from "react";
import type { Movie } from "./types";

interface Props {
  addMovie: (movie: Movie) => void;
}

const MovieForm = ({ addMovie }: Props) => {
  const [username, setUsername] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [title, setTitle] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMovie: Movie = {
      id: Date.now(),
      user: {
        id: Date.now(),
        username,
        profilePicUrl,
      },
      post: {
        movieTitle: title,
        moviePosterUrl: posterUrl,
        text,
      },
      likes: 0,
      comments: [],
    };

    addMovie(newMovie);

    // Reset form
    setUsername("");
    setProfilePicUrl("");
    setTitle("");
    setPosterUrl("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-3">➕ Add a New Movie Post</h2>

      <input
        type="text"
        placeholder="Your Username"
        className="border p-2 w-full mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Profile Picture URL"
        className="border p-2 w-full mb-2"
        value={profilePicUrl}
        onChange={(e) => setProfilePicUrl(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Movie Title"
        className="border p-2 w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Movie Poster URL"
        className="border p-2 w-full mb-2"
        value={posterUrl}
        onChange={(e) => setPosterUrl(e.target.value)}
        required
      />

      <textarea
        placeholder="Write your thoughts..."
        className="border p-2 w-full mb-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />

      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Post Movie
      </button>
    </form>
  );
};

export default MovieForm;
