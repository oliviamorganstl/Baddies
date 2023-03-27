import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-brand navbar-nav mr-auto">
        <li className="nav-item nav-link">
          <Link style={{ color: '#FFF', textDecoration: 'none' }} to="/">
            Home
          </Link>
        </li>
        <li className="nav-item nav-link">
          <Link style={{ color: '#FFF', textDecoration: 'none' }} to="/movies">
            Movies
          </Link>
        </li>
        <li className="nav-item nav-link">
          <Link
            style={{ color: '#FFF', textDecoration: 'none' }}
            to="/podcasts"
          >
            My Podcasts
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
