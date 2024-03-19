import React from 'react';
import { Link } from "react-router-dom";

function Category() {
  // Define array of categories with names and corresponding images
  const categories = [
    { name: 'Electronic Accessories', image: 'https://img.freepik.com/premium-vector/realistic-digital-devices-isometry-set-isometric-illustrations_480270-71.jpg' },
    { name: 'Mobile Accessories', image: 'https://t4.ftcdn.net/jpg/02/69/84/19/240_F_269841954_IidwZ0kwyu0UruUWUZ3fRUHt9bmxQqrZ.jpg' },
    { name: 'Skin Care', image: 'https://t4.ftcdn.net/jpg/02/94/36/99/360_F_294369904_vBB6EBtlApUF2I0MX7tDm5diGrtbLUE6.jpg' },
    { name: 'Beauty Products', image: 'https://media.istockphoto.com/id/487770577/photo/makeup-set-on-table-front-view.jpg?s=612x612&w=0&k=20&c=IS_ZuHCF3N66jhDMwt2s7J_PGWABlpv2ISEAwpJ4JKU=' },
    { name: 'Baby Essentials', image: 'https://www.shutterstock.com/image-photo/still-life-babt-hygiene-bath-600nw-1176748045.jpg' },
    { name: 'Toys & Games', image: 'https://t4.ftcdn.net/jpg/03/24/42/21/360_F_324422176_Lgn7NTeFyNaUKIDu0Ppls1u8zb8wsKS4.jpg' }
    // Add more categories as needed
  ];

  return (
    <div className="category-container">
      <div className="category-row text-focus-in">
        {categories.map((category, index) => (
          <div className="category-item" key={index}>
          <Link
          to="/SubCategory"
          style={{ textDecoration: "none", color: "inherit" }}
        >
            <img src={category.image} alt={category.name} />
            <p className='' >{category.name}</p>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
