import React, { useEffect, useState } from 'react';
import './intro.css';
import BG2 from '../../assets/bg2.jpeg'; // your profile image
import { Link } from 'react-scroll';

const Intro = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  return (
    <section id="intro">
      <div className="introContent">
        <h2 className="hello">Hello,</h2>
        <h1 className="introText">
          I'm <span className="introName">Ramim</span>
        </h1>
        <p className="introPara">
          I'm a <span className="highlight2">Full Stack Developer</span> &{' '}
          <span className="highlight2">Competitive Programmer</span>.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <i className="fa-solid fa-bag-shopping"></i>&nbsp; Hire Me
          </button>
        </Link>
      </div>

      {/* Background Profile Image */}
      <img
        src={BG2}
        alt="Profile"
        className={`bg-circle ${animate ? 'animate-in' : ''}`}
      />
    </section>
  );
};

export default Intro;
