import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import App from './../App';
import './getRegion.js';
import GetRegion from './getRegion.js';

afterEach(cleanup);
it('succesfully gets Region', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GetRegion />, div);
});
