import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/Slider.css';
import slider1 from './assets/slider1.jpg';
import slider2 from './assets/slider2.jpg';
import slider3 from './assets/slider3.jpg';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={slider1} alt="Slide 1" />
          <div className="slide-content">
            <h2>Functional Websites</h2>
            <p>Transform your online presence with stunning websites.</p>
          </div>
        </div>
        <div className="slide">
          <img src={slider2} alt="Slide 2" />
          <div className="slide-content">
            <h2>Customized Solutions</h2>
            <p>Create tailored web solutions that meet your business goals.</p>
          </div>
        </div>
        <div className="slide">
          <img src={slider3} alt="Slide 3" />
          <div className="slide-content">
            <h2>Responsive Designs</h2>
            <p>Deliver seamless user experiences with responsive designs.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
