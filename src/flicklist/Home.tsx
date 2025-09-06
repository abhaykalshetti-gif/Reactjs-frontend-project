import { collections } from './collection';
import CollectionCard from './CollectionCard';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Curated Collections</h1>
        <p className="text-gray-600">Browse themed lists and discover your next favorite movie.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {collections.map(c => <CollectionCard key={c.id} c={c} />)}
      </div>
    </div>
  );
}
