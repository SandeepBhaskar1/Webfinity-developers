import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='logo'>
        <img src='/webfinity.png' alt='webfinity developers logo' />
      </div>

      <div className='footer-contact'>
        <h3>Webfinity Developers</h3>
        <p>Chikmagalur, Karnataka, India - 577101</p>
        <p><FontAwesomeIcon icon={faPhone} /> +91 1234567890 +91 0123456789</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> info@webfinitydevelopers.com</p>
        <p><FontAwesomeIcon icon={faGlobe} /> www.webfinitydevelopers.com</p>
      </div>

      <div className='footer-links'>
        <h3>Pages</h3>
        <ul>
          <li><a href='/contact'>Contact Us</a></li>
          <li><a href='/aboutus'>About Us</a></li>
          <li><a href='/blogs'>Blogs</a></li>
        </ul>
      </div>

      <div className='social-media'>
        <h3>Follow us on</h3>
        <a href='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebook} /></a>
        <a href='https://www.instagram.com'><FontAwesomeIcon icon={faInstagram} /></a>
        <a href='https://www.x.com'><FontAwesomeIcon icon={faXTwitter} /></a>
      </div>
    </div>
  );
};

export default Footer;