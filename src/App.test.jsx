import { fireEvent, render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the portfolio structure and accessible navigation', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { level: 1, name: 'Kavya Malhotra' }),
  ).toBeInTheDocument();

  [
    'About Me',
    'Education',
    'Work Experience',
    'Projects',
    'Certificates',
    'Languages',
    'Skills & Hobbies',
  ].forEach((heading) => {
    expect(screen.getByRole('heading', { level: 2, name: heading })).toBeInTheDocument();
  });

  screen.getAllByRole('link', { name: 'Projects' }).forEach((link) => {
    expect(link).toHaveAttribute('href', '#projects');
  });

  expect(
    within(document.getElementById('work-experience')).getAllByRole('link', {
      name: 'Visit Website',
    }),
  ).toHaveLength(3);
  expect(screen.getByRole('link', { name: 'kavyamal74@gmail.com' })).toHaveAttribute(
    'href',
    'mailto:kavyamal74@gmail.com',
  );
});

test('opens and closes the mobile navigation menu', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));
  expect(screen.getByRole('button', { name: 'Close navigation menu' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Close navigation menu' }));
  expect(screen.getByRole('button', { name: 'Open navigation menu' })).toBeInTheDocument();
});
