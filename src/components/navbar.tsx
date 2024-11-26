import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'open' : ''}`} />
        <div className={`line ${isMenuOpen ? 'open' : ''}`} />
        <div className={`line ${isMenuOpen ? 'open' : ''}`} />
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" className="nav-link" onClick={toggleMenu}>
            Hooks
          </Link>
        </li>
        <li>
          <Link to="/useState" className="nav-link" onClick={toggleMenu}>
            UseState
          </Link>
        </li>
        <li>
          <Link to="/useEffect" className="nav-link" onClick={toggleMenu}>
            UseEffect
          </Link>
        </li>
        <li>
          <Link to="/useContext" className="nav-link" onClick={toggleMenu}>
            UseContext
          </Link>
        </li>
        <li>
          <Link to="/useRef" className="nav-link" onClick={toggleMenu}>
            UseRef
          </Link>
        </li>
        <li>
          <Link to="/useReducer" className="nav-link" onClick={toggleMenu}>
            UseReducer
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
