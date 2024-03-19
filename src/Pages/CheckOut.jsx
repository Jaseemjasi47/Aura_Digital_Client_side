import React from 'react'
import './CheckOut.css'

function CheckOut() {
  return (
    <div className='checkout-container'>
      <div className="deliver-address-container">
        Name <span className='adrs-label'>Home</span>
        <div className="address">
            address of the user
        </div>
        <div className="phn-no">9876543210</div>
      </div>

      <div className="co-product-container row ">
        <div className='col'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXr7C7twVIC5aZ23Fnf69k4Y2QA8M_t4JrIncNPFd0_JVbLkJDOso2w2rD0Sp6xUFh3g&usqp=CAU" alt="product image" />
        <div className='quantity m-2'>Qty: 1</div>
        </div>
        <div className='col'>
        <div className="poduct-name">Product Name</div>
        <div>other details</div>
        rating
        <div>Price</div>
        <div>coupon & offer</div>
        <div>delivery details</div> 
        </div>
      </div>

        <div className='price-details-container'>
            Price Details
            <div className='price-details'>
                <p>price(item count)<span>MRP</span></p>
                <p>Discount<span>discount Price</span></p>
                <p>Coupons for you<span>coupons discount</span></p>
                <p>Delivery Charge<span>FREE Delivery</span></p>
            </div>
            Total Amount<span></span>
            <div className="order-save">You Will save 1000 on this order</div>
        </div>
    </div>
  )
}

export default CheckOut
