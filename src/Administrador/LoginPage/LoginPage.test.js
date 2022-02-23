import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  test('it should mount', () => {
    render(<LoginPage />);
    
    const loginPage = screen.getByTestId('LoginPage');

    expect(loginPage).toBeInTheDocument();
  });
});