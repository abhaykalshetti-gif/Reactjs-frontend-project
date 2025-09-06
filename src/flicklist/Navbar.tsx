import { Link, NavLink } from 'react-router-dom';
import { useCatalog } from './CatalogContext';

export default function Navbar() {
  const { state } = useCatalog();
  const favCount = Object.values(state.favorites).filter(Boolean).length;

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `inline-flex items-center rounded px-3 py-2 text-sm font-medium ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`;

  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold">FlickList</Link>
        <div className="flex gap-2">
          <NavLink to="/flicklist" className={linkClass}>Collections</NavLink>
          <NavLink to="/flicklist/movies" className={linkClass}>All Movies</NavLink>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">{favCount} favorites</span>
        </div>
      </nav>
    </header>
  );
}
