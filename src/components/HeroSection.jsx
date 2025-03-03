import React from 'react';

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div id="hero-split" className="overlay">
        <div id="half" className="one bc">
          <div className="text-black">Introducing</div> 
          <div className="text-white">Our Fall Collection</div> 
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
}
