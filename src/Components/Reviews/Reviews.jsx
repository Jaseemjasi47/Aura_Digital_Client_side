import React from "react";
import RatingStars from "./RatingStars";
import "./Reviews.css";

function Reviews() {
  const reviews = [
    {username: "JohnDoe123", rating: 4.5, des: "Great product, highly recommend!"},
    {username: "JaneSmith456", rating: 3.2, des: "Could be better, but not bad for the price."},
    {username: "MikeJohnson789", rating: 5.0, des: "Absolutely love it! Best purchase ever."},
    {username: "EmilyBrown321", rating: 2.8, des: "Disappointed with the quality."},
    {username: "ChrisWilson654", rating: 4.0, des: "Good value for money."},
    {username: "SarahTaylor987", rating: 4.7, des: "Exactly what I was looking for."},
    {username: "DavidClark246", rating: 3.5, des: "Decent product, arrived on time."},
    {username: "AmyMartinez789", rating: 4.3, des: "Satisfied with my purchase."},
    {username: "MarkWhite123", rating: 3.9, des: "Nice design, but could improve functionality."},
    {username: "JessicaLee456", rating: 4.8, des: "Impressed with the quality and durability."}
  ];
  
  return (
    <div>
      <h2 className="m-3">Ratings & Reviews</h2>
      {reviews.map((review, index) => (
      <div className="review-container" key={index}>
        <div className="reviewer-name">
          {review.username}
          <RatingStars rating={review.rating} />
        </div>
        <p className="review-des text-short">
          {review.des}
        <div className="verified-purchase">verified Purchase</div>
        </p>
      </div>
      ))}
      <div className="showmore review-container text-center">show more</div>
    </div>
  );
}

export default Reviews;
