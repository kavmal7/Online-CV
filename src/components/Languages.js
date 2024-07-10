import React from 'react';
import './Languages.css';

const languages = [
    {
      name: 'English',
      proficiency: 'Fluent'
    },
    {
      name: 'Norwegian',
      proficiency: 'Fluent'
    },
    {
      name: 'Hindi',
      proficiency: 'Fluent (mother tongue)'
    },
    {
        name: 'French',
        proficiency: 'Rudimentary'
    },
    {
        name: 'Cyrillic alphabet',
        proficiency: 'Can mostly understand the alphabet'
    }
];

const Languages = () => (
    <section id="languages">
      <h2>Languages</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <strong>{language.name}</strong> - {language.proficiency}
          </li>
        ))}
      </ul>
    </section>
);
  
export default Languages;