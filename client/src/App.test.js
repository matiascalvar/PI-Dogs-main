import { render, screen } from '@testing-library/react';
import App from './App';
import Loading from '../src/components/Loading/Loading';
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});

describe('App', () => {
  test('renders Welcome to Dogs! title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to Dogs!/i);
    expect(linkElement).toBeInTheDocument();
  });
})

describe('Loading', () => {
  test('renders Loading component', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    // screen.debug();
  });
});
