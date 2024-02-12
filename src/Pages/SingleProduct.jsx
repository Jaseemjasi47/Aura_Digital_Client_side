import React from 'react';
import './singleProduct.css';

function SingleProduct() {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-lg-6">
          <div className="">
            <img src="https://static.vecteezy.com/system/resources/previews/011/765/918/original/white-smartphone-model-apple-iphone-14-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg" alt="Product" className="img-fluid" />
          </div>
          <div>
          <div className="row mt-3">
            <div className="col">
              <div className="sub-images">
                <img src="https://static.vecteezy.com/system/resources/previews/011/765/918/original/white-smartphone-model-apple-iphone-14-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg" alt="Product" className="img-fluid" />
              </div>
            </div>
            <div className="col">
              <div className="sub-images">
                <img src="https://static.vecteezy.com/system/resources/previews/011/765/918/original/white-smartphone-model-apple-iphone-14-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg" alt="Product" className="img-fluid" />
              </div>
            </div>
            <div className="col">
              <div className="sub-images">
                <img src="https://static.vecteezy.com/system/resources/previews/011/765/918/original/white-smartphone-model-apple-iphone-14-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg" alt="Product" className="img-fluid" />
              </div>
            </div>
          </div>  
          </div>
        </div>
        <div className="col-lg-6 ">
          <h2 className='text-center '>Product Name</h2>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Price: $100</p>
          <div className="center">
          <button className="cyan-btn px-5 mx-1">Add to Cart</button>
          <button className="cyan-btn px-5 mx-1">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

