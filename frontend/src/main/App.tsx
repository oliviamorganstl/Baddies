import React from 'react';
import './App.css';
import MovieList from '../movie/Movies';
import Baconsale from '../Podcasts';
import AboutJoel from '../Home';
import Navbar from '../navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={AboutJoel} />
          <Route path="/movies" Component={MovieList} />
          <Route path="/podcasts" Component={Baconsale} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
