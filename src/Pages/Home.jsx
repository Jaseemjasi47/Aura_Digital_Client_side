import React from "react";
import Banner from "../Components/Navbar/Banner";
import Products from "./Products";
import QuoteCard from "../Components/card";
import HorizontalScrollableProducts from "../Components/Navbar/HorizontalScrollableProducts";
import ProductsCard from '../Components/Navbar/ProductsCard';
import SearchBar from "../Components/SearchBar";
import HorizontalCategory from "../Components/Menu/HorizontalCategory";

function Home() {

  const products = [
    { name: "Product 1", description: "Description 1", price: 199, discountPrice: "₹299", discount: "35%", rating:4.1, image: "https://static.vecteezy.com/system/resources/previews/011/765/918/original/white-smartphone-model-apple-iphone-14-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg" },
    { name: "Product 2", description: "Description 2", price: 299, discountPrice: "₹399", discount: "35%", rating:4.3, image: "https://alshobbies.co.uk/image/cache/catalog/stockimage/lrc/c/C-TRX77086-4-ORNGX-250x250.jpg" },
    { name: "Product 3", description: "Description 3", price: 399, discountPrice: "₹499", discount: "35%", rating:4.2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePpy8In0kmA-GRDYww62vpxrrS9hPRfnUJ-MDVmps19YZ2HH6sydC9KNSWkZe0cP_7oo&usqp=CAU" },
    { name: "Product 4", description: "Description 4", price: 499, discountPrice: "₹599", discount: "35%", rating:4.5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRiGeBZM8K7TOObxQGHG8vD9PjIs4v6h4KF4t3iNspLAhQKs04XRZfvq0QLiyGYG1gXD4&usqp=CAU" },
    { name: "Product 5", description: "Description 5", price: 599, discountPrice: "₹699", discount: "35%", rating:4.1, image: "https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_deep_purple_pdp_image_position-1a_mxla_4.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700" },
    { name: "Product 6", description: "Description 6", price: 699, discountPrice: "₹799", discount: "35%", rating:4.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5eDofQCIZ_XynRH39D-Xt30M475Hhll7wyu5LDeDldKsboO_z8f_Dk_5vk3dBLvwTQA&usqp=CAU" },
    { name: "Product 7", description: "Description 7", price: 799, discountPrice: "₹899", discount: "35%", rating:4.2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXr7C7twVIC5aZ23Fnf69k4Y2QA8M_t4JrIncNPFd0_JVbLkJDOso2w2rD0Sp6xUFh3g&usqp=CAU" },
    { name: "Product 8", description: "Description 8", price: 899, discountPrice: "₹999", discount: "35%", rating:4.6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN-A8km_CoybiJsF_2YdcPk3cEXmmFmFzx_HF_DGxJBzyKVr6JBAXoGF2z-d6mBNYDoc&usqp=CAU" },
    { name: "Product 9", description: "Description 1", price: 199, discountPrice: "₹299", discount: "35%", rating:4.1, image: "https://www.losi.com/dw/image/v2/BFBR_PRD/on/demandware.static/-/Sites-horizon-master/default/dwc7356346/Images/LOS/LOS06000T1_A11_GJYPDDYY.jpg?sw=800&sh=800&sm=fit" },
    { name: "Product 10", description: "Description 2", price: 299, discountPrice: "₹399", discount: "35%", rating:4.3, image: "https://alshobbies.co.uk/image/cache/catalog/stockimage/lrc/c/C-TRX77086-4-ORNGX-250x250.jpg" },
    { name: "Product 11", description: "Description 3", price: 399, discountPrice: "₹499", discount: "35%", rating:4.2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePpy8In0kmA-GRDYww62vpxrrS9hPRfnUJ-MDVmps19YZ2HH6sydC9KNSWkZe0cP_7oo&usqp=CAU" },
    { name: "Product 12", description: "Description 4", price: 499, discountPrice: "₹599", discount: "35%", rating:4.5, image: "https://nourishhealthandwellness.com/wp-content/uploads/2019/06/Skincare-Image-.jpg" }
  ];

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
    </div>
  );
}

export default Home;
