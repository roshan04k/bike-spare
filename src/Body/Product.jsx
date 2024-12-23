import React from 'react';
import './style.css';
import CartButton from './CartButton';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

function Product({ items, onAddToCart }) {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleBuyNow = () => {
    // Handle the buy now logic, e.g., redirect to a payment page
    alert("Proceeding to checkout!");
    navigate('/payment'); // Use useNavigate for routing
  };

  return (
    <>
    <Header />
    <div className='product'>
      {
        items.map((val, index) =>
          val.availability
            ?
            <div key={index} className="api">
              <img className='apiimage' src={val.image} alt='' />
              <h2>{val.name}</h2>
              <p>{val.description}</p>
              <h4 className='apiprice'>Price: ${val.price}</h4>
              <div className='apibtn'>
                <button className="apiaddtocart" onClick={() => handleBuyNow(val)}>Buy Now</button>
                <CartButton onAddToCart={() => onAddToCart(val)} />
              </div>
            </div>
            :
            <div key={index} className="api">
              <img className='apiimage' src={val.image} alt='' />
              <h2>{val.name}</h2>
              <button className="apinotavail">Not Available</button>
            </div>
        )
      }
    </div>
    <Footer />
    </>
  );
}

export default Product;