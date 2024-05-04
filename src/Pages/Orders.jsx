import React from "react";
import RatingStars from "../Components/Reviews/RatingStars";
import products from "../Data/products";

function Orders() {
  return (
    <div>
      <div className="p-3 h5 border-bottom">Orders</div>
      {products.map((product, index) => (
      <div className="border-bottom p-2 d-flex" key={index}>
        <img
          className="w-100px mx-2 "
          src={product.image}
          alt={product.name}
        />
        <div className="mx-2">
          <div>Delivered on May 1, 2024</div>
          <div className="rem8 text-short-1">{product.name}</div>
          <RatingStars rating={0} />
          <div className="sub-title">Rate this product now</div>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Orders;
