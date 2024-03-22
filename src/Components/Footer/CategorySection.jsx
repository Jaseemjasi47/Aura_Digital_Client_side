import React from 'react';
import './CategorySection.css'; // Import CSS file for styling

const CategorySection = ({ title, categories }) => {
  return (
    <div className="category-section">
        <div className='mx-2 center'>
      <h2 className="category-title">{title}</h2>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default CategorySection;