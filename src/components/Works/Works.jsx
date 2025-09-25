import React from 'react';
import './Works.css';
import WorkCard from './Work'
import img from './images/images.jpg'
import one from './images/one .png'
import two from './images/two.png'
import three from './images/three.png'
import four from './images/four.png'
import five from './images/five.png'
import six from './images/six.png'
import seven from './images/seven.png'
import eight from './images/eight.png'
const Works = () => {
    const projects = [
        {
            title: 'Employee Development System',
            description: 'Developed a web application for managing employee data, tasks, and dashboards, including admin/employee login, to streamline workflows and improve communication.',
            image: one, 
            link : 'https://github.com/ramim2219/employee-management-system',
        },
        {
            title: 'House Price Prediction',
            description: 'Developed a machine learning model to predict house prices using regression algorithms, optimizing accuracy with feature engineering and hyperparameter tuning.',
            image: two,
            link : 'https://github.com/ramim2219/house_price_prediction',
        },
        {
            title: 'CSE Helper',
            description: 'Developed a blog website to share my Computer Science knowledge, including competitive programming roadmaps, topic lists, and problem-solving resources.',
            image: three,
            link : 'https://github.com/ramim2219/CSE_HELPER',
        },
        {
            title: 'Diabetes Risk Prediction',
            description: 'Diabetes Risk Prediction is a system that analyzes health data and lifestyle factors to estimate an individuals risk of developing diabetes. It helps in early detection and encourages preventive measures for better health management.',
            image: four, 
            link : 'https://github.com/ramim2219/DiabetesRiskPrediction?tab=readme-ov-file',
        },
        {
            title: 'Village Scenerio',
            description: 'The Village Scenario project is an artistic coding exercise aimed at enhancing programming skills.',
            image: five, 
            link : 'https://github.com/ramim2219/VillageScenerio',
        },
        {
            title: 'Movie finder',
            description: 'Movie Finder is a React project that lets you search for any movie and view its details, demonstrating API integration in a web app.',
            image: six, 
            link : 'https://github.com/ramim2219/movie_finder',
        },
        {
            title: 'E-commerce Website',
            description: 'E-commerce is a full-stack web application built with React, Node.js, Express, and MySQL, featuring product listings, a shopping cart, and user authentication.',
            image: seven, 
            link: 'https://github.com/ramim2219/E-commerce',
        },
        {
            title: 'Student Management System',
            description: 'A full-stack web application built with Laravel, PHP, and MySQL to manage student information, attendance, and academic records efficiently.',
            image: eight, 
            link: 'https://github.com/ramim2219/student_management_system',
        },
    ];
    return (
        <section id='Works'>
            <h2 className='worksTitle'>My Projects</h2>
            <span className="workDesc">
                Over the course of my career as a Full Stack Developer and Competitive Programmer, I have worked on a variety of web applications and software projects. Below are some of the projects I have completed, showcasing my expertise in technologies such as React, Laravel, and MySQL.
            </span>
            <div className="WorksCards">
                {
                    projects.map((project,index)=>(
                        <WorkCard 
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default Works;
