import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faBrush, faWrench, faTruckPickup, faBroom, faPlug } from '@fortawesome/free-solid-svg-icons';
import './css/Services.css';

const Services = () => {
  return (
    <section className="services-section">
      <div className="row">
        <h2 className="section-heading">Our Services</h2>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faHammer} />
            </div>
            <h3>Custom Website Design</h3>
            <p>Tailored designs that reflect the client's brand identity and target audience.
            Focus on creating unique layouts, color schemes, and typography.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faBrush} />
            </div>
            <h3>Responsive Web Design</h3>
            <p>Design websites that adapt seamlessly to different screen sizes and devices.
            Ensure optimal user experience across desktops, tablets, and smartphones.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faWrench} />
            </div>
            <h3>UI/UX Design</h3>
            <p>Create intuitive user interfaces (UI) and enriching user experiences (UX).
            Prioritize usability, accessibility, and interaction design principles.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faTruckPickup} />
            </div>
            <h3>SEO-Friendly Design</h3>
            <p>Optimize design elements for search engine visibility and performance.
            Improve loading speeds, mobile usability, and structured data implementation.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faBroom} />
            </div>
            <h3>Conversion Rate Optimization (CRO)</h3>
            <p>Design layouts and CTAs to maximize conversions and user engagement.
            A/B testing of design elements to improve conversion rates over time.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faPlug} />
            </div>
            <h3>Maintenance and Support</h3>
            <p>Provide ongoing maintenance and support services post-launch.
            Update designs, fix bugs, and implement security patches regularly.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
