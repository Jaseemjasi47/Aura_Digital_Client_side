import React, { useState, useEffect } from "react";
import "./singleProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../Components/Navbar/CartContext";
import { Link } from "react-router-dom";


function SingleProduct() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []);
  const [wishlist, setWishlist] = useState(false);
  const { addToCart } = useCart();

  const toggleWishlist = () => {
    setWishlist(!wishlist);
  };

  const product = {
    id: 1,
    name: "Rolex Sky-Dweller - 42 mm - Oystersteel & Gold, Blue Dial",
    brand: "Rolex",
    price: "₹199999",
    discountPrice: "₹299999",
    discount: "35%",
    rating: "4.7",
    description:
      "This Rolex Sky-Dweller model ref:326934 is a self-winding automatic watch, featuring a 42 mm Oystersteel and white gold case, white gold fluted bezel with a bright blue dial. The dial features center hour, minute, and seconds hands to indicate the local time. Furthermore, it is fitted with an off-centered 24-hour disc that indicates an alternative time zone. This watch is fitted with an Oystersteel and white gold Jubilee bracelet with an Oysterlock safety clasp and is equipped with the Rolex patented adjustable comfort link system that allows the wearer to increase the bracelet length by approximately 5 mm. This unworn watch comes with the original box and papers, a 2-year Cagau warranty, and the time remaining on the manufacturer’s warranty.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXr7C7twVIC5aZ23Fnf69k4Y2QA8M_t4JrIncNPFd0_JVbLkJDOso2w2rD0Sp6xUFh3g&usqp=CAU",
      "https://cagau.com/wp-content/uploads/2022/07/RX000108-Rolex-Sky-Dweller-42-Oystersteel-White-Gold-Blue-Dial-326933-1-min-1.jpg",
      "https://cagau.com/wp-content/uploads/2022/07/RX000108-Rolex-Sky-Dweller-42-Oystersteel-White-Gold-Blue-Dial-326933-2-min-1.jpg",
    ],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  const changeImage = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const [showFullDescription, setShowFullDescription] = useState(false);

  const descriptionWords = product.description.split(" ");
  const shortenedDescription = showFullDescription
    ? product.description
    : descriptionWords.slice(0, 50).join(" ");

  return (
    <div className="sp">
      <div className="row d-flex justify-content-center">
        <div className="">
          <div className="card">
            <div className="sp-wishlist-icon" onClick={() => toggleWishlist()}>
              {wishlist ? (
                <FontAwesomeIcon
                  icon={faHeartSolid}
                  style={{ color: "red" }}
                  className="bubbling"
                />
              ) : (
                <FontAwesomeIcon icon={faHeartRegular} />
              )}
            </div>
            <div className="row">
              <div className="col-md-6 scale-in-center ">
                <div className="images p-3">
                  <div className="text-center p-4">
                    <img
                      id="main-image"
                      src={mainImage}
                      width="250"
                      alt="Main"
                    />
                  </div>
                  <div className="thumbnail text-center">
                    {product.images.map((image, index) => (
                      <img
                        key={index}
                        className={`${
                          mainImage === image ? "selected-image" : ""
                        } mx-2`}
                        onClick={() => changeImage(image)}
                        src={image}
                        width="70"
                        alt={`Thumbnail ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-6 slide-in-bottom ">
                <div className="product p-4">
                  <div className="mt-1 mb-3">
                    {" "}
                    <span className="text-uppercase text-muted brand">
                      {product.brand}
                    </span>
                    <span className="sp-rating-show">
                      {product.rating}
                      <FontAwesomeIcon
                        icon={faStarSolid}
                        style={{ width: "10px", marginLeft: "5px" }}
                      />
                    </span>
                    <h5 className="text-uppercase">
                      {product.name}
                    </h5>
                    <div className="price d-flex flex-row align-items-center">
                      {" "}
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
                      <span className="act-price">{product.price}</span>
                    </div>
                  </div>
                  <div>
                    <p className="about ff-verdana">{shortenedDescription}</p>
                    {descriptionWords.length > 50 && (
                      <div className="show-more-btn"
                        onClick={() =>
                          setShowFullDescription(!showFullDescription)
                        }
                      >
                        {showFullDescription ? "Show less" : "Show more..."}
                      </div>
                    )}
                  </div>

                  {/* <div className="sizes mt-5">
                    <h6 className="text-uppercase">Size</h6>{" "}
                    <label className="radio">
                      {" "}
                      <input
                        type="radio"
                        name="size"
                        value="S"
                        defaultChecked
                      />{" "}
                      <span>S</span>{" "}
                    </label>{" "}
                    <label className="radio">
                      {" "}
                      <input type="radio" name="size" value="M" />{" "}
                      <span>M</span>{" "}
                    </label>{" "}
                    <label className="radio">
                      {" "}
                      <input type="radio" name="size" value="L" />{" "}
                      <span>L</span>{" "}
                    </label>{" "}
                    <label className="radio">
                      {" "}
                      <input type="radio" name="size" value="XL" />{" "}
                      <span>XL</span>{" "}
                    </label>{" "}
                    <label className="radio">
                      {" "}
                      <input type="radio" name="size" value="XXL" />{" "}
                      <span>XXL</span>{" "}
                    </label>
                  </div> */}

                  <div className="cart mt-4 center">
                    {" "}
                    <button
                      className="sp-btn text-uppercase"
                      onClick={addToCart}
                    >
                      Add to cart
                    </button>{" "}
                    <Link to='/checkout' className="sp-btn text-uppercase text-center">Buy Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
