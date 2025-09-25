import React from 'react';
import './Skill.css';
import WebDevImg from './images/webDesign.png';
import CompetitiveImg from './images/appdesign.png';
import ToolsImg from './images/ui_ux.png';

const Skill = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="sectionTitle">Technical Skills & Expertise</h2>

      <div className="skillCards">
        {/* Web Development */}
        <div className="skillCard">
          <img src={WebDevImg} alt="Web Development" className="skillCardImg" />
          <h3>Web Development</h3>
          <p>
            Expertise in HTML5, CSS3, JavaScript (ES6+), React, Laravel, Node.js,
            Express.js, Bootstrap, Tailwind CSS, and MySQL for creating dynamic and responsive web applications.
          </p>
        </div>

        {/* Competitive Programming */}
        <div className="skillCard">
          <img src={CompetitiveImg} alt="Competitive Programming" className="skillCardImg" />
          <h3>Competitive Programming</h3>
          <p>
            Solved 1000+ algorithmic problems and participated in ICPC & IUPC contests to sharpen problem-solving skills.
          </p>
          <h4>Profiles</h4>
          <ul className="profileList">
            <li>
              <strong>Codeforces:</strong>{' '}
              <a href="https://codeforces.com/profile/Ramim2219" target="_blank" rel="noopener noreferrer">
                Ramim2219
              </a>{' '}
              (Max Rating: <em>1249</em>)
            </li>
            <li>
              <strong>CodeChef:</strong>{' '}
              <a href="https://www.codechef.com/users/ramim1234" target="_blank" rel="noopener noreferrer">
                ramim1234
              </a>{' '}
              (Max Rating: <em>2★</em>)
            </li>
          </ul>
          <h4>Contests</h4>
          <ul className="contestList">
            <li>ICPC Dhaka Regional Onsite 2024 – Solved 2 problems (Team: PUC_semicolon;)</li>
            <li>ICPC Online Preliminaries: 2021 (PUC_TRT_Fighters), 2023 (PUC_405Found)</li>
            <li>CUET IUPC 2022 – 53rd (PUC_Audacious)</li>
            <li>PUC IUPC 2024 – 48th (PUC_Megalomaniac)</li>
            <li>DUET IUPC 2025 – 64th (PUC_Semicolon;)</li>
            <li>BU IUPC 2025 – 6th</li>
          </ul>
        </div>

        {/* Tools & Others */}
        <div className="skillCard">
          <img src={ToolsImg} alt="Tools & Others" className="skillCardImg" />
          <h3>Tools & Expertise</h3>
          <p>
            Skilled with Git, GitHub, LaTeX, MS Word, MS Excel, PowerPoint, and operating systems including Windows & Linux.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skill;
