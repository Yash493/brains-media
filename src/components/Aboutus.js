import React from 'react';
import './css/Aboutus.css';
import aboutUsImage from './assets/logo3.jpg'; // Ensure this image path is correct

const AboutUs = () => {
  return (
    <div className="about-us-container">
    <div className="about-us-content">
      <h4>About Us</h4>
      <h1>Empowering Businesses with Exceptional Website Development</h1>
      <p>
        At Brains Media Solutions, we specialize in creating powerful online solutions through expert website development services. Our mission is to transform your digital presence with innovative designs and robust development strategies.
      </p>
      <button className="learn-more-button">Learn More</button>
    </div>
    <div className="about-us-image">
      <img src={aboutUsImage} alt="About Us" />
    </div>
  </div>
  );
};

export default AboutUs;
