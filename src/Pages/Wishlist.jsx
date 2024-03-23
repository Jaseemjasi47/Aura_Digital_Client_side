import React, { useEffect } from 'react'
import HorizontalScrollableProducts from '../Components/Navbar/HorizontalScrollableProducts';
import products from '../Data/products';


function Wishlist() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
      }, []);
  return (
    <>
    <div className='empty-wishlist text-center center'>
        <div className='blur-bg-card'>
    <h2 className='py-4'>Your Wishlist looks empty.</h2>
    <h5>What are you waiting for?</h5>
    <button className="cyan-btn my-4 c-fit ">START SHOPPING</button>
    </div>
    </div>
    <h3 className='my-3 px-3'>Bestsellers for you</h3>
    <HorizontalScrollableProducts products={products}/>
    </>
  )
}

export default Wishlist
