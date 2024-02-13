import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart, faUser, faBars } from "@fortawesome/free-solid-svg-icons";

function Bottombar() {
  const location = useLocation();

  return (
    <div className='bottom-bar'>
      <Link className={`bottom-icon ${location.pathname === '/' ? 'active' : ''}`} to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link className={`bottom-icon ${location.pathname === '/products' ? 'active' : ''}`} to="/products">
        <FontAwesomeIcon icon={faBars} />
      </Link>
      <Link className={`bottom-icon ${location.pathname === '/cart' ? 'active' : ''}`} to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
      <Link className={`bottom-icon ${location.pathname === '/profile' ? 'active' : ''}`} to="/profile">
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </div>
  );
}

export default Bottombar;
