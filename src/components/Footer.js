// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a href="https://www.facebook.com/brainsmediasolutions" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://x.com/brainsmedia2012?mx=2https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/company/brains-media-solutions-pvt-ltd-/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/Brains_Media_Solutions/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="footer-contact">
          <a href="mailto:contact@brainsmediasolutions.com">
            <FontAwesomeIcon icon={faEnvelope} />
            contact@brainsmediasolutions.com
          </a>
        </div>
        <div className="footer-info">
          <p>&copy; 2024 Brains Media Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
