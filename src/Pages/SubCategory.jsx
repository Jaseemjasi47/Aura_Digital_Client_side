import React from "react";
import SearchBar from "../Components/SearchBar";
import Banner from "../Components/Navbar/Banner";
import HorizontalScrollableProducts from "../Components/Navbar/HorizontalScrollableProducts";
import products from "../Data/products";
import ProductsCard from "../Components/Navbar/ProductsCard";

function SubCategory() {
  return (
    <div>
      <SearchBar />
      <Banner />
      <div className="d-flex center my-3">
      <div className="sub-menu-items">Tablets</div>
      <div className="sub-menu-items-active">Mobiles</div>
      <div className="sub-menu-items">Accessories</div>
      </div>
      <h2 className="m-2 mb-3">Curated for you</h2>
      <HorizontalScrollableProducts products={products} />
      <div className="mega-deal py-2">
        <h2 className="m-2 mb-3">Mega Deal</h2>
      <ProductsCard products={products} />
      </div>
      <h2 className="m-2 mb-3">New arrivals</h2>
      <HorizontalScrollableProducts products={products} />
    </div>
  );
}

export default SubCategory;
