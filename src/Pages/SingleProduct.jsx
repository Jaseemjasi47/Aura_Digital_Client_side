import React, { useState, useEffect } from "react";
import "./singleProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
// import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../Components/Navbar/CartContext";
import { Link } from "react-router-dom";
import Reviews from "../Components/Reviews/Reviews";
import RatingStars from "../Components/Reviews/RatingStars";
import ImageSlider from "../Components/ImageSlider";
import HorizontalScrollableProducts from "../Components/Navbar/HorizontalScrollableProducts";
import products from "../Data/products";
import MarketLabel from "../Components/Labels/MarketLabel";
import Size from "../Components/SingleProduct/Size";
import Variant from "../Components/SingleProduct/Variant";

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
    name: "Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Violet, 12GB, 256GB Storage)",
    brand: "Samsung",
    price: "1,29,998",
    discountPrice: "1,34,999",
    discount: "4%",
    rating: "4.7",
    market: "go",
    description: `Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 17.25cm (6.8") flat display. It's an absolute marvel of design. The legacy of Galaxy Note is alive and well. Write, tap and navigate with precision your fingers wish they had on the new, flat display. With the most megapixels on a smartphone and AI processing, Galaxy S24 Ultra sets the industry standard for image quality every time you hit the shutter. What's more, the new ProVisual engine recognizes objects — improving colour tone, reducing noise and bringing out detail. A new way to search is here with Circle to Search. While scrolling your fav social network, use your S Pen or finger to circle something and get Google Search results. Victory can be yours with the new Snapdragon 8 Gen 3 for Galaxy. Faster processing gives you the power you need for all the gameplay you want. Then, manifest graphic effects in real time with ray tracing for hyper-realistic shadows and reflections.`,
    images: [
      "https://m.media-amazon.com/images/I/81lek2iav1L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71JLhofuYJL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71ZdFihN4YL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71dRjlbYBlL._SX679_.jpg",
    ],
  };

  const imageSliderData = product.images.map((image) => ({ image }));

  const [showFullDescription, setShowFullDescription] = useState(false);

  const descriptionWords = product.description.split(" ");
  const shortenedDescription = showFullDescription
    ? product.description
    : descriptionWords.slice(0, 50).join(" ");

  return (
    <>
      <div className="sp ">
        <div className="row d-flex justify-content-center">
          <div className="">
            <div className="">
              <div
                className="sp-wishlist-icon"
                onClick={() => toggleWishlist()}
              >
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
                  <div className="images p-2">
                    <div className="text-center pb-2">
                      <ImageSlider data={imageSliderData} />

                      {/* <img
                      id="main-image"
                      src={mainImage}
                      width="370"
                      alt="Main"
                    /> */}
                    </div>

                    {/* <div className="thumbnail text-center">
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
                  </div> */}
                  </div>
                </div>
                <div className="col-md-6 slide-in-bottom ">
                  <div className="product p-4">
                    <div className="mt-1 mb-2">
                      {" "}
                      <div className="text-uppercase text-muted brand">
                        {product.brand}
                      </div>
                      <div className="d-flex sub-title my-1">
                        <RatingStars rating={product.rating} />
                        <div className=" mx-1"> {product.rating}</div>
                        {/* <FontAwesomeIcon
                        icon={faStarSolid}
                        style={{ width: "10px", marginLeft: "5px" }}
                      /> */}
                      </div>
                      <h5 className="text-uppercase rem9">{product.name}</h5>
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
                            M.R.P : <s>₹{product.discountPrice}</s>
                          </span>
                        </div>
                        <span className="act-price">₹{product.price}</span>
                      </div>
                    </div>
                    <MarketLabel type={product.market} />

                    <Variant />

                    {/* <Size /> */}

                    <div>
                      <div className="py-1">Product Details</div>
                      <div className=" rem8 ff-verdana">
                        {shortenedDescription}
                      </div>
                      {descriptionWords.length > 50 && (
                        <div
                          className="show-more-btn"
                          onClick={() =>
                            setShowFullDescription(!showFullDescription)
                          }
                        >
                          {showFullDescription ? "Show less" : "Show more..."}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-1">
            <h3 className="p-1">Similar Products</h3>
            <HorizontalScrollableProducts products={products} />
          </div>
          <Reviews />
        </div>
      </div>

      <div className="cart-buy-button">
        <div className="d-flex justify-content-around center">
          <button className="sp-btn text-uppercase" onClick={addToCart}>
            Add to cart
          </button>
          <Link to="/checkout" className="sp-btn text-uppercase">
            Buy Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
