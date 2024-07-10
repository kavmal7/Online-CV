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

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <About/>
        <Education/>
        <WorkExperience/>
        <Projects/>
        <Certifications/>
        <Languages/>
        <Additional/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
