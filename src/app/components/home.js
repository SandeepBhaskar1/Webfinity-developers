'use client';

import React from 'react';

const Home = () => {

  const scrollDown = () => {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
  };

  return (
    <div className="home">
      <div className='hero-section'>
        <div className='hero-section-right'>
          <h1 className='animated-title'>
            <span>Innovative </span>
            <span> Web Solutions </span>
            <span> Crafted </span>
            <span> for Your Success!!!</span>
          </h1>
          <p className='animated-paragraph'>Let us bring your online presence to the next level with our professional web development services.</p>
          <button className='animated-button' onClick={scrollDown}>Know More</button>
        </div>

        <div className='hero-section-left'>
          <img className='animated-image' src='/banner-background.jpg' alt='hero image' />
        </div>
      </div>
    </div>
  );
};

export default Home;
