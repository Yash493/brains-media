import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import './App.css';
import AboutUs from './components/Aboutus';
import Services from './components/Services';
import Vision from './components/Vision';
import Mission from './components/Misission';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider/>
      <AboutUs/>
      <Services/>
    <Vision/>
    <Mission/>
    <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
