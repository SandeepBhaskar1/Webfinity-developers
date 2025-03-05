'use client';

import React from 'react';

const Home = () => {

  const scrollDown = () => {
    window.scrollTo({
      top: 1982,
      behavior: 'smooth',
    });
  };

  return (
    <section id='hero-section' className="home">
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
          <video className='animated-video' autoPlay muted loop playsInline src='/webfinity-background.mp4' alt='background' />
        </div>
      </div>
    </section>
  );
};

export default Home;
