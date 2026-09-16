import { useRef, useState } from 'react';
import { languageHref } from '../useLanguage';

const targets = ['projects', 'work-experience', 'education', 'skills-hobbies', 'footer'];

function Flag({ language }) {
  return language === 'no' ? (
    <svg viewBox="0 0 22 16" aria-hidden="true" className="flag">
      <path fill="#ba2632" d="M0 0h22v16H0z" />
      <path fill="#fff" d="M6 0h4v16H6zM0 6h22v4H0z" />
      <path fill="#253e6a" d="M7 0h2v16H7zM0 7h22v2H0z" />
    </svg>
  ) : (
    <svg viewBox="0 0 60 40" aria-hidden="true" className="flag">
      <path fill="#253e6a" d="M0 0h60v40H0z" />
      <path stroke="#fff" strokeWidth="8" d="m0 0 60 40M60 0 0 40" />
      <path stroke="#ba2632" strokeWidth="3" d="m0 0 60 40M60 0 0 40" />
      <path stroke="#fff" strokeWidth="12" d="M30 0v40M0 20h60" />
      <path stroke="#ba2632" strokeWidth="7" d="M30 0v40M0 20h60" />
    </svg>
  );
}

export default function Header({ copy, language, location, switchLanguage }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const links = copy.nav.map((label, index) => (
    <a key={targets[index]} href={`#${targets[index]}`} onClick={() => setOpen(false)}>{label}</a>
  ));
  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
    }}>
      <div className="shell header-inner">
        <a className="wordmark" href="#about" onClick={() => setOpen(false)}>Kavya Malhotra<span aria-hidden="true">.</span></a>
        <nav className="desktop-nav" aria-label={copy.navigation}>{links}</nav>
        <div className="header-actions">
          <nav className="language-switch" aria-label={copy.languageLabel}>
            {['en', 'no'].map((locale) => (
              <a key={locale} href={languageHref(locale, location)} lang={locale === 'no' ? 'nb' : 'en'}
                hrefLang={locale === 'no' ? 'nb' : 'en'} aria-label={locale === 'no' ? 'Norsk bokmål' : 'English'}
                aria-current={language === locale ? 'true' : undefined}
                onClick={(event) => switchLanguage(event, locale)}>
                <Flag language={locale} /><span>{locale.toUpperCase()}</span>
              </a>
            ))}
          </nav>
          <button ref={toggle} className="menu-toggle" aria-label={open ? copy.closeMenu : copy.openMenu}
            aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d={open ? 'm6 6 12 12M6 18 18 6' : 'M4 8h16M4 16h16'} />
            </svg>
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-nav shell" aria-label={copy.navigation} hidden={!open}>{links}</nav>
    </header>
  );
}
