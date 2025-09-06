
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CineApp from './cinefeed/CineApp'
import Home from "./Home";
import FlickList from './flicklist/FlickListpp'
import MovieNightPickerApp from "./nightpicker/MovieNightPickerApp";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cinefeed/*" element={<CineApp/>} />
        <Route path="/flicklist/*" element={<FlickList/>} />
        
        <Route path="/nightpicker" element={<MovieNightPickerApp/>} />
      </Routes>
    </Router>
  );
};

export default App;
