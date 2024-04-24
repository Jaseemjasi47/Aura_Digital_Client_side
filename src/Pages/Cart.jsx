import React, { useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import HorizontalScrollableProducts from "../Components/Navbar/HorizontalScrollableProducts";
import products from "../Data/products";
import { notify } from "../Components/Notify";
import CartItem from "../Components/Cart/CartItem";


function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const itemRemoved = () => {
    notify('Item Removed');
  };



  const cartProducts = [{
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
  },{ 
    id: 2,
    name: "RC Jeep 4x4", 
    description: "Description 2", 
    price: 299, 
    discountPrice: "₹399", 
    discount: "35%", 
    rating:4.3, 
    image: "https://alshobbies.co.uk/image/cache/catalog/stockimage/lrc/c/C-TRX77086-4-ORNGX-250x250.jpg" 
  }];

  return (
    <div>
      <SearchBar />

      {cartProducts.length === 0 ? (
      <>
      <div className='empty-wishlist text-center center mb-4'>
        <div className='blur-bg-card'>
    <h2 className='py-4'>Your Shopping Cart looks empty.</h2>
    <h5>What are you waiting for?</h5>
    <button className="cyan-btn my-4 c-fit ">START SHOPPING</button>
    </div>
    </div>
    </>
    ) : (
      <div className="wishlist">
        <div>
          <h3 className="py-2">
            Cart <span className="sub-title">({cartProducts.length} item)</span>
          </h3>
          <CartItem cartProducts={cartProducts}/>
        </div>
        <div></div>
      </div>
    )}
      <h3 className='my-3 px-3'>Bestsellers for you</h3>
    <HorizontalScrollableProducts products={products}/>
    </div>
  );
}

export default Cart;
