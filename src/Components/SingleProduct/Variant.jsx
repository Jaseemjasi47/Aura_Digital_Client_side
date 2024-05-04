import React, { useState } from "react";

function Variant() {
  const [activeColor, setActiveColor] = useState("Titanium Violet");
  const [activeStorage, setActiveStorage] = useState(256);
  const [activeRam, setActiveRam] = useState(12);

  const colorOptions = [
    { name: "Titanium Violet", img: "https://f.nooncdn.com/p/pnsku/N70035266V/45/_/1712239196/0333058e-2b8c-402e-a69a-428054316099.jpg?format=avif&width=240" },
    { name: "Titanium Yellow", img: "https://f.nooncdn.com/p/pnsku/N70035267V/45/_/1712239200/90cf518a-3201-4f06-b335-ace256b6169b.jpg?format=avif&width=240" },
    { name: "Titanium Gray", img: "https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&width=240" },
    { name: "Titanium Black", img: "https://f.nooncdn.com/p/pnsku/N70035265V/45/_/1712239189/479179d5-3f20-4b07-96bf-3ae9bca7b58e.jpg?format=avif&width=240" }
  ];

  const storageOptions = [256, 512, 1024];

  const ramOptions = [6, 8, 12];

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const handleStorageClick = (storage) => {
    setActiveStorage(storage);
  };

  const handleRamClick = (ram) => {
    setActiveRam(ram);
  };

  return (
    <div className="variants">
      <h6 className="text-uppercase">Variants</h6>
      <div className="rem8 pb-1">Colour : {activeColor}</div>
      <div className="color-variant">
        <div className="d-flex">
          {colorOptions.map((option) => (
            <div
              key={option.name}
              className={`variant-img-box ${activeColor === option.name ? "variant-img-box-active" : ""}`}
              onClick={() => handleColorClick(option.name)}
            >
              <img src={option.img} alt={option.name} />
            </div>
          ))}
        </div>
      </div>
      <div className="rem8 pb-1">Internal Memory: {activeStorage} GB</div>
      <div className="storage-variant">
        <div className="d-flex">
          {storageOptions.map((option) => (
            <div
              key={option}
              className={`size-box ${activeStorage === option ? "size-box-active" : ""}`}
              onClick={() => handleStorageClick(option)}
            >
              {option} GB
            </div>
          ))}
        </div>
      </div>
      <div className="rem8 pt-2 pb-1">RAM: {activeRam} GB</div>
      <div className="storage-variant">
        <div className="d-flex">
          {ramOptions.map((option) => (
            <div
              key={option}
              className={`size-box ${activeRam === option ? "size-box-active" : ""}`}
              onClick={() => handleRamClick(option)}
            >
              {option} GB
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Variant;
