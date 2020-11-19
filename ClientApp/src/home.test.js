import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import './Home.js';
import Home from './Home.js';
afterEach(cleanup);
it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
});

test('renders search button', () => {
    const { getByText } = render(<App />);
    const buttonElement = getByText('Search');
    expect(buttonElement).toBeInTheDocument();
});
test('renders new game button', () => {
    const { getByText } = render(<App />);
    const buttonElement = getByText('New Game');
    expect(buttonElement).toBeInTheDocument();
});

test('renders search game label', () => {
    const { getByText } = render(<App />);
    const labelElement = getByText('Search by game');
    expect(labelElement).toBeInTheDocument();
});
test('renders search game label', () => {
    const { getByText } = render(<App />);
    const labelElement = getByText('Search by user');
    expect(labelElement).toBeInTheDocument();
});

test('renders the table', () => {
    const { getByText } = render(<App />);
    const gameColumn = getByText('Game');
    const nameColumn = getByText('Name');
    const sizeColumn = getByText('Size');
    const timeColumn = getByText('Time');
    const notesColumn = getByText('Notes');
    expect(gameColumn).toBeInTheDocument();
    expect(nameColumn).toBeInTheDocument();
    expect(sizeColumn).toBeInTheDocument();
    expect(timeColumn).toBeInTheDocument();
    expect(notesColumn).toBeInTheDocument();
});

