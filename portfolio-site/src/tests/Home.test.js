import React from 'react';
import { render, screen, } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home component', () => {
  test('renders Home component with correct content', () => {
    render(<Home />);

    // Check for the image
    const image = screen.getByAltText('shekinah');
    expect(image).toBeInTheDocument();

    // Check for the title
    const title = screen.getByText('FULL STACK DEVELOPER');
    expect(title).toBeInTheDocument();

    // Check for the greeting
    const greeting = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'h1' && /Hello/.test(content);
    });
    expect(greeting).toBeInTheDocument();

    // Check for the description
    const description = screen.getByText(/I am a passionate and experienced Full Stack Developer/i);
    expect(description).toBeInTheDocument();

    // Check for the Resume link
    const resumeLink = screen.getByRole('link', { name: /resume/i });
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute('href', expect.stringContaining('drive.google.com'));

    // Check for the Hire Me link
    const hireMeLink = screen.getByRole('link', { name: /hire me/i });
    expect(hireMeLink).toBeInTheDocument();
    expect(hireMeLink).toHaveAttribute('href', '/contact');
  });
});
