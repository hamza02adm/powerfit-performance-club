import { faqs } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function FAQSection() {
  return (
    <section className="section section-light">
      <div className="container faq-grid">
        <SectionHeading
          eyebrow="Questions"
          title="A clear next step."
          body="The private tour exists to keep the process calm: see the floor, ask direct questions, and understand whether the membership fits."
        />
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
