import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="fixed ">
    <nav className="navbar bg">
      <div className="container">
        <div>
          <img className='nav-logo' src='img/Logo.png' />
        </div>

        <form className="d-flex scale-in-center h-search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Products"
              aria-label="Search"
            />
              <button className="search" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            </button>
          </form>
        <Link to='/wishlist' className={`nav-icon ${location.pathname === '/wishlist' ? 'nav-icon-active' : ''}`}>Wishlist<FontAwesomeIcon icon={faHeartSolid} className="mx-1" /></Link>
        <Link to="/Cart" className={`nav-icon ${location.pathname === '/Cart' ? 'nav-icon-active' : ''}`}>Cart<FontAwesomeIcon icon={faCartShopping} className="bubbling mx-1" /></Link>
        <Link to="/account" className={`nav-icon ${location.pathname === '/account' ? 'nav-icon-active' : ''}`}><FontAwesomeIcon icon={faUser} className="mx-1" /></Link>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {/* Assuming you have a Hamburger component */}
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>  
            <li>
              <Link className={location.pathname === '/' ? 'active-link' : ''} onClick={handleShowNavbar} to="/">Home</Link>
            </li>
            <li>
              <Link className={location.pathname === '/products' ? 'active-link' : ''} onClick={handleShowNavbar} to="/products">Products</Link>
            </li>
            <li>
              <Link className={location.pathname === '/about' ? 'active-link' : ''}  onClick={handleShowNavbar} to="/about">About</Link>
            </li>
            <li>
              <Link  className={location.pathname === '/contact' ? 'active-link' : ''}  onClick={handleShowNavbar} to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;


const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);