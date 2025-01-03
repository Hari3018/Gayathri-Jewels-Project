import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home link', () => {
  render(<App />);
  const homeLink = screen.getByText(/home/i); // Adjust the text to match your Navbar link
  expect(homeLink).toBeInTheDocument();
});
