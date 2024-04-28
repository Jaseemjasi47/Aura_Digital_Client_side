import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext";
import { useWishList } from "../../Context/WishList";
import MarketLabel from "../Labels/MarketLabel";
import { HorizontalScrollableProductsLoading } from "../Loading/Loading";

function HorizontalScrollableProducts({ products }) {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const { addToWishList } = useWishList();

  const toggleWishlist = (index) => {
    if (wishlist.includes(index)) {
      setWishlist(wishlist.filter((item) => item !== index));
    } else {
      setWishlist([...wishlist, index]);
      addToWishList();
    }
  };

  useEffect(() => {
    // Set loading state to false after 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup function to clear timer
  }, []); // Run effect only on component mount

  const loadingComponents = Array.from({ length: 4 }, (_, index) => (
    <HorizontalScrollableProductsLoading key={index} />
  ));

  return (
    <div className="scrollable-products-container mx-2">
      <div className="scrollable-products">
        {loading ? (
          <>
           {loadingComponents}
          </>
        ) : (
          <>
            {products.map((product, index) => (
              <div className="product-card-h" key={index}>
                <div
                  className="wishlist-icon"
                  onClick={() => toggleWishlist(index)}
                >
                  {wishlist.includes(index) ? (
                    <FontAwesomeIcon
                      icon={faHeartSolid}
                      style={{ color: "red" }}
                      className="bubbling"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faHeartRegular} />
                  )}
                </div>
                <Link
                  to="/product"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="rating-show">
                    {product.rating}
                    <FontAwesomeIcon
                      icon={faStarSolid}
                      style={{ width: "10px", marginLeft: "5px" }}
                    />
                  </div>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="px-2">
                    <div className="product-card-h-name text-short-1">
                      {product.name}
                    </div>
                    <div style={{ fontSize: ".7rem" }}>
                      <div className="ml-2">
                        <FontAwesomeIcon
                          icon={faArrowDown}
                          style={{
                            color: "green",
                            animation: "bounceDown 0.5s infinite alternate",
                          }}
                        />
                        <span style={{ color: "green" }}>
                          {product.discount}
                        </span>
                        <span className="dis-price mx-2">
                          M.R.P :<s>{product.discountPrice}</s>
                        </span>
                      </div>
                      Price: ₹{product.price}
                    </div>
                    <MarketLabel type={product.market} />
                  </div>
                </Link>
                <FontAwesomeIcon
                  icon={faCartPlus}
                  onClick={addToCart}
                  className="add-to-cart-icon bubbling"
                />
              </div>
            ))}{" "}
          </>
        )}
        {/* <HorizontalScrollableProductsLoading/> */}
      </div>
    </div>
  );
}

export default HorizontalScrollableProducts;
