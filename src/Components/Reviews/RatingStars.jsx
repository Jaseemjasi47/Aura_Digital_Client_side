import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke, faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import "./RatingStars.css";

function RatingStars({ maxRating, rating }) {
  // Calculate solid stars (integer part of the rating)
  const solidStars = Math.floor(rating);
  // Calculate whether to show a half star (if the decimal part is more than 0.4)
  const showHalfStar = rating - solidStars > 0.4;

  return (
    <div className="rating">
      {[...Array(maxRating).keys()].map((index) => {
        // Render a solid star if the index is less than solidStars
        if (index < solidStars) {
          return (
            <FontAwesomeIcon
              key={index}
              icon={faStarSolid}
              className={`star star-filled`}
            />
          );
        }
        // Render a half star if showHalfStar is true and this is the next index after solidStars
        else if (index === solidStars && showHalfStar) {
          return (
            <FontAwesomeIcon
              key={index}
              icon={faStarHalfStroke}
              className={`star star-filled`}
            />
          );
        }
        // Render an empty star for all other cases
        else {
          return (
            <FontAwesomeIcon
              key={index}
              icon={faStarSolid}
              className={`star`}
            />
          );
        }
      })}
    </div>
  );
}

RatingStars.defaultProps = {
  maxRating: 5, // Default maximum rating
  rating: 3, // Default rating value
};

export default RatingStars;
