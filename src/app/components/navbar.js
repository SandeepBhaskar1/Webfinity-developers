"use client";

import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const timeoutId = useRef(null);

  const handleServicesClick = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById('what-we-do');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroClick = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutusClick = (e) => {
    e.preventDefault();
    const aboutusSection = document.getElementById('aboutus-section');
    if (aboutusSection) {
      aboutusSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hideNavbar = () => {
    setIsVisible(false);
  };

  const showNavbar = () => {
    setIsVisible(true);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(hideNavbar, 5000);
  };

  useEffect(() => {
    timeoutId.current = setTimeout(hideNavbar, 5000);

    const handleMouseMove = (e) => {
      if (e.clientY < 50) { // Adjust threshold as needed
        showNavbar();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timeoutId.current);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <nav style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.3s ease-in-out' }}>
        <div className="logo">
          <a href="hero-section" onClick={handleHeroClick}>
            <img src="/webfinity.png" alt="Webfinity Logo" />
          </a>
        </div>
        <div className="elements">
          <ul>
            <li><a href="#hero-section" onClick={handleHeroClick}>Home</a></li>
            <li><a href="#aboutus-section" onClick={handleAboutusClick}>About Us</a></li>
            <li><a href="#what-we-do" onClick={handleServicesClick}>Services</a></li>
            <li><a href="#blogs-section">Blogs</a></li>
            <li><a href="#contact-section" onClick={handleContactClick}>Contact Us</a></li>
          </ul>
        </div>
      </nav>
      <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer">
        <img src="/whatsapp.png" alt="WhatsApp" className="whatsapp" />
      </a>
    </>
  );
};

export default Navbar;