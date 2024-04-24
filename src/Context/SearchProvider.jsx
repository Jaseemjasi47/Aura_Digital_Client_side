import React, { createContext, useState, useContext } from 'react';

// Create the context
const SearchContext = createContext();

// Create a provider component
export const SearchProvider = ({ children }) => {
  const [recentSearchItems, setRecentSearchItems] = useState([]);

  return (
    <SearchContext.Provider value={{ recentSearchItems, setRecentSearchItems }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the search context
export const useSearch = () => useContext(SearchContext);
