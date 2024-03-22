import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from "@fortawesome/free-regular-svg-icons";

function SearchBar() {
  // State to hold the input value
  const [searchValue, setSearchValue] = useState('');

  const SearchIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>
  );

  // Function to handle input change
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any action here, such as searching for products
    // For demonstration purposes, let's just log the search value
    console.log("Search value:", searchValue);
  };

  return (
    <div className="sticky-form bg">
      <form className="d-flex" onSubmit={handleSubmit}>
        <div className=''>
          {/* Assuming you have a Logo component */}
          <img className='logo mx-2' src='img/Logo.png' alt="Logo" />
        </div>
        <div className="search-container">
      <input
        className="form-control me-2"
        type="search"
        placeholder="What are you looking for?"
        aria-label="Search"
        value={searchValue}
        onChange={handleInputChange}
      />
      <SearchIcon />
    </div>
    <Link to='/wishlist'>
      <FontAwesomeIcon icon={faHeartSolid} className="mx-2 " />
      </Link>
      </form>
      {/* Displaying the search value entered by the user */}
      {/* <div>Search Value: {searchValue}</div> */}
    </div>
  );
}

export default SearchBar;
