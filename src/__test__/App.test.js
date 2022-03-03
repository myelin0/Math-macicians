import React from 'react';
import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
// import { createMemoryHistory } from 'history';
import App from '../App';

import '@testing-library/jest-dom';

describe('App', () => {
  test('renders App component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    screen.queryByText('Math Magicians');
    expect(screen.queryByText('Math Magicians')).toBeInTheDocument();
    expect(screen.queryByText('William Paul Thurston')).toBeNull();
    expect(screen.queryByText("Let's do some math!")).toBeNull();
  });
});
