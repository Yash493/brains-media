import React from 'react';
import './css/Mission.css';
import missionImage from './assets/mission.png'; // Ensure this image has a transparent background

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="mission-content">
        <h2>Our Mission</h2>
        <ul>
          <li>Craft compelling digital experiences through innovative web design solutions.</li>
          <li>Understand our clients' unique needs and aspirations to deliver tailored designs.</li>
          <li>Ensure seamless integration of cutting-edge technologies in all our projects.</li>
          <li>Drive measurable results and business growth for our clients.</li>
          <li>Foster long-term partnerships based on trust, creativity, and customer satisfaction.</li>
        </ul>
      </div>
      <div className="mission-image">
        <img src={missionImage} alt="Our Mission" />
      </div>
    </div>
  );
};

export default Mission;
