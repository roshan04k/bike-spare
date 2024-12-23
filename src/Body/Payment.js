import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './Payment.css';

const Payment = ({ cartItems = [] }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: ''
  });

  const [orderNumber, setOrderNumber] = useState(1); // Track order numbers
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderNumber(orderNumber + 1); // Increment order number for the next order
    generatePDF();
    setSubmitted(true);
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Order Details", 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 20, 30);
    doc.text(`Phone Number: ${formData.phoneNumber}`, 20, 40);
    doc.text(`Address: ${formData.address}`, 20, 50);

    doc.text("Order Summary:", 20, 70);

    // Check if cartItems is not empty
    if (cartItems.length > 0) {
      cartItems.forEach((item, index) => {
        const productText = `${item.name} (x${item.quantity}) - $${item.price * item.quantity}`;
        doc.text(productText, 20, 80 + index * 10);
      });

      const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      doc.text(`Total Price: $${total}`, 20, 100 + cartItems.length * 10);
    } else {
      doc.text("No items in the cart", 20, 80);
    }

    doc.save(`${formData.name}_Order${orderNumber}.pdf`);
  };

  return (
    <div className="payment-page">
      {!submitted ? (
        <>
          <h2>Payment Details</h2>
          <form onSubmit={handleSubmit} className="payment-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="payment-submit-btn">Submit Payment</button>
          </form>
        </>
      ) : (
        <div className="payment-confirmation">
          <h2>Thank you for your order, {formData.name}!</h2>
          <p>Your order details and receipt have been downloaded as a PDF.</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
