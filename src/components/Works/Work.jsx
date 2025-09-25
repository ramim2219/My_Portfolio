import React from 'react';
import './Works.css';

const Work = ({ title, description, image ,link}) => {
    return (
        <div className="WorkCard">
            <img src={image} alt="Project Image" className="WorkCardImg" />
            <h3 className="WorkCardTitle">{title}</h3>
            <p className="WorkCardDesc">{description}</p>
            <a href={link} className="workBtn" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};

export default Work;
