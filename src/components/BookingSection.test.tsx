import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookingSection } from './BookingSection';

describe('BookingSection', () => {
  it('shows calm validation errors for an empty submission', async () => {
    const user = userEvent.setup();
    render(<BookingSection />);

    await user.click(screen.getByRole('button', { name: 'Request a private tour' }));

    expect(await screen.findByText('Enter your name.')).toBeInTheDocument();
    expect(screen.getByText('Enter a valid email address.')).toBeInTheDocument();
    expect(screen.getByText('Choose a training focus.')).toBeInTheDocument();
  });

  it('shows a reassuring demo success message for a valid request without Supabase env vars', async () => {
    const user = userEvent.setup();
    render(<BookingSection />);

    await user.type(screen.getByLabelText('Name'), 'Amina Torres');
    await user.type(screen.getByLabelText('Email'), 'amina@example.com');
    await user.selectOptions(screen.getByLabelText('Training focus'), 'Executive Strength');
    await user.selectOptions(screen.getByLabelText('Preferred time'), 'Early morning');
    await user.type(screen.getByLabelText('What do you want help with?'), 'I want a plan around travel.');
    await user.click(screen.getByRole('button', { name: 'Request a private tour' }));

    await waitFor(() => {
      expect(screen.getByText(/Demo request received/)).toBeInTheDocument();
    });
  });
});
