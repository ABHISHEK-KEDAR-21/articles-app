import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Articles from './Articles';

test('renders Login screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Articles screen', () => {
  render(<Articles />);
  const items = screen.getAllByTitle(/Update Article/i);
  expect(items).toHaveLength(8)
});

test('fireEvent ArticleDetail', () => {
  render(<Articles />);
  fireEvent.click(screen.getByText('article 4'))
  const item = screen.getByText('article 4')
  expect(item).toBeInTheDocument();
});

test('fireEvent Update Article', () => {
  render(<Articles />);
  fireEvent.click(screen.getAllByTitle('Update Article')[0])
  const item = screen.getByText('Update Article')
  expect(item).toBeInTheDocument();
});
