import { render, screen } from '@testing-library/react';
import App from './App';

describe('PowerFit landing page', () => {
  it('includes the signature 45-minute standard moment', () => {
    render(<App />);

    expect(screen.getByText('The 45-minute standard.')).toBeInTheDocument();
    expect(screen.getByText('Preparation')).toBeInTheDocument();
    expect(screen.getByText('Recovery note')).toBeInTheDocument();
  });
});
