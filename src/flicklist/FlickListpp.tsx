import {  Routes, Route } from 'react-router-dom';
import { CatalogProvider } from './CatalogContext';
import Navbar from './Navbar';
import Home from './Home';
import CollectionView from './CollectionView';
import AllMovies from './AllMovies';

export default function App() {
  return (
    <CatalogProvider>
        <Navbar />
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="collections/:id" element={<CollectionView />} />
          <Route path="movies" element={<AllMovies />} />
        </Routes>
        </CatalogProvider>
  );
}
