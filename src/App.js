import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import products from './ProductsData/products';
import './App.css';


function App() {
  const [productList] = useState(products);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
           
            <ProductList products={productList} />
          </>
        } />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}

export default App;
