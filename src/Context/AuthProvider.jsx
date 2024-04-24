import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to check if the user is admin
  const isAdmin = () => {
    // Assuming user object has a role property
    return user && user.role === 'admin';
  };

  // Function to check if the user is seller
  const isSeller = () => {
    // Assuming user object has a role property
    return user && user.role === 'seller';
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isAdmin, isSeller }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
