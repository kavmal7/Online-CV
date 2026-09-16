import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const storageKey = 'portfolio-language';
const supported = (value) => value === 'en' || value === 'no';

function initialLanguage() {
  const query = new URLSearchParams(window.location.search).get('lang');
  if (query !== null) return supported(query) ? query : 'en';
  try {
    const saved = window.localStorage.getItem(storageKey);
    return supported(saved) ? saved : 'en';
  } catch {
    return 'en';
  }
}

export function languageHref(language, location = window.location.href) {
  const url = new URL(location);
  url.searchParams.set('lang', language);
  return `${url.pathname}${url.search}${url.hash}`;
}

export default function useLanguage() {
  const [language, setLanguage] = useState(initialLanguage);
  const [location, setLocation] = useState(() => window.location.href);
  const initial = useRef(language);
  const scrollAnchor = useRef(null);

  useEffect(() => {
    // Make a remembered preference shareable and stable through hash navigation.
    if (!new URLSearchParams(window.location.search).has('lang') && initial.current === 'no') {
      window.history.replaceState({}, '', languageHref('no'));
    }
    const onPopState = () => {
      const value = new URLSearchParams(window.location.search).get('lang');
      setLanguage(supported(value) ? value : 'en');
      setLocation(window.location.href);
    };
    window.addEventListener('popstate', onPopState);
    window.addEventListener('hashchange', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('hashchange', onPopState);
    };
  }, []);

  // Keep the same reading position even when the translated text changes height.
  useLayoutEffect(() => {
    if (!scrollAnchor.current) return;
    const { element, offset } = scrollAnchor.current;
    window.scrollBy({ top: element.getBoundingClientRect().top - offset, behavior: 'instant' });
    scrollAnchor.current = null;
  }, [language]);

  function switchLanguage(event, nextLanguage) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (nextLanguage === language) return;
    const sections = [...document.querySelectorAll('main section, footer')];
    const element = sections.find((section) => section.getBoundingClientRect().bottom > 100);
    if (element) scrollAnchor.current = { element, offset: element.getBoundingClientRect().top };
    window.history.pushState({}, '', languageHref(nextLanguage));
    try {
      window.localStorage.setItem(storageKey, nextLanguage);
    } catch { /* Language switching also works with browser storage disabled. */ }
    setLanguage(nextLanguage);
    setLocation(window.location.href);
  }

  return { language, location, switchLanguage };
}
