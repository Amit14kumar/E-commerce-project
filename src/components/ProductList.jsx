import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import FilterComponent from './FilterComponent';

export default function ProductList({ products }) {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const categories = [...new Set(products.map(product => product.category))];
  const minPrice = Math.min(...products.map(product => product.price));
  const maxPrice = Math.max(...products.map(product => product.price));

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleFilterChange = (category, priceRange) => {
    const filtered = products.filter(product => {
      return (
        (category === '' || product.category === category) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="main-product-container">
      <section className="product-grid">
      <FilterComponent 
        categories={categories} 
        onFilterChange={handleFilterChange} 
        minPrice={minPrice} 
        maxPrice={maxPrice} 
      />
        <h2>Featured Products</h2>
        <div className="product-container">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <img 
                src={product.defaultImg} 
                alt={product.name} 
                className="default-img" 
              />
              <img 
                src={product.hoverImg} 
                alt={`Alternate view of ${product.name}`} 
                className="hover-img" 
              />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <p>Available: {product.available}</p>
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
