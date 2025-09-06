import { Link } from 'react-router-dom';
import type { Collection } from './types';

export default function CollectionCard({ c }: { c: Collection }) {
  return (
    <Link to={`collections/${c.id}`} className="rounded border shadow-sm overflow-hidden block hover:shadow-md transition">
      <img src={c.coverUrl} alt={c.name} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{c.name}</h3>
        <p className="text-sm text-gray-600">{c.description}</p>
        <div className="flex gap-2 mt-2 flex-wrap">
          {c.tags.map(t => <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs">{t}</span>)}
        </div>
      </div>
    </Link>
  );
}
