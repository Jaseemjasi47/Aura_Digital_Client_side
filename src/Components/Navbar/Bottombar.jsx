import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { useCart } from './CartContext';

function Bottombar() {
  const location = useLocation();
  const { cartCount } = useCart();
  const [bubbling, setBubbling] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setBubbling(true);
      const timeout = setTimeout(() => {
        setBubbling(false);
      }, 1000); // Adjust the timeout value as needed
      return () => clearTimeout(timeout);
    }
  }, [cartCount]);

  return (
    <div className='bottom-bar bg '>
      <Link className={`bottom-icon ${location.pathname === '/' ? 'active  bubbling' : ''}`} to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link className={`bottom-icon ${location.pathname === '/products' ? 'active  bubbling' : ''}`} to="/products">
        <FontAwesomeIcon icon={faBars} />
      </Link>
      <Link className={`bottom-icon ${location.pathname === '/cart' ? 'active  bubbling' : ''}`} to="/cart">
      {bubbling && <div className="notify bubbling">{cartCount}</div>}
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
      <Link className={`bottom-icon ${location.pathname === '/account' ? 'active  bubbling' : ''}`} to="/account">
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </div>
  );
}

export default Bottombar;
