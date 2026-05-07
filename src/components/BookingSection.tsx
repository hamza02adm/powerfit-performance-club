import { type FormEvent, useState } from 'react';
import { submitBooking, type BookingErrors, type BookingFormValues } from '../lib/booking';
import { supabaseConfig } from '../lib/supabase';
import { SectionHeading } from './SectionHeading';

const initialValues: BookingFormValues = {
  name: '',
  email: '',
  phone: '',
  goal: '',
  preferredTime: '',
  message: ''
};

export function BookingSection() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  function updateValue(field: keyof BookingFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const result = await submitBooking(values, supabaseConfig);

    if (result.ok) {
      setStatus('success');
      setValues(initialValues);
      setErrors({});
      setMessage(
        result.mode === 'demo'
          ? 'Demo request received. Connect Supabase env variables to store live submissions.'
          : 'Request received. A coach will follow up with private tour availability.'
      );
      return;
    }

    setStatus('error');
    setErrors(result.errors ?? {});
    setMessage(result.message);
  }

  return (
    <section className="booking section section-dark" id="booking">
      <div className="container booking-grid">
        <SectionHeading
          eyebrow="Private tour"
          title="See if PowerFit fits your week."
          body="A private tour is a calm next step: see the floor, discuss your schedule, and understand the membership path before committing."
        />
        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <label>
            Name
            <input
              value={values.name}
              onChange={(event) => updateValue('name', event.target.value)}
              aria-invalid={Boolean(errors.name)}
              autoComplete="name"
            />
            {errors.name ? <span>{errors.name}</span> : null}
          </label>
          <label>
            Email
            <input
              type="email"
              value={values.email}
              onChange={(event) => updateValue('email', event.target.value)}
              aria-invalid={Boolean(errors.email)}
              autoComplete="email"
            />
            {errors.email ? <span>{errors.email}</span> : null}
          </label>
          <label>
            Phone optional
            <input
              value={values.phone}
              onChange={(event) => updateValue('phone', event.target.value)}
              autoComplete="tel"
            />
          </label>
          <label>
            Training focus
            <select
              value={values.goal}
              onChange={(event) => updateValue('goal', event.target.value)}
              aria-invalid={Boolean(errors.goal)}
            >
              <option value="">Choose a focus</option>
              <option>Executive Strength</option>
              <option>Conditioning</option>
              <option>Mobility + Recovery</option>
              <option>Private Coaching</option>
            </select>
            {errors.goal ? <span>{errors.goal}</span> : null}
          </label>
          <label>
            Preferred time
            <select
              value={values.preferredTime}
              onChange={(event) => updateValue('preferredTime', event.target.value)}
              aria-invalid={Boolean(errors.preferredTime)}
            >
              <option value="">Choose a time</option>
              <option>Early morning</option>
              <option>Midday</option>
              <option>After work</option>
              <option>Weekend</option>
            </select>
            {errors.preferredTime ? <span>{errors.preferredTime}</span> : null}
          </label>
          <label className="form-wide">
            What do you want help with?
            <textarea
              rows={5}
              value={values.message}
              onChange={(event) => updateValue('message', event.target.value)}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message ? <span>{errors.message}</span> : null}
          </label>
          <button className="button button-primary form-wide" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending request...' : 'Request a private tour'}
          </button>
          {message ? <p className={`form-message form-message-${status}`}>{message}</p> : null}
        </form>
      </div>
    </section>
  );
}
