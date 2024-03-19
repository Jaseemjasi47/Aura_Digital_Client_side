import React from 'react'
import './TrendingSection.css'

function TrendingSection({ products }) {
  return (
    <div className="container mt-5">
      <div className="row row-cols-2 row-cols-md-4">
        {products.map((product, index) => (
          <div className="col mb-2" key={index}>
            <div className="card product-card">
              <div
                className="wishlist-icon"
                onClick={() => toggleWishlist(index)}
              >
                {wishlist.includes(index) ? (
                  <FontAwesomeIcon
                    icon={faHeartSolid}
                    style={{ color: "red" }}
                    className="bubbling"
                  />
                ) : (
                  <FontAwesomeIcon icon={faHeartRegular} />
                )}
              </div>
              <Link
                to="/product"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="rating-show">{product.rating}<FontAwesomeIcon icon={faStarSolid} style={{ width: "10px", marginLeft: "5px" }} /></div>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className=" text-center">
                  <h5 style={{ fontSize: "1rem" }}>
                    {product.name}
                  </h5>
                  <p style={{ fontSize: ".8rem" }}>
                    Price: ₹{product.price}
                  </p>
                </div>
              </Link>
              {/* <a
                className="cyan-btn center m-1"
                style={{ fontSize: "1rem" }}
                onClick={addToCart}
              >
                Add to Cart
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingSection
