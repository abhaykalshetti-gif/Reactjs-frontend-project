interface Props {
  genres: string[];
  tags: string[];
  decades: string[];
  selectedGenre: string | null;
  selectedTag: string | null;
  selectedDecade: string | null;
  onGenreSelect: (genre: string | null) => void;
  onTagSelect: (tag: string | null) => void;
  onDecadeSelect: (decade: string | null) => void;
}

const FilterBar = ({
  genres,
  tags,
  decades,
  selectedGenre,
  selectedTag,
  selectedDecade,
  onGenreSelect,
  onTagSelect,
  onDecadeSelect,
}: Props) => {
  return (
    <div className="flex flex-wrap gap-8 mb-6">
      {/* Genres */}
      <div>
        <h3 className="font-semibold mb-1">Genres</h3>
        <div className="flex gap-2 flex-wrap">
          <button
            className={`px-3 py-1 rounded ${
              selectedGenre === null ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => onGenreSelect(null)}
          >
            All
          </button>
          {genres.map((g) => (
            <button
              key={g}
              className={`px-3 py-1 rounded ${
                selectedGenre === g ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => onGenreSelect(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Mood */}
      <div>
        <h3 className="font-semibold mb-1">Mood</h3>
        <div className="flex gap-2 flex-wrap">
          <button
            className={`px-3 py-1 rounded ${
              selectedTag === null ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => onTagSelect(null)}
          >
            All
          </button>
          {tags.map((t) => (
            <button
              key={t}
              className={`px-3 py-1 rounded ${
                selectedTag === t ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => onTagSelect(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Decade */}
      <div>
        <h3 className="font-semibold mb-1">Decade</h3>
        <div className="flex gap-2 flex-wrap">
          <button
            className={`px-3 py-1 rounded ${
              selectedDecade === null
                ? "bg-purple-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => onDecadeSelect(null)}
          >
            All
          </button>
          {decades.map((d) => (
            <button
              key={d}
              className={`px-3 py-1 rounded ${
                selectedDecade === d
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => onDecadeSelect(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
