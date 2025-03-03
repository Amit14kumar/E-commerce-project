import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, addToCart } from '../features/cart/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      handleRemove(item.id);
    }
  };

  const handleCheckout = () => {
    alert('Thank you for your purchase! Your order has been placed.');
  }

  return (
    <div className="shopping-cart-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Image</th>
                <th style={{ textAlign: 'left' }}>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td data-label="Image">
                    <img 
                      src={item.defaultImg} 
                      alt={item.name} 
                      style={{ width: '80px', height: 'auto', borderRadius: '5px' }}
                    />
                  </td>
                  <td data-label="Product">{item.name}</td>
                  <td data-label="Quantity">
                    <div className="quantity-controls">
                      <button className="quantity-btn" onClick={() => handleDecrease(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button className="quantity-btn" onClick={() => handleIncrease(item)}>+</button>
                    </div>
                  </td>
                  <td data-label="Price" className="price-column">${item.price.toFixed(2)}</td>
                  <td data-label="Total" className="price-column">${(item.price * item.quantity).toFixed(2)}</td>
                  <td data-label="Action">
                    <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                      <DeleteIcon style={{ fontSize: '1.2rem' }} />
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <span className="total-price">Total Price: ${totalPrice.toFixed(2)}</span>
            <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
