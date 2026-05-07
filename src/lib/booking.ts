import type { SupabaseConfig } from './supabase';

export type BookingFormValues = {
  name: string;
  email: string;
  phone: string;
  goal: string;
  preferredTime: string;
  message: string;
};

export type BookingErrors = Partial<Record<keyof BookingFormValues, string>>;

export type BookingResult =
  | { ok: true; mode: 'demo' | 'supabase' }
  | { ok: false; message: string; errors?: BookingErrors };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateBookingForm(values: BookingFormValues) {
  const errors: BookingErrors = {};

  if (!values.name.trim()) errors.name = 'Enter your name.';
  if (!emailPattern.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (!values.goal.trim()) errors.goal = 'Choose a training focus.';
  if (!values.preferredTime.trim()) errors.preferredTime = 'Choose a preferred tour time.';
  if (!values.message.trim()) errors.message = 'Tell us what you want help with.';

  return { valid: Object.keys(errors).length === 0, errors };
}

export function buildBookingPayload(values: BookingFormValues) {
  return {
    full_name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim() || null,
    goal: values.goal,
    preferred_time: values.preferredTime,
    message: values.message.trim()
  };
}

export async function submitBooking(
  values: BookingFormValues,
  config: SupabaseConfig | { configured: boolean; client: any }
): Promise<BookingResult> {
  const validation = validateBookingForm(values);

  if (!validation.valid) {
    return {
      ok: false,
      message: 'Please check the highlighted fields.',
      errors: validation.errors
    };
  }

  if (!config.configured || !config.client) {
    return { ok: true, mode: 'demo' };
  }

  const { error } = await config.client.from('tour_requests').insert([buildBookingPayload(values)]);

  if (error) {
    return { ok: false, message: 'We could not send your request. Please try again.' };
  }

  return { ok: true, mode: 'supabase' };
}
