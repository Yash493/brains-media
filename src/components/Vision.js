import React from 'react';
import './css/Vision.css';
import visionImage from './assets/vision.png'; 

const Vision = () => {
  return (
    <div className="vision-container">
      <div className="vision-image">
        <img src={visionImage} alt="Our Vision" />
      </div>
      <div className="vision-content">
        <h2>Our Vision</h2>
        <p>
          To be the leading innovator in web design, empowering businesses to achieve their digital
          goals through creative excellence and technological expertise. We envision:
        </p>
        <ul>
          <li>Setting new standards in user-centric design that enhances usability and engagement.</li>
          <li>Pioneering sustainable and accessible web solutions that cater to diverse audiences.</li>
          <li>Innovating continuously to integrate emerging technologies seamlessly into our design processes.</li>
          <li>Cultivating a culture of collaboration and creativity to inspire groundbreaking digital experiences.</li>
          <li>Expanding our global footprint while maintaining local expertise and personalized service.</li>
        </ul>
      </div>
    </div>
  );
};

export default Vision;
