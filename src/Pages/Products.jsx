import React from 'react';
import ProductsCard from '../Components/Navbar/ProductsCard';

function Products() {
  // Dummy data for demonstration
  const products = [
    { name: "Product 1", description: "Description 1", price: 199, image: "https://static.vecteezy.com/system/resources/previews/011/765/918/original/white-smartphone-model-apple-iphone-14-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg" },
    { name: "Product 2", description: "Description 2", price: 299, image: "https://static.vecteezy.com/system/resources/previews/011/765/918/original/white-smartphone-model-apple-iphone-14-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg" },
    { name: "Product 3", description: "Description 3", price: 399, image: "https://static.vecteezy.com/system/resources/previews/011/765/918/original/white-smartphone-model-apple-iphone-14-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg" },
    { name: "Product 4", description: "Description 4", price: 499, image: "https://static.vecteezy.com/system/resources/previews/011/765/918/original/white-smartphone-model-apple-iphone-14-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg" },
    { name: "Product 5", description: "Description 5", price: 599, image: "https://static.vecteezy.com/system/resources/previews/011/765/918/original/white-smartphone-model-apple-iphone-14-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg" },
    { name: "Product 6", description: "Description 6", price: 699, image: "https://static.vecteezy.com/system/resources/previews/011/765/918/original/white-smartphone-model-apple-iphone-14-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg" },
    { name: "Product 7", description: "Description 7", price: 799, image: "https://static.vecteezy.com/system/resources/previews/011/765/918/original/white-smartphone-model-apple-iphone-14-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg" },
    { name: "Product 8", description: "Description 8", price: 899, image: "https://static.vecteezy.com/system/resources/previews/011/765/918/original/white-smartphone-model-apple-iphone-14-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg" }
  ];

  return <ProductsCard products={products} />;
}

export default Products;
