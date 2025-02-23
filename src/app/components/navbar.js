import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
            <img src="/webfinity.png" alt="Webfinity Logo" />
        </Link>
      </div>
      <div className="elements">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/aboutus">About Us</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
