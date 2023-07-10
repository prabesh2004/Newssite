import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const location = useLocation();
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  function doublef() {
    if (!isSearchVisible) {
      return 'visible';
    } else {
      return 'not-visible';
    }
  }

  function search() {
    console.log('hello');
  }

  return (
    <nav className="navbar">
      <div className="contents">
        <div className="login">
          <span className="logo">SKY-NEWS</span>

          <Link to={"/signin"}>
          <FontAwesomeIcon className="user" icon={faUser} /></Link>
          <Link className="sign-in" to={"/signin"}>
            Sign in
          </Link>
          
        </div>
        <button
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="toggle-icon">
            <GiHamburgerMenu className="burger" />
          </span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className={doublef()}>
            <Link
            onClick={toggleMenu}
              to="/"
              className={`nav-a ${location.pathname === '/' ? 'iactive' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className={doublef()}>
            <Link
             onClick={toggleMenu}
              to="/world"
              className={`nav-a ${
                location.pathname === '/world' ? 'iactive' : ''
              }`}
            >
              World
            </Link>
          </li>
          <li className={doublef()}>
            <Link
             onClick={toggleMenu}
              to="/local"
              className={`nav-a ${
                location.pathname === '/local' ? 'iactive' : ''
              }`}
            >
              Local
            </Link>
          </li>
          <li className={doublef()}>
            <Link
             onClick={toggleMenu}
              to="/sport"
              className={`nav-a ${
                location.pathname === '/sport' ? 'iactive' : ''
              }`}
            >
              Sport
            </Link>
          </li>
          <li className={doublef()}>
            <Link
             onClick={toggleMenu}
              to="/article"
              className={`nav-a ${
                location.pathname === '/article' ? 'iactive' : ''
              }`}
            >
              Article
            </Link>
          </li>
          <li className={doublef()}>
            <Link
             onClick={toggleMenu}
              to="/weather"
              className={`nav-a ${
                location.pathname === '/weather' ? 'iactive' : ''
              }`}
            >
              Weather
            </Link>
          </li>
          <li>
            <div className="search-bar">
              {isSearchVisible && (
                <form action="" className="form">
                  <RxCross2
                    onClick={toggleSearch}
                    className="search-cross"
                    size={20}
                  />
                  <input type="text" className="search-input" />
                </form>
              )}
              <FaSearch
                onClick={!isSearchVisible ? toggleSearch : search}
                size={18}
              />
            </div>
          </li>
          <RxCross2 onClick={toggleMenu} className="button-icon" size={30} />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



