import React from 'react';
import './MYinfo.css';
import BG3 from '../../assets/img2.jpeg'; // Replace with your actual image

const MYinfo = () => {
  const infoList = [
    { label: 'Degree', value: 'B.Sc. in Computer Science & Engineering, Premier University (CGPA: 3.67)' },
    { label: 'Location', value: 'Chattogram, Bangladesh' },
    { label: 'Email', value: 'shafayetullah200119@gmail.com', link: 'mailto:shafayetullah200119@gmail.com' },
    { label: 'LinkedIn', value: 'View Profile', link: 'https://www.linkedin.com/in/shafayet-ullah-ramim-05976a237/' },
    { label: 'GitHub', value: 'ramim2219', link: 'https://github.com/ramim2219' },
    { label: 'Codeforces', value: 'Ramim2219 ', maxRating: '1249 Pupil', link: 'https://codeforces.com/profile/Ramim2219' },
    { label: 'Skills', value: 'C, C++, Python, React, Laravel, MySQL, HTML5, CSS3, PHP, JavaScript, Tailwind CSS, Bootstrap' },
    { label: 'Organization', value: 'PUC CSE Club: Competitive Programming Trainer', highlight: true },
  ];

  return (
    <section id="about" className="myInfo">
      <div className="myInfoContainer">
        <div className="myInfoImage">
          <img src={BG3} alt="Profile" />
        </div>
        <div className="myInfoContent">
          <h2 className="myInfoTitle">About Me</h2>
          <p className="myInfoDesc">
            I am a Computer Science & Engineering student passionate about full stack development and competitive programming.
            I have solved over 1000+ algorithmic problems and actively participate in ICPC and IUPC contests.
            I specialize in building scalable web applications using React, Laravel, and MySQL.
          </p>

          <h3 className="myInfoSubTitle">Quick Facts</h3>
          <ul className="myInfoList">
            {infoList.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong>{' '}
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <span className={item.highlight ? 'highlight' : ''}>
                      {item.value}
                    </span>
                    {item.maxRating && <span className="highlight"> {item.maxRating}</span>}
                  </a>
                ) : (
                  <>
                    <span className={item.highlight ? 'highlight' : ''}>
                      {item.value}
                    </span>
                    {item.maxRating && <span className="highlight"> {item.maxRating}</span>}
                  </>
                )}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default MYinfo;
