import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">김개발</div>
        <ul className="nav-links">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 