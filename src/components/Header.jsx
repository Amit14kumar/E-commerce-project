import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import logo from '../images/logo.png';


export default function Header() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <div className="header-container">
        {/* Brand / Logo */}
        <div className="brand-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Atrox Logo" className="logo-img" />
            <span className="brand-name">
              <span className="letter-A">A</span>TRO<span className="brand-x">X</span>
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/collection">Collection</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* CTA: Shop Now and Cart Icon */}
        <div className="cta">
          <Link to="/shop" className="shop-now-btn outlined">
            Shop Now
          </Link>
          <Link to="/shopping-cart" className="cart-icon-link">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCartRoundedIcon className="cart-icon" />
            </Badge>
          </Link>
        </div>

        {/* User Options */}
        <div className="user-options">
          <Link to="/signin" className="user-link">Sign In</Link>
          <Link to="/signup" className="user-link">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}
