import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { useCart } from './CartContext';
import popSound from '../../Sounds/heartpop.mp3'
import MarketLabel from "../Labels/MarketLabel";

function ProductsCard({ products }) {
  const [wishlist, setWishlist] = useState([]);
  // const [cartCount, setCartCount] = useState(parseInt(localStorage.getItem('cartCount')) || 0);
  const audio = new Audio(popSound);

  const toggleWishlist = (index) => {
    if (wishlist.includes(index)) {
      setWishlist(wishlist.filter((item) => item !== index));
    } else {
      audio.play();
      setWishlist([...wishlist, index]);
    }
  };

  const { addToCart } = useCart();


  return (
    <div className="container mt-5">
      <div className="row row-cols-2 row-cols-md-4">
        {products.map((product, index) => (
          <div className="col mb-2" key={index}>
            <div className="card product-card">
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
                <div className="rating-show">{product.rating}<FontAwesomeIcon icon={faStarSolid} style={{ width: "10px", marginLeft: "5px" }} /></div>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="px-2">
                  <div className="text-short-1">
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
                  <MarketLabel type={product.market}/>
                </div>
              </Link>
              <FontAwesomeIcon icon={faCartPlus} onClick={addToCart} className="add-to-cart-icon bubbling" />
              {/* <a
                className="cyan-btn center m-1"
                style={{ fontSize: "1rem" }}
                onClick={addToCart}
              >
                Add to Cart
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsCard;
