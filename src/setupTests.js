import '@testing-library/jest-dom/vitest';

// Node 25 exposes its own localStorage; use the browser storage from Vitest's
// actual jsdom window so persistence tests exercise the DOM implementation.
Object.defineProperty(window, 'localStorage', {
  configurable: true,
  value: globalThis.jsdom.window.localStorage,
});

Object.defineProperty(window, 'matchMedia', {
  configurable: true,
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
