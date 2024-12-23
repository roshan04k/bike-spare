import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Header from './header';
import Footer from './footer';

function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5); // Assuming 5 slides
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, []);

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  const slideImages = [
    'https://media.istockphoto.com/id/686488692/photo/old-parts-of-motorcycles-background-with-hard-light-black-and-white-tone-repair-and.jpg?s=612x612&w=0&k=20&c=wJuwJlwsyR_sY_fQeISGdx2w2DXDyUAd97d6hDQTvfM=',
    'https://media.istockphoto.com/id/604031956/vector/motorbike-motorcycle-race-and-spare-parts-vector-icons.jpg?s=612x612&w=0&k=20&c=GuSMmf4D7Gm37y7dWtnpVb-qHw-uYuYbjrEtL0y1VEI=',
    'https://media.istockphoto.com/id/2083542235/photo/mechanic-repairing-the-engine-of-a-motorcycle-at-a-garage.webp?b=1&s=612x612&w=0&k=20&c=8J5-E0wsbBQWZCzY50Urickc8ov8zlRElx8GLBXQODQ=',
    'https://media.istockphoto.com/id/1406564089/photo/car-spare-parts.jpg?s=612x612&w=0&k=20&c=coSlai8Lxo22ATQhikKhPxtQcOBN1mrd-SqvSRZ1sjQ=',
    'https://media.istockphoto.com/id/663887552/vector/auto-and-moto-parts.jpg?s=612x612&w=0&k=20&c=T3G9mvMfAwHIk-9TDss17QAPmEhFq1dxsEQe2FqIE8E='
  ];

  const spareParts = [
    { name: 'Brake Pads', price: '$30', imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQI4uzg2-jRezpwmI09iA7rhTimgg2PA2eNMAC0yHP1JQepzMMBcdMgpxIMy_qC' },
    { name: 'Chain Kit', price: '$50', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLuqoOY9eMS4attp3dEei--lmAQR6bHpHk8xT7JErZO_ereHQTciYgvccfmHD-' },
    { name: 'Exhaust System', price: '$120', imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPzHfrR497k36EkLkq_pzUWsSPLHLh3yfvqoQH8W0WIIod5W7Ckgpldil9Q39l' }
  ];

  return (
    <>
      <Header />
      <div className="landing-page">
        <div className="carousel">
          <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slideImages.map((imageUrl, index) => (
              <div key={index} className="carousel-item" style={{ backgroundImage: `url(${imageUrl})` }}>
              </div>
            ))}
          </div>
          <div className="carousel-indicators">
            {Array.from({ length: 5 }).map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => handleSlideClick(index)}
              ></button>
            ))}
          </div>
        </div>

        <div className="product-info">
          <h2>Discover the Best Bike Spares</h2>
          <p>We offer a wide range of high-quality bike spares to keep your ride in top condition.</p>
          <Link to="/product" className="explore-button">
            Explore Products
          </Link>
        </div>

        {/* User Ratings Section */}
        <div className="user-ratings">
          <h3>What Our Customers Say</h3>
          <div className="rating">
            <p>"Excellent service and top-quality spares!" - <strong>John D.</strong></p>
            <p>"Affordable and durable bike parts!" - <strong>Susan B.</strong></p>
            <p>"Fast delivery and great customer support!" - <strong>Mike W.</strong></p>
          </div>
        </div>

        {/* About Section */}
        <div className="about-section">
          <h3>About Our Website</h3>
          <div className="about-content">
            <img src="https://media.istockphoto.com/id/2085107812/photo/mechanic-cleaning-the-side-view-mirror-of-a-motorcycle-at-a-garage.webp?b=1&s=612x612&w=0&k=20&c=ZQSLdcT3fk6wCRCZC1EDhd9mU6ifLVxNDIdPKSPbiGU=" alt="About Us" />
            <p>
              Our bike spare parts e-commerce site offers the best selection of parts for your motorcycle. Whether you need
              essential replacements or performance upgrades, we’ve got you covered.
            </p>
          </div>
        </div>

        {/* Bike Spare Parts Display */}
        <div className="spare-parts">
          <h3>Our Top Bike Spare Parts</h3>
          <div className="spare-parts-list">
            {spareParts.map((part, index) => (
              <div key={index} className="spare-part">
                <img src={part.imageUrl} alt={part.name} />
                <h4>{part.name}</h4>
                <p>{part.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
