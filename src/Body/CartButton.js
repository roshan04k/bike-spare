import React from 'react';

export default function CartButton({ onAddToCart }) {
  return (
    <div>
      <button className="apiaddtocart" onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}