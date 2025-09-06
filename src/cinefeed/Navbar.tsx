import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-6">
      <Link to="/cinefeed/" className="hover:text-yellow-400">🎬 View Movies</Link>
      <Link to="/cinefeed/add" className="hover:text-yellow-400">➕ Add Movie</Link>
    </nav>
  );
};

export default Navbar;
