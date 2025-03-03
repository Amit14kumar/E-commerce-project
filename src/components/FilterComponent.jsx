import React, { useState } from 'react';

export default function FilterComponent({ categories, onFilterChange, minPrice, maxPrice }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    onFilterChange(event.target.value, priceRange);
  };

  const handleMinPriceChange = (event) => {
    const value = Number(event.target.value);
    setPriceRange([value, priceRange[1]]);
    onFilterChange(selectedCategory, [value, priceRange[1]]);
  };

  const handleMaxPriceChange = (event) => {
    const value = Number(event.target.value);
    setPriceRange([priceRange[0], value]);
    onFilterChange(selectedCategory, [priceRange[0], value]);
  };

  return (
    <div className="filter-container">
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <div className="price-range">
        <label>
          Min Price: 
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            step="10"
            value={priceRange[0]}
            onChange={handleMinPriceChange}
          />
          ${priceRange[0]}
        </label>
        <label>
          Max Price: 
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            step="10"
            value={priceRange[1]}
            onChange={handleMaxPriceChange}
          />
          ${priceRange[1]}
        </label>
      </div>
      <span>Price Range: ${priceRange[0]} - ${priceRange[1]}</span>
    </div>
  );
}