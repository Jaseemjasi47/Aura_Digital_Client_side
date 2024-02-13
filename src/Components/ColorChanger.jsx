import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ColorChanger = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [customColor, setCustomColor] = useState("");
  const [isRotated, setIsRotated] = useState(false); // State to track rotation

  const handleColorChange = (color) => {
    setSelectedColor(color);
    document.querySelectorAll(".bg").forEach((element) => {
      element.style.backgroundColor = color;
    });
  };

  const handleToggleInput = () => {
    const inputBar = document.querySelector(".custom-color-input");
    inputBar.classList.toggle("show"); // Toggle the 'show' class to display/hide the input bar
    setIsRotated(!isRotated); // Toggle rotation state
  };

  const handleCustomColorChange = () => {
    // Check if the input is a valid color code
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(customColor)) {
      setSelectedColor(customColor);
      document.querySelectorAll(".bg").forEach((element) => {
        element.style.backgroundColor = customColor;
      });
    } else {
      alert("Please enter a valid color code (e.g., #RRGGBB)");
    }
  };

  return (
    <div className="color-changer">
      <div className="color-options">
        <div
          className="color-option"
          style={{ backgroundColor: "rgb(255, 0, 0)" }}
          onClick={() => handleColorChange("rgb(255, 0, 0)")}
        ></div>
        <div
          className="color-option"
          style={{ backgroundColor: "rgb(255, 208, 0)" }}
          onClick={() => handleColorChange("rgb(255, 208, 0)")}
        ></div>
        <div
          className="color-option"
          style={{ backgroundColor: "rgb(253, 200, 237)" }}
          onClick={() => handleColorChange("rgb(253, 200, 237)")}
        ></div>
      </div>
      <div className="custom-color-input bg">
        <input
          type="text"
          placeholder="Enter color code (#RRGGBB)"
          value={customColor}
          onChange={(e) => setCustomColor(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleCustomColorChange();
          }}
        />
      </div>
      <button className={`custom-color-btn ${isRotated && 'rotate'}`} onClick={handleToggleInput}>
        <FontAwesomeIcon className="plus-icon" icon={faPlus} />
      </button>
    </div>
  );
};

export default ColorChanger;
