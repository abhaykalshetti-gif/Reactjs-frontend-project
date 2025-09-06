import { useState } from "react";
import type { Movie } from "./types";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const [likes, setLikes] = useState(movie.likes);
  const [lilelimit, setLimit] = useState(true);
  const [comments, setComments] = useState(movie.comments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: Date.now(),
      user: "Viewer", 
      text: newComment,
    };

    setComments([...comments, newCommentObj]);
    setNewComment(""); 
  };

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white mb-4">
      <div className="flex items-center gap-3">
        <img
          src={movie.user.profilePicUrl}
          alt={movie.user.username}
          className="w-10 h-10 rounded-full"
        />
        <span className="font-bold">{movie.user.username}</span>
      </div>

      <h2 className="text-xl font-semibold mt-3">{movie.post.movieTitle}</h2>
      <img
        src={movie.post.moviePosterUrl}
        alt={movie.post.movieTitle}
        className="w-40 my-2 rounded"
      />
      <p>{movie.post.text}</p>

      <button
        className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={lilelimit ? () =>{ setLikes(likes + 1)
          setLimit(false)
        }:()=> setLikes(likes )}
      >
        👍 Like ({likes})
      </button>

      <div className="mt-3">
        <h3 className="font-semibold">Comments:</h3>
        {comments.map((c) => (
          <p key={c.id} className="text-sm">
            <b>{c.user}:</b> {c.text}
          </p>
        ))}

        <div className="mt-2 flex gap-2">
          <input
            type="text"
            placeholder="Write a comment..."
            className="border p-2 flex-1 rounded"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            onClick={handleAddComment}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
