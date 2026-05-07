import { describe, expect, it, vi } from 'vitest';
import { buildBookingPayload, submitBooking, validateBookingForm } from './booking';

describe('validateBookingForm', () => {
  it('requires name, valid email, goal, preferred time, and message', () => {
    const result = validateBookingForm({
      name: '',
      email: 'not-email',
      phone: '',
      goal: '',
      preferredTime: '',
      message: ''
    });

    expect(result.valid).toBe(false);
    expect(result.errors.name).toBe('Enter your name.');
    expect(result.errors.email).toBe('Enter a valid email address.');
    expect(result.errors.goal).toBe('Choose a training focus.');
    expect(result.errors.preferredTime).toBe('Choose a preferred tour time.');
    expect(result.errors.message).toBe('Tell us what you want help with.');
  });

  it('builds a snake_case payload for Supabase', () => {
    const payload = buildBookingPayload({
      name: 'Amina Torres',
      email: 'amina@example.com',
      phone: '555-0188',
      goal: 'Executive Strength',
      preferredTime: 'Early morning',
      message: 'I need a plan around travel.'
    });

    expect(payload).toEqual({
      full_name: 'Amina Torres',
      email: 'amina@example.com',
      phone: '555-0188',
      goal: 'Executive Strength',
      preferred_time: 'Early morning',
      message: 'I need a plan around travel.'
    });
  });
});

describe('submitBooking', () => {
  it('uses demo success when Supabase is not configured', async () => {
    const result = await submitBooking(
      {
        name: 'Amina Torres',
        email: 'amina@example.com',
        phone: '',
        goal: 'Executive Strength',
        preferredTime: 'Early morning',
        message: 'I want a structured plan.'
      },
      { configured: false, client: null }
    );

    expect(result).toEqual({ ok: true, mode: 'demo' });
  });

  it('inserts into Supabase when configured', async () => {
    const insert = vi.fn().mockResolvedValue({ error: null });
    const from = vi.fn().mockReturnValue({ insert });

    const result = await submitBooking(
      {
        name: 'Amina Torres',
        email: 'amina@example.com',
        phone: '',
        goal: 'Executive Strength',
        preferredTime: 'Early morning',
        message: 'I want a structured plan.'
      },
      { configured: true, client: { from } }
    );

    expect(from).toHaveBeenCalledWith('tour_requests');
    expect(insert).toHaveBeenCalledWith([
      {
        full_name: 'Amina Torres',
        email: 'amina@example.com',
        phone: null,
        goal: 'Executive Strength',
        preferred_time: 'Early morning',
        message: 'I want a structured plan.'
      }
    ]);
    expect(result).toEqual({ ok: true, mode: 'supabase' });
  });
});
