import { act, cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import App from './App';
import { content, projectUrls } from './content';

beforeEach(() => {
  window.localStorage.clear();
  window.history.replaceState({}, '', '/Online-CV/');
  document.head.innerHTML = '<meta name="description"><meta property="og:title"><meta property="og:description"><meta property="og:locale">';
  vi.spyOn(window, 'scrollBy').mockImplementation(() => {});
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  window.scrollY = 0;
});

test('restores an initial section link after the page loads when native scrolling missed it', async () => {
  window.history.replaceState({}, '', '/Online-CV/?lang=no#%65ducation');
  vi.spyOn(document, 'readyState', 'get').mockReturnValue('loading');
  const frames = [];
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => frames.push(callback));
  render(<App />);
  const scroll = vi.fn();
  document.getElementById('education').scrollIntoView = scroll;
  expect(scroll).not.toHaveBeenCalled();
  await act(async () => { window.dispatchEvent(new Event('load')); });
  frames.forEach(callback => callback());
  expect(scroll).toHaveBeenCalledExactlyOnceWith({ behavior: 'instant', block: 'start' });
});

test.each(['restored position', 'user interaction', 'different section', 'unmounted page'])(
  'initial section fallback respects %s', async (scenario) => {
    window.history.replaceState({}, '', '/Online-CV/?lang=en#education');
    vi.spyOn(document, 'readyState', 'get').mockReturnValue('loading');
    const frames = [];
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => frames.push(callback));
    const view = render(<App />);
    const scroll = vi.fn();
    document.getElementById('education').scrollIntoView = scroll;
    await act(async () => { window.dispatchEvent(new Event('load')); });
    if (scenario === 'restored position') window.scrollY = 300;
    if (scenario === 'user interaction') window.dispatchEvent(new Event('wheel'));
    if (scenario === 'different section') window.history.replaceState({}, '', '/Online-CV/?lang=en#projects');
    if (scenario === 'unmounted page') view.unmount();
    frames.forEach(callback => callback());
    expect(scroll).not.toHaveBeenCalled();
  }
);

test('features CV research and recent experience with accessible landmarks', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'Kavya Malhotra' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main');
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  const work = screen.getByRole('region', { name: 'Selected work' });
  expect(within(work).getAllByRole('article')).toHaveLength(3);
  expect(within(work).getByText('Manuscript in preparation')).toBeInTheDocument();
  expect(screen.getByText('Expected September 2026', { exact: true })).toBeInTheDocument();
  const experience = screen.getByRole('region', { name: 'Experience' });
  expect(within(experience).getAllByRole('heading', { level: 3 })[0]).toHaveTextContent('DNB');
});

test('language links preserve URL parameters and section while updating copy, metadata, and preference', () => {
  window.history.replaceState({}, '', '/Online-CV/?ref=cv#projects');
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: 'Norsk bokmål' }));
  expect(window.location.search).toBe('?ref=cv&lang=no');
  expect(window.location.hash).toBe('#projects');
  expect(document.documentElement.lang).toBe('nb');
  expect(document.title).toBe(content.no.title);
  expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', content.no.description);
  expect(document.querySelector('meta[property="og:locale"]')).toHaveAttribute('content', 'nb_NO');
  expect(screen.getByRole('heading', { name: 'Utvalgte prosjekter' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Norsk bokmål' })).toHaveAttribute('aria-current', 'true');
  expect(window.localStorage.getItem('portfolio-language')).toBe('no');
  fireEvent.click(screen.getByRole('link', { name: 'English', exact: true }));
  expect(document.documentElement.lang).toBe('en');
  expect(document.title).toBe(content.en.title);
});

test('explicit URLs override saved preferences and invalid locales safely fall back to English', () => {
  window.localStorage.setItem('portfolio-language', 'no');
  window.history.replaceState({}, '', '/Online-CV/?lang=en');
  const view = render(<App />);
  expect(screen.getByRole('heading', { name: 'Selected work' })).toBeInTheDocument();
  view.unmount();
  window.history.replaceState({}, '', '/Online-CV/?lang=unknown');
  render(<App />);
  expect(document.documentElement.lang).toBe('en');
});

test('remembers Norwegian on a fresh visit and keeps it through section navigation', () => {
  window.localStorage.setItem('portfolio-language', 'no');
  render(<App />);
  expect(document.documentElement.lang).toBe('nb');
  expect(window.location.search).toBe('?lang=no');
  act(() => {
    window.history.pushState({}, '', '/Online-CV/?lang=no#education');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  });
  expect(screen.getByRole('link', { name: 'English', exact: true })).toHaveAttribute('href', '/Online-CV/?lang=en#education');
  expect(document.documentElement.lang).toBe('nb');
});

test('browser history restores the language in the URL', () => {
  window.history.replaceState({}, '', '/Online-CV/?lang=no#projects');
  render(<App />);
  act(() => {
    window.history.replaceState({}, '', '/Online-CV/?lang=en#projects');
    window.dispatchEvent(new PopStateEvent('popstate'));
  });
  expect(document.documentElement.lang).toBe('en');
  expect(screen.getByRole('heading', { name: 'Selected work' })).toBeInTheDocument();
});

test('language switching works when storage is unavailable', () => {
  vi.spyOn(window.Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('blocked'); });
  vi.spyOn(window.Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('blocked'); });
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: 'Norsk bokmål' }));
  expect(document.documentElement.lang).toBe('nb');
  expect(window.location.search).toBe('?lang=no');
});

test('mobile navigation closes on section selection and Escape returns focus to its toggle', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));
  const mobile = document.getElementById('mobile-navigation');
  expect(mobile).not.toHaveAttribute('hidden');
  fireEvent.click(within(mobile).getByRole('link', { name: 'Projects', exact: true }));
  expect(mobile).toHaveAttribute('hidden');
  fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));
  fireEvent.keyDown(mobile, { key: 'Escape' });
  expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveFocus();
});

test('additional projects remain expanded when changing language and printing uses the browser', () => {
  const print = vi.spyOn(window, 'print').mockImplementation(() => {});
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'More projects' }));
  expect(screen.getByRole('heading', { name: 'Sequence models for NLP' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', { name: 'Norsk bokmål' }));
  expect(screen.getByRole('button', { name: 'Færre prosjekter' })).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByRole('heading', { name: 'Sekvensmodeller for NLP' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Skriv ut / lagre CV' }));
  expect(print).toHaveBeenCalledOnce();
});

test('both locales cover the same content and link every published project', () => {
  function shape(value) {
    if (Array.isArray(value)) return value.map(shape);
    if (value !== null && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, shape(item)]));
    return typeof value;
  }
  expect(shape(content.no)).toEqual(shape(content.en));
  for (const copy of Object.values(content)) {
    expect(copy.projects.items.map(item => item.id)).toEqual(['biomedical', 'mule', 'souping']);
    for (const project of [...copy.projects.items, ...copy.projects.other]) {
      if (project.id !== 'biomedical') expect(projectUrls[project.id]).toMatch(/^https:\/\/github.com\//);
    }
  }
});
