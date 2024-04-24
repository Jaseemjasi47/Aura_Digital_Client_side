import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-regular-svg-icons";
import { useSearch } from "../Context/SearchProvider"; // Import the useSearch hook

function SearchBar() {
  const { setRecentSearchItems } = useSearch();
  const [searchValue, setSearchValue] = useState("");
  const searchLinkRef = useRef(null);

  const SearchIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-search"
      viewBox="0 0 16 16"
      style={{ color: 'black' }}
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
    setRecentSearchItems((prevSearchItems) => [
      ...prevSearchItems,
      searchValue,
    ]);
    setSearchValue("");
    // Programmatically click on the link
    searchLinkRef.current.click();
  };

  return (
    <div className="sticky-form bg">
      <form className="d-flex" onSubmit={handleSubmit}>
        <div className="">
          {/* Assuming you have a Logo component */}
          <img className="logo mx-2" src="img/Logo.png" alt="Logo" />
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
          <Link
            to={`/search?query=${encodeURIComponent(searchValue)}`}
            ref={searchLinkRef}
          >
          </Link>
            <SearchIcon/>
        </div>
        <Link
          to="/wishlist"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <FontAwesomeIcon icon={faHeartSolid} className="mx-2"/>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
