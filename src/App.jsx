import { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Additional from './components/Additional';
import Footer from './components/Footer';
import { content } from './content';
import useLanguage from './useLanguage';
import './App.css';

export default function App() {
  const { language, location, switchLanguage } = useLanguage();
  const copy = content[language];
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // Native fragment navigation can run before React has rendered its target.
    // Retry after layout is ready, but leave browser restoration and user scrolling alone.
    let active = true;
    let frame;
    const cancel = () => { active = false; };
    const interactions = ['pointerdown', 'touchstart', 'wheel', 'keydown'];
    const restoreSection = () => {
      Promise.resolve(document.fonts?.ready).then(() => {
        if (!active) return;
        frame = window.requestAnimationFrame(() => {
          if (!active || window.location.hash !== hash || window.scrollY !== 0) return;
          let id;
          try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
          document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' });
        });
      });
    };

    interactions.forEach(type => window.addEventListener(type, cancel, { passive: true, once: true }));
    if (document.readyState === 'complete') restoreSection();
    else window.addEventListener('load', restoreSection, { once: true });
    return () => {
      active = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener('load', restoreSection);
      interactions.forEach(type => window.removeEventListener(type, cancel));
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'no' ? 'nb' : 'en';
    document.title = copy.title;
    const metadata = {
      'meta[name="description"]': copy.description,
      'meta[property="og:title"]': copy.title,
      'meta[property="og:description"]': copy.description,
      'meta[property="og:locale"]': language === 'no' ? 'nb_NO' : 'en_GB',
    };
    Object.entries(metadata).forEach(([selector, value]) => {
      document.querySelector(selector)?.setAttribute('content', value);
    });
  }, [language, copy]);
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">{copy.skip}</a>
      <Header copy={copy} language={language} location={location} switchLanguage={switchLanguage} />
      <main id="main" tabIndex={-1}>
        <About copy={copy.hero} />
        <Projects copy={copy.projects} />
        <WorkExperience copy={copy.experience} />
        <Education copy={copy.education} />
        <Additional copy={copy} language={language} />
      </main>
      <Footer copy={copy.footer} />
    </div>
  );
}
