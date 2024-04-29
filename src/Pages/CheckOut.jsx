import React, { useEffect, useState } from "react";
import './CheckOut.css'
import { Link } from "react-router-dom";
import MarketLabel from "../Components/Labels/MarketLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

function CheckOut() {

  const Products = [
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
      quantity: 1,
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
      quantity: 1,
      market: "mrkt",
    },
  ];

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  useEffect(() => {
    let price = 0;
    let discount = 0;
    Products.forEach((product) => {
      price += product.price;
      discount += product.discountPrice;
    });
    setTotalPrice(price);
    setTotalDiscount(discount - price);
  }, [Products]);

  const payableAmount = totalPrice - totalDiscount;


  return (
    <div className='checkout-container'>
      <div>Order Summary</div>
      <div className="deliver-address-container">
        <div className="d-flex justify-content-between"><div className="pb-2">Delivery to:</div><div className="s-btn">Change</div></div>
        <div className="rem8 ">Username<span className='adrs-label mx-1'>Home</span></div> 
        <div className="rem7 py-1">
            address of the user
        </div>
        <div className="rem8">9876543210</div>
      </div>

      <div>
      {Products.map((product, index) => (
        <div className="co-product-container border-top">
          <div key={index} className="d-flex p-2 justify-content-between">
            <div>
              <img src={product.image} alt={product.name} />
            <div className='quantity m-2'>Qty: {product.quantity}</div>
            </div>
            <div>
              <div className="mb-2 text-short-1">{product.name}</div>
              <div className="sub-title">Order in 20 h 55 m</div>
              <div>Get it by Mar 25.</div>
              <div className="sub-title pt-2">Sold by gobuyget</div>
            </div>

            <div className="px-3 text-center">
              <div>₹{product.price}</div>
              <div>
                <s>₹{product.discountPrice}</s>
                <snap className="px-1 green">{product.discount} OFF</snap>
              </div>
              <MarketLabel type={product.market} />
              <div>
                <FontAwesomeIcon icon={faTruck} className="px-2 blue" />
                Free Delivery
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>

        <div className='price-details-container rem8'>
        <h5>Price Details</h5>
            <div className="d-flex justify-content-between pt-1">
              <div className="sub-title">
                Price({Products.length} items)
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
            <div className="border-top green pt-1">You Will save ₹{totalDiscount} on this order</div>
        </div>


        <div className="cart-buy-button">
        <div className="d-flex justify-content-between border-top center p-2 px-3">
          <div><div className="sub-title"><s>₹{totalPrice}</s></div><div>₹{payableAmount}</div></div>{" "}
          <Link to="/checkout" className="p-btn">
        Continue
      </Link>
        </div>
      </div>

    </div>
  )
}

export default CheckOut
