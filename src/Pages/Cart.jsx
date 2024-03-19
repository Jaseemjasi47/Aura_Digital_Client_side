import React from 'react'
import SearchBar from '../Components/SearchBar'
import { useCart } from '../Components/Navbar/CartContext';

function Cart() {
    const { resetCart } = useCart();
    
  return (
    <div>
      <SearchBar/>
      <div className="center mt-5">
      <button className='cyan-btn' onClick={resetCart}>Clear Cart</button>
      </div>
    </div>
  )
}

export default Cart
