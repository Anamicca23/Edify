import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="navbar-logo" />

        <ul className={`navbar-links ${mobileMenu ? 'active' : ''}`}>
          <li><Link to="hero" smooth duration={500}>Home</Link></li>
          <li><Link to="program" smooth offset={-260} duration={500}>Program</Link></li>
          <li><Link to="about" smooth offset={-150} duration={500}>About us</Link></li>
          <li><Link to="campus" smooth offset={-260} duration={500}>Campus</Link></li>
          <li><Link to="facilities" smooth offset={-210} duration={500}>Facilities</Link></li>
          <li><Link to="teachers" smooth offset={-210} duration={500}>Teachers</Link></li>
          <li><Link to="testimonials" smooth offset={-260} duration={500}>Testimonials</Link></li>
          <li><Link to="contact" smooth offset={-260} duration={500} className="contact-btn">Contact us</Link></li>
        </ul>
        <div className={`menu-toggle ${mobileMenu ? 'open' : ''}`} onClick={() => setMobileMenu(!mobileMenu)}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
