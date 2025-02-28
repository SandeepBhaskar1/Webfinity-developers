"use client";

import React from 'react';

const Navbar = () => {
  const handleServicesClick =(e)=> {
    e.preventDefault();

    const servicesSection = document.getElementById('what-we-do');
    if (servicesSection){
      servicesSection.scrollIntoView({behavior: 'smooth'})
    }
  };

  const handleContactClick =(e)=> {
    e.preventDefault();

    const contactSection = document.getElementById('contact-section');
    if (contactSection){
      contactSection.scrollIntoView({behavior: 'smooth'});
    }
  };

  const handleHeroClick =(e)=> {
    e.preventDefault();

    const heroSection = document.getElementById('hero-section');
    if (heroSection){
      heroSection.scrollIntoView({behavior: 'smooth'});
    }
  };

  const handleAboutusClick =(e)=> {
    e.preventDefault();

    const aboutusSection = document.getElementById('aboutus-section');
    if (aboutusSection){
      aboutusSection.scrollIntoView({behavior: 'smooth'});
    }
  };


  return (
    <nav>
      <div className="logo">
        <a href="hero-section" onClick={handleHeroClick}>
          <img src="/webfinity.png" alt="Webfinity Logo" />
        </a>
      </div>
      <div className="elements">
        <ul>
          <li><a href="#hero-section" onClick={handleHeroClick}>Home</a></li>
          <li><a href="#aboutus-section" onClick={handleAboutusClick}>About Us</a></li>
          <li><a href='#what-we-do' onClick={handleServicesClick}>Services</a></li>
          <li><a href="#blogs-section">Blogs</a></li>
          <li><a href="#contact-section" onClick={handleContactClick}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;