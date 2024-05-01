import React, { useState } from "react";

function Size() {
  const [activeSize, setActiveSize] = useState("S");
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  return (
    <div className="sizes my-3">
      <h6 className="text-uppercase">Size</h6>
      <div className="d-flex">
        {sizes.map((size) => (
          <div
            key={size}
            className={`size-box ${activeSize === size ? "size-box-active" : ""}`}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Size;
