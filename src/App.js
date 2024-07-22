import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Additional from './components/Additional';
import Footer from './components/Footer';
import './App.css';

const sections = [
  { Component: About, className: 'blue-bg' },
  { Component: Education, className: 'white-bg' },
  { Component: WorkExperience, className: 'blue-bg' },
  { Component: Projects, className: 'white-bg' },
  { Component: Certifications, className: 'blue-bg' },
  { Component: Languages, className: 'white-bg' },
  { Component: Additional, className: 'blue-bg' },
];

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        {sections.map(({ Component, className }, index) => (
          <section className={className} key={index}>
            <Component />
          </section>
        ))}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
