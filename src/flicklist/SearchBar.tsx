import { useCatalog } from './CatalogContext';

export default function SearchBar() {
  const { state, dispatch } = useCatalog();
  return (
    <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
      <input
        className="w-full rounded border px-3 py-2"
        placeholder="Search title or synopsis..."
        value={state.query}
        onChange={(e) => dispatch({ type: 'SET_QUERY', query: e.target.value })}
      />

      <select
        className="rounded border px-3 py-2"
        value={state.sort}
        onChange={(e) => dispatch({ type: 'SET_SORT', sort: e.target.value as any })}
      >
        <option value="rating">Sort: Rating</option>
        <option value="year">Sort: Year</option>
        <option value="title">Sort: Title</option>
      </select>

      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-600">Min Rating</label>
        <input
          type="range"
          min={0}
          max={10}
          step={0.5}
          value={state.minRating}
          onChange={(e) => dispatch({ type: 'SET_MIN_RATING', value: Number(e.target.value) })}
        />
        <span className="rounded bg-gray-100 px-2 py-1 text-xs">{state.minRating.toFixed(1)}</span>
      </div>

      <button
        className="rounded border px-3 py-2"
        onClick={() => dispatch({ type: 'RESET_FILTERS' })}
      >
        Reset
      </button>
    </div>
  );
}
