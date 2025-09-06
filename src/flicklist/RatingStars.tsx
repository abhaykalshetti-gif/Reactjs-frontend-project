import { memo } from 'react';

export default memo(function RatingStars({ value }: { value: number }) {
  const full = Math.floor(value / 2); // 10 -> 5 stars
  const half = value % 2 >= 1 ? 1 : 0;
  const empty = 5 - full - half;

  return (
    <div className="flex items-center" aria-label={`Rating ${value}/10`}>
      {Array.from({ length: full }).map((_, i) => <span key={`f${i}`} aria-hidden>★</span>)}
      {Array.from({ length: half }).map((_, i) => <span key={`h${i}`} aria-hidden>☆</span>)}
      {Array.from({ length: empty }).map((_, i) => <span key={`e${i}`} aria-hidden>✩</span>)}
      <span className="ml-2 text-sm text-gray-600">{value.toFixed(1)}/10</span>
    </div>
  );
});
