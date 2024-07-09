import React from 'react';

const academicExperience = [
    {
        institution: 'University of Bergen',
        degree: 'B.Sc. Data Science',
        year: '2021 - 2024',
        institutionUrl: 'https://www.uib.no/',
        pdfUrl: './extra_files/Results_from_Diploma_registry-1.pdf'
    },
    {
        institution: 'International Baccalaureate',
        degree: 'IB Diploma',
        year: '2017 - 2019 (excluding retakes)',
        institutionUrl: 'https://ibo.org/',
        imgUrl: './extra_files/ib.png'
    },
    {
        institution: 'International School of Bergen',
        degree: 'PYP and MYP completion',
        year: '2009 - 2017',
        institutionUrl: 'https://www.isbergen.no/'
    }
]

const Education = () => (
    <section id='education'>
        <h2>Education</h2>
        <ul>
            {academicExperience.map((edu, index) => (
                <li key={index}>
                    <strong>{edu.degree}</strong> from <a href={edu.institutionUrl} target='_blank' rel='noopener noreferrer'>{edu.institution}</a> ({edu.year})
                    <div className='resources'>
                        {edu.pdfUrl && (
                            <a href={edu.pdfUrl} target='_blank' rel='noopener noreferrer'>View PDF</a>
                        )}
                        {edu.imgUrl && (
                            <a href={edu.imgUrl} target="_blank" rel="noopener noreferrer">
                                <img src={edu.imgUrl} alt={`${edu.degree} certificate`} className="certificate-img"/>
                            </a>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    </section>
);

export default Education;