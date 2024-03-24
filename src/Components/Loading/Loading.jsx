import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading-body">
      <div className="container">
        <div className="wrapper">
          {[...Array(2)].map((_, index) => (
            <div className="wrapper-cell" key={index}>
              <div className="image animated-background "></div>
              <div className="text">
                {[...Array(2)].map((_, i) => (
                  <div key={i}>
                    <div className="text-line animated-background"></div>
                    <div className="sm-text-line animated-background"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProductCardLoading />
    </div>
  );
}

export default Loading;

export function ProductCardLoading() {
  return (
    <div className="loading-body">
      <div className="container">
        <div className="pc-wrapper center">
          Product card
          <div className="pc-image animated-background "></div>
          <div className=" ">
            <div className="text-line animated-background  my-2"></div>
            <div className="sm-text-line animated-background "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HorizontalScrollableProductsLoading() {
  return (
    <div className="product-card-h">
      <div className="hpc-image animated-background "></div>
      <div className="px-2">
        <div className="sm-text-line animated-background "></div>
        <div style={{ fontSize: ".7rem" }}>
          <div className="ml-2">
            <div className="m-text-line animated-background "></div>
            <div className="sm-text-line animated-background "></div>
            <div className="center">
            <div className="sm-text-line animated-background "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
