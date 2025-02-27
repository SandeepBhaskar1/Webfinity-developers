import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const footer = () => {
  return (
    <div className='footer'>
        <div className='logo'>
            <img src='/webfinity.png' alt='webfinity developers logo' />
        </div>

        <div className='footer-contact'>
            <h3>Webfinity Developers</h3>
            <p>Chikmagalur, Karnataka, India - 577101</p>
            <p><FontAwesomeIcon icon={faPhone} /> +91 1234567890 +91 0123456789</p>
            <p><FontAwesomeIcon icon={faEnvelope}/> info@webfinitydevelopers.com</p>
            <p><FontAwesomeIcon icon={faGlobe} /> www.webfinitydevelopers.com</p>
            <p></p>
        </div>

        <div className='footer-links'>
            <h3>Pages</h3>
            <p>About Us</p>
            <p>Blogs</p>
            <p>Contact Us</p>
        </div>
      
    </div>
  )
}

export default footer
