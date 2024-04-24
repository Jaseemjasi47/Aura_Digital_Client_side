import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';
import SearchResultCard from '../Components/Search Page/SearchResultCard';
import products from '../Data/products';

function SearchResult() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');

  return (
    <div>
      <SearchBar />
      <div className="my-3">
        <h2>Search Results for "{query}"</h2>
        <SearchResultCard products={products} />
      </div>
    </div>
  );
}

export default SearchResult;
