import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { notify } from "../Notify";
import MarketLabel from "../Labels/MarketLabel";

function CartItem({ cartProducts }) {

  const [quantities, setQuantities] = useState(cartProducts.map(() => 1));

  const handleQuantityChange = (index, quantity) => {
    const newQuantities = [...quantities];
    newQuantities[index] = quantity;
    setQuantities(newQuantities);
  };

  const itemRemoved = () => {
    notify("Item Removed");
  };

  return (  
    <div>
      {cartProducts.map((product, index) => (
        <div className="white-box">
          <div key={index} className="d-flex p-2 justify-content-between">
            <div>
            <Link to="/singleProduct">
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="center">
                <select
                  value={quantities[index]}
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                >
                  {[...Array(5).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      Qty: {num + 1}
                    </option>
                  ))}
                  {/* <option className="text-center">
                     more
                    </option> */}
                </select>
              </div>
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
          <div className="d-flex justify-content-around  border-top">
            <div className="p-2" onClick={itemRemoved}>
              <FontAwesomeIcon icon={faTrashCan} className="px-2" />
              Remove
            </div>
            <div className="border-right"></div>
            <Link to="/checkout" className="p-2 link"><FontAwesomeIcon icon={faBolt} className="px-2" />Buy this now</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
