import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import MenuBar from './images/menu.svg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <i className="logo">My Portfolio</i>
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">
          Home
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">
          About Me
        </Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">
          Skills
        </Link>
        
        <Link activeClass="active" to="Works" spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">
          Portfolio
        </Link>
        {/* ✅ New Certifications Section */}
        <Link activeClass="active" to="certifications" spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">
          Certifications
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem" onClick={() => setShowMenu(false)}>
          Contact me
        </Link>
        {/* ✅ Download CV Option */}
        <a href="/cv.pdf" download className="desktopMenuListItem downloadBtn">
          Download My CV
        </a>
      </div>

      <button
        className="desktopMenuBtn"
        onClick={() => {
          const contactSection = document.getElementById('contact');
          const offset = -79;
          const y = contactSection.getBoundingClientRect().top + window.pageYOffset + offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }}
      >
        <i className="fa-solid fa-message"></i> &nbsp;Contact Me
      </button>

      <img
        src={MenuBar}
        alt="menu"
        className="navMenuImg"
        onClick={() => setShowMenu(!showMenu)}
      />

      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>
          Home
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>
          About Me
        </Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>
          Skills
        </Link>
        <Link activeClass="active" to="Works" spy={true} smooth={true} offset={-80} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>
          Portfolio
        </Link>
        {/* ✅ Mobile Menu Certifications */}
        <Link activeClass="active" to="certifications" spy={true} smooth={true} offset={-80} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>
          Certifications
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>
          Contact me
        </Link>
        {/* ✅ Mobile Menu CV Download */}
        <a href="/cv.pdf" download className="ListItem">
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
