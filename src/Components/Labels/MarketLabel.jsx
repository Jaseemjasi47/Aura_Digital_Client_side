import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";

function MarketLabel({ type }) {
  return (
    <div>
      {type === "go" && (
        <div className="label-goexpress">Go express</div>
      )}
      {type === "mrkt" && (
        <div className="label-market">
          <FontAwesomeIcon icon={faShop} className="label-market-logo" />
          Market
        </div>
      )}
    </div>
  );
}

export default MarketLabel;
