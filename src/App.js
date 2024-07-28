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

// Define alternating colour backgrounds for each component
const sections = [
  { Component: About, className: 'blue-bg' },
  { Component: Education, className: 'white-bg' },
  { Component: WorkExperience, className: 'blue-bg' },
  { Component: Projects, className: 'white-bg' },
  { Component: Certifications, className: 'blue-bg' },
  { Component: Languages, className: 'white-bg' },
  { Component: Additional, className: 'blue-bg' },
];

// Define the app function containing the components
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        {sections.map(({ Component, className, id }, index) => (
          <section className={className} key={index} id={id}>
            <Component/>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
