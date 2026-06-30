// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OpenNexus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OpenNexus/i);
    expect(titleElement).toBeInTheDocument();
});
