import React from 'react';
import './Certifications.css';

const certificates = [
    {
        name: 'Learn Java Course',
        institution: 'Codecademy',
        skills: 'Java',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/d3f89367b558583e361640f778191345'
    },
    {
        name: 'Learn Python 3 Course',
        institution: 'Codecademy',
        skills: 'Python',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/6c152bd262967f8c941c9707ed636bda'
    },
    {
        name: 'Learn C Course',
        institution: 'Codecademy',
        skills: 'C',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/8c3029c4a6e5894e74da756e3a7c0ae3'
    },
    {
        name: 'Learn SQL Course',
        institution: 'Codecademy',
        skills: 'SQL',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/042a4e5884e3eb6ea1f2a12be6abb851'
    },
    {
        name: 'Learn JavaScript Course',
        institution: 'Codecademy',
        skills: 'JavaScript',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/705dcb15de0da4dd9d9fc4f3274b430e'
    },
    {
        name: 'Learn Intermediate JavaScript Course',
        institution: 'Codecademy',
        skills: 'JavaScript',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/512386fdc7f6c934f98b01e6afa8285a'
    },
    {
        name: 'Data and Programming Foundations for AI Skill Path',
        institution: 'Codecademy',
        skills: 'Artificial Intelligence',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/5701108f64cd4a02981c161085ccc50e'
    },
    {
        name: 'Build Chatbots with Python Skill Path',
        institution: 'Codecademy',
        skills: 'Artificial Intelligence, Python',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/5e15fa478b1c550011ec7046'
    },
    {
        name: 'Language Parsing Course',
        institution: 'Codecademy',
        skills: 'Natural Language Processing',
        certificateUrl: 'https://www.codecademy.com/profiles/kavmal74765058484/certificates/3e67b57aafb07ef7221c3051a23ff2ca'
    }
]

const Certifications = () => (
    <section id="certifications">
      <h2>Certifications</h2>
      <ul>
        {certificates.map((cert, index) => (
          <li key={index}>
            <strong>{cert.name}</strong> from <em>{cert.institution}</em><br/>
            Skills: {cert.skills}<br/>
            <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">View Certificate</a>
          </li>
        ))}
      </ul>
    </section>
);

export default Certifications;