import React from "react";
import './Certifications.css'; // New CSS file

// Import images from local folder
import reactImg from './images/react.png';
import cssImg from './images/css.png';
import icpcImg from './images/icpc.png';

const certifications = [
  {
    name: "Frontend Developer (React)",
    organization: "HackerRank",
    credentialId: "FCD21A368F6D",
    credentialUrl: "https://www.hackerrank.com/certificates/iframe/fcd21a368f6d",
    media: reactImg, // Local image
  },
  {
    name: "CSS (Basic)",
    organization: "HackerRank",
    credentialId: "71480A1C2957",
    credentialUrl: "https://www.hackerrank.com/certificates/iframe/71480a1c2957",
    media: cssImg, // Local image
  },
  {
    name: "ICPC Participations Certificates",
    organization: "ICPC (International Collegiate Programming Contest)",
    credentialId: "BPMRTMOJON04",
    credentialUrl: "https://icpc.global/ICPCID/BPMRTMOJON04",
    media: icpcImg, // Local image
  },
];

const Certifications = () => {
  return (
    <section id="certifications">
      <h2 className="certificationsTitle">Certifications & Achievements</h2>
      <span className="certificationsDesc">
        Below are some of my professional certifications demonstrating my expertise in web development and competitive programming.
      </span>
      <div className="certificationsCards">
        {certifications.map((cert, index) => (
          <div className="certificationsCard" key={index}>
            <img src={cert.media} alt={cert.name} className="WorkCardImg" />
            <h3 className="certificationsCardTitle">{cert.name}</h3>
            <p className="certificationsCardDesc"><strong>Issued by:</strong> {cert.organization}</p>
            <p className="certificationsCardDesc"><strong>Credential ID:</strong> {cert.credentialId}</p>
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="certificationsBtn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
