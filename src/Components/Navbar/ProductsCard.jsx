import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

function ProductsCard({ products }) {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (index) => {
    if (wishlist.includes(index)) {
      setWishlist(wishlist.filter((item) => item !== index));
    } else {
      setWishlist([...wishlist, index]);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row row-cols-2 row-cols-md-4">
        {products.map((product, index) => (
          <div className="col mb-4" key={index}>
            <div className="card product-card">
              <div
                className="wishlist-icon"
                onClick={() => toggleWishlist(index)}
              >
                {wishlist.includes(index) ? (
                  <FontAwesomeIcon
                    icon={faHeartSolid}
                    style={{ color: "red" }}
                  />
                ) : (
                  <FontAwesomeIcon icon={faHeartRegular} />
                )}
              </div>
              <Link
                to="/product"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ fontSize: "1.2rem" }}>
                    {product.name}
                  </h5>
                  <p className="card-text" style={{ fontSize: ".9rem" }}>
                    Price: ₹{product.price}
                  </p>
                  {/* <p className="card-text" style={{ fontSize: ".8rem" }}>
                    {product.description}
                  </p> */}
                </div>
              </Link>
              <a
                href="#"
                className="cyan-btn center m-2"
                style={{ fontSize: "1rem" }}
              >
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsCard;
