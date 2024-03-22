import React from 'react';
import './Footer.css';
import CategorySection from './Footer/CategorySection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  // Define categories
  const categories = {
    "ELECTRONICS": [
      'Mobiles', 'Tablets', 'Laptops', 'Home Appliances', 'Camera, Photo & Video', 'Televisions', 'Headphones', 'Video Games', 'Best Mobile Phones'
    ],
    "FASHION": [
      "Women's Fashion", "Men's Fashion", "Girls' Fashion", "Boys' Fashion", 'Watches', 'Jewellery', "Women's Handbags", "Men's Eyewear"
    ],
    "HOME AND KITCHEN": [
      'Bath', 'Home Decor', 'Kitchen & Dining', 'Tools & Home Improvement', 'Audio & Video', 'Furniture', 'Patio, Lawn & Garden', 'Pet Supplies'
    ],
    "BEAUTY": [
      'Fragrance', 'Make-Up', 'Haircare', 'Skincare', 'Bath & Body', 'Electronic Beauty Tools', "Men's Grooming", 'Health Care Essentials'
    ],
    "BABY & TOYS": [
      'Diapering', 'Baby Transport', 'Nursing & Feeding', 'Baby & Kids Fashion', 'Baby & Toddler Toys', 'Tricycles & Scooters', 'Board Games & Cards', 'Outdoor Play'
    ],
    "TOP BRANDS": [
      'Pampers', 'Apple', 'Nike', 'Samsung', 'Tefal', "L'Oréal Paris", 'Skechers', 'BLACK+DECKER', 'Saudi Pro League', 'Ramadan Sale', "Mother's Day Sale"
    ]
    
  };

  return (
    <footer className="footer">
      <div className="footer-b">
      <div className="category-section">
        {Object.keys(categories).map((title, index) => (
          <CategorySection key={index} title={title} categories={categories[title]} />
        ))}
      </div>
      </div>
    {/* </footer> */}
    {/* // <footer className="text-center bg-body-tertiary footer" style={{ backgroundColor: 'black',  color: 'white'}}> */}
      <div className="pt-2">
        {/* Section: Social media */}
        <h4 className='center'>
        CONNECT WITH US
        </h4>
        <section className="m-4">
          <div className="row d-flex">
            {/* Facebook */}
            <div className="col center"><FontAwesomeIcon icon={faFacebook} size="2x" /></div>
            {/* Twitter */}
            <div className="col center"><FontAwesomeIcon icon={faLinkedin} size="2x" /></div>
            {/* Google */}
            <div className="col center"><FontAwesomeIcon icon={faYoutube} size="2x" /></div>
            {/* Instagram */}
            <div className="col center"><FontAwesomeIcon icon={faInstagram} size="2x" /></div>
          </div>
        </section>
        {/* Section: Social media */}
      </div>
      <div className="copyright"></div>
      <div className="text-center p-3" style={{ backgroundColor: 'black',  color: 'white'}}>
        © 2024 GoBuyGet. All Rights Reserved
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
