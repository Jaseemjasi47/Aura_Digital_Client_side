import React, { createContext, useContext, useState } from 'react';
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

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [WishListCount, setWishListCount] = useState(parseInt(localStorage.getItem('WishListCount')) || 0);

  const addToWishList = () => {
    const updatedCount = WishListCount + 1;
    setWishListCount(updatedCount);
    localStorage.setItem('WishListCount', updatedCount);
    notify('Item Added')
  };

  const resetWishList = () => {
    setWishListCount(0);
    localStorage.setItem('WishListCount', '0');
    notify('Removed All Items')
  };

  return (
    <WishListContext.Provider value={{ WishListCount, addToWishList: addToWishList, resetWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  const context = useContext(WishListContext);
  if (!context) {
    throw new Error('useWishList must be used within a WishListProvider');
  }
  return context;
};
