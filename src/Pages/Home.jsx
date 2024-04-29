import React from "react";
import Banner from "../Components/Navbar/Banner";
import Products from "./Products";
import QuoteCard from "../Components/card";
import HorizontalScrollableProducts from "../Components/Navbar/HorizontalScrollableProducts";
import ProductsCard from '../Components/Navbar/ProductsCard';
import SearchBar from "../Components/SearchBar";
import HorizontalCategory from "../Components/Menu/HorizontalCategory";
import products from "../Data/products";
import Footer from "../Components/Footer";

function Home() {

  return (
    <div className="">
      <Banner/>
      <div className=" mt-3">
        <SearchBar/>
        <HorizontalCategory/>
        {/* <QuoteCard /> */}
        <div className="h3 mt-3 mx-3">Bestsellers</div>
        <HorizontalScrollableProducts products={products} />
        <div className="h3 mt-3 mx-3">Recommended for you</div>
        <ProductsCard products={products} />
        <Banner />
        <div className="mx-3">
          <QuoteCard />
        </div>
        <ProductsCard products={products} />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
