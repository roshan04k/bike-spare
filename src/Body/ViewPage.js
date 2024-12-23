import React, { useState, useEffect } from 'react';
import './ViewPage.css';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const ViewPage = ({ cartItems, onRemove, onQuantityChange }) => {
  const navigate = useNavigate();

  // State to store total price
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate the total price based on the cart items and their quantities
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const handleBuyNow = () => {
    // Navigate to the payment page
    alert("Proceeding to checkout with all items!");
    navigate('/payment'); // Redirect to payment page
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      const updatedCartItems = cartItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      onQuantityChange(updatedCartItems); // Pass updated cart items back to parent
    }
  };

  return (
    <>
      <Header />
      <h2>Your Cart</h2>
      <div className='view-page'>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="api">
              <img className='apiimage' src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <h4 className='apiprice'>Price: ${item.price}</h4>

              {/* Input to change the quantity of the product */}
              <div className="quantity-selector">
                <label>Quantity: </label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  min="1"
                />
              </div>

              {/* Remove and Buy Now buttons */}
              <button className="viewaddtocart" onClick={() => onRemove(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>

      {/* Order Summary section */}
      {cartItems.length > 0 && (
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-details">
            {cartItems.map((item, index) => (
              <div key={index} className="order-item">
                <span>{item.name} (x{item.quantity})</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
            <div className="order-total">
              <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>
          </div>

          {/* Buy Now button for all items */}
          <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ViewPage;
