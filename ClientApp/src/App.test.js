import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div)
});


test('renders title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Game Chasers');
  expect(linkElement).toBeInTheDocument();
});

test('renders Region dropdown', () => {
    const { getByText } = render(<App />);
    const dropdownElement = getByText('Region');
    expect(dropdownElement).toBeInTheDocument();
});
test('renders Region dropdown', () => {
    const { getByText } = render(<App />);
    const dropdownElement = getByText('Region');
    expect(dropdownElement).toBeInTheDocument();
});


test('renders Login', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Login');
    expect(linkElement).toBeInTheDocument();
});

