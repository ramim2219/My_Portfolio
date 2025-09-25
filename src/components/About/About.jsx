import React from 'react';
import './About.css'
const About = () => {
    const skills = [
        "HTML5","PHP","Bootstrap", "CSS3", "JavaScript", "React.js", "Node.js", "Laravel", "MySQL", "Python", "C++"
      ];
    return (
        <section id="abouts" className="abouts">
            <h2 className='aboutsTitle'>Skills</h2>
            <div className="abouts-list">
                {skills.map((skill, index) => (
                <span key={index} className="about">{skill}</span>
                ))}
            </div>
        </section>
    );
};

export default About;