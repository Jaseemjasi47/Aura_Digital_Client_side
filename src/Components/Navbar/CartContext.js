// CartContext.js
import React, { createContext, useContext, useState } from 'react';
import notificationSound from '../../Sounds/notification.mp3';
// import { toast } from "react-toastify";
import { toast } from 'sonner'

export const notify = (message) => {
  // const audio = new Audio(notificationSound);
  // audio.play();
  toast.success(message, {
    autoClose: 1000, // Adjust the duration here (in milliseconds)
    pauseOnHover: true, // Disable pause on hover
    closeOnClick: true, // Close toast on click
    // Add other props as needed
  });
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(parseInt(localStorage.getItem('cartCount')) || 0);

  const addToCart = () => {
    const updatedCount = cartCount + 1;
    setCartCount(updatedCount);
    localStorage.setItem('cartCount', updatedCount);
    notify('Item Added')
  };

  const resetCart = () => {
    setCartCount(0);
    localStorage.setItem('cartCount', '0');
    notify('Removed All Items')
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
