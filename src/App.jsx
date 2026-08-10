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
  { id: 'about', Component: About, className: 'blue-bg' },
  { id: 'education', Component: Education, className: 'white-bg' },
  { id: 'work-experience', Component: WorkExperience, className: 'blue-bg' },
  { id: 'projects', Component: Projects, className: 'white-bg' },
  { id: 'certifications', Component: Certifications, className: 'blue-bg' },
  { id: 'languages', Component: Languages, className: 'white-bg' },
  { id: 'skills-hobbies', Component: Additional, className: 'blue-bg' },
];

// Define the app function containing the components
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        {sections.map(({ Component, className, id }) => (
          <section className={className} key={id} id={id}>
            <Component />
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
