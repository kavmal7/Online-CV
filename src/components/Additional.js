import React from 'react';
import './Additional.css';

const skillsHobbies = [
    'Python',
    'Java',
    'JavaScript',
    'HTML',
    'SQL',
    'Wix',
    'C',
    'MATLAB',
    'Jupyter',
    'PyTorch',
    'Spreadsheet',
    'Social Media Management',
    'Blogging',
    'Football',
    'Coding',
    'Motorsport',
    'Gaming',
    'Health & Fitness',
    'Reading',
]

const Additional = () => (
    <section id="skills-hobbies">
      <h2>Skills & Hobbies</h2>
      <div className="skills-hobbies-container">
        {skillsAndHobbies.map((item, index) => (
          <div key={index} className="skill-hobby-box">
            {item}
          </div>
        ))}
      </div>
    </section>
);
  
export default Additional;