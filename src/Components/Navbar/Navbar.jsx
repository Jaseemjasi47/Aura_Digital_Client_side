import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar bg">
      <div className="container">
        <div>
          {/* Assuming you have a Logo component */}
          <img className='logo' src='img/logo192.png' />
        </div>
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