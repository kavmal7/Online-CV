import React from 'react';
import './WorkExperience.css';

const experiences = [
    {
        company: 'Indisk Emporium AS',
        role: 'Retail worker',
        year: '2017 - Present',
        details: 'My responsibilities here involved a large degree of customer management which consisted of communicating with the customers and assisting them with any issue. The role helped me vastly in developing communicating skills, making me open and approachable.',
        companyUrl: 'https://www.indiske.com/'
    },
    {
        company: 'Indisk Emporium AS',
        role: 'Web developer',
        year: '2020 - Present',
        details: 'My responsibilities here consist of assisting in development of the website (https://www.indiske.com/) and keeping up with all the new features and updates of Wix, a cloud-based web development service. I have been able to apply my knowledge of HTML, JavaScript, and SQL variants in this realm, along with other mainstream programming languages.',
        companyUrl: 'https://www.indiske.com/'
    }
]


const WorkExperience = () => (
    <section id="work-experience" className='work-experience-section'>
      <h2>Work Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>
            <strong>{exp.role}</strong> at <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">{exp.company}</a> ({exp.year})<br/>
            {exp.details}
          </li>
        ))}
      </ul>
    </section>
);

export default WorkExperience;