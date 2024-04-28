import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import HorizontalScrollableProducts from "../Components/Navbar/HorizontalScrollableProducts";
import products from "../Data/products";
import { notify } from "../Components/Notify";
import CartItem from "../Components/Cart/CartItem";
import { useCart } from "../Components/Navbar/CartContext";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itemRemoved = () => {
    notify("Item Removed");
  };

  const { resetCart } = useCart();
  const { cartCount } = useCart();

  const cartProducts = [
    {
      id: 1,
      name: "Rolex Sky-Dweller - 42 mm - Oystersteel & Gold, Blue Dial",
      brand: "Rolex",
      price: 199999,
      discountPrice: 299999,
      discount: "35%",
      rating: "4.7",
      description:
        "This Rolex Sky-Dweller model ref:326934 is a self-winding automatic watch, featuring a 42 mm Oystersteel and white gold case, white gold fluted bezel with a bright blue dial. The dial features center hour, minute, and seconds hands to indicate the local time. Furthermore, it is fitted with an off-centered 24-hour disc that indicates an alternative time zone. This watch is fitted with an Oystersteel and white gold Jubilee bracelet with an Oysterlock safety clasp and is equipped with the Rolex patented adjustable comfort link system that allows the wearer to increase the bracelet length by approximately 5 mm. This unworn watch comes with the original box and papers, a 2-year Cagau warranty, and the time remaining on the manufacturer’s warranty.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXr7C7twVIC5aZ23Fnf69k4Y2QA8M_t4JrIncNPFd0_JVbLkJDOso2w2rD0Sp6xUFh3g&usqp=CAU",
      market: "go",
    },
    {
      id: 2,
      name: "RC Jeep 4x4",
      description: "Description 2",
      price: 299,
      discountPrice: 399,
      discount: "35%",
      rating: 4.3,
      image:
        "https://alshobbies.co.uk/image/cache/catalog/stockimage/lrc/c/C-TRX77086-4-ORNGX-250x250.jpg",
      market: "mrkt",
    },
  ];

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  useEffect(() => {
    let price = 0;
    let discount = 0;
    cartProducts.forEach((product) => {
      price += product.price;
      discount += product.discountPrice;
    });
    setTotalPrice(price);
    setTotalDiscount(discount - price);
  }, [cartProducts]);

  // Calculate payable amount
  const payableAmount = totalPrice - totalDiscount;

  return (
    <div>
      <SearchBar />

      {cartCount === 0 ? (
        <>
          <div className="empty-wishlist text-center center mb-4">
            <div className="blur-bg-card">
              <h2 className="py-4">Your Shopping Cart looks empty.</h2>
              <h5>What are you waiting for?</h5>
              <button className="cyan-btn my-4 c-fit ">START SHOPPING</button>
            </div>
          </div>
        </>
      ) : (
        <div className="wishlist">
          <div>
            <h3 className="py-2">
              Cart{" "}
              <span className="sub-title">({cartProducts.length} item)</span>
            </h3>
            <CartItem cartProducts={cartProducts} />
          </div>

          <div className="white-box p-3">
            <h5>Price Details</h5>
            <div className="d-flex justify-content-between pt-1">
              <div className="sub-title">
                Price({cartProducts.length} items)
              </div>
              <div className="green">₹{totalPrice}</div>
            </div>
            <div className="d-flex justify-content-between pt-1">
              <div className="sub-title">Dicscount</div>
              <div className="green">- ₹{totalDiscount}</div>
            </div>
            <div className="d-flex justify-content-between pt-1">
              <div className="sub-title">Delivery Charges</div>
              <div className="green">
                <s>₹70</s>
              </div>
            </div>
            <div className="d-flex justify-content-between py-1 border-top">
              <div className="">Total Amount</div>
              <div className="green">₹{payableAmount}</div>
            </div>
          </div>

          <div className="remove-all-btn" onClick={resetCart}>
            Remove All Items
          </div>
        </div>
      )}

      <h3 className="my-3 px-3">Bestsellers for you</h3>
      <HorizontalScrollableProducts products={products} />

      <div className="cart-buy-button">
        <div className="d-flex justify-content-around border-top center green p-2">
          <div className="sub-title ">You will save ₹{totalDiscount} on this order</div>{" "}
          <Link to="/checkout" className="p-btn">
        Place Order
      </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
