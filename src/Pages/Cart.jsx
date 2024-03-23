import React, { useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import { useCart } from "../Components/Navbar/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import HorizontalScrollableProducts from "../Components/Navbar/HorizontalScrollableProducts";
import products from "../Data/products";

function Cart() {
  const { resetCart } = useCart();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []);

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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXr7C7twVIC5aZ23Fnf69k4Y2QA8M_t4JrIncNPFd0_JVbLkJDOso2w2rD0Sp6xUFh3g&usqp=CAU",
  };

  return (
    <div>
      <SearchBar />
      {/* <>
      <div className='empty-wishlist text-center center mb-4'>
        <div className='blur-bg-card'>
    <h2 className='py-4'>Your Shopping Cart looks empty.</h2>
    <h5>What are you waiting for?</h5>
    <button className="cyan-btn my-4 c-fit ">START SHOPPING</button>
    </div>
    </div>
    <h3 className='my-3 px-3'>Bestsellers for you</h3>
    <HorizontalScrollableProducts products={products}/>
    </> */}
      <div className="wishlist">
        <div>
          <h3 className="py-3">
            Cart <span className="sub-title">(2 item)</span>
          </h3>
          <div className="white-box d-flex justify-content-between">
            <img src={product.image} alt="" />
            <div>
              <div className="pb-3">{product.name}</div>
              <div className="sub-title">Order in 20 h 55 m</div>
              <div>Get it by Mar 25.</div>
              <div className="sub-title pt-3">Sold by gobuyget</div>
              <button className="lite-btn">Remove</button>
            </div>
            <div className="px-3 text-center">
              <div>{product.price}</div>
              <div>
                <s>{product.discountPrice}</s>
                <snap className="px-1 green">{product.discount} OFF</snap>
              </div>
              <div className="label-market">
                <FontAwesomeIcon icon={faShop} className="label-market-logo" />
                Market
              </div>
              <div className="label-goexpress">Go express</div>
              <div>
                <FontAwesomeIcon icon={faTruck} className="px-2 blue" />
                Free Delivery
              </div>
            </div>
          </div>

          <div className="white-box d-flex justify-content-between">
            <img src={product.image} alt="" />
            <div>
              <div className="pb-3">{product.name}</div>
              <div className="sub-title">Order in 20 h 55 m</div>
              <div>Get it by Mar 25.</div>
              <div className="sub-title pt-3">Sold by gobuyget</div>
              <button className="lite-btn">Remove</button>
            </div>
            <div className="px-3 text-center">
              <div>{product.price}</div>
              <div>
                <s>{product.discountPrice}</s>
                <snap className="px-1 green">{product.discount} OFF</snap>
              </div>
              <div className="label-market">
                <FontAwesomeIcon icon={faShop} className="label-market-logo" />
                Market
              </div>
              <div className="label-goexpress">Go express</div>
              <div>
                <FontAwesomeIcon icon={faTruck} className="px-2 blue" />
                Free Delivery
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Cart;
