import { testimonials } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function TestimonialsSection() {
  return (
    <section className="section section-surface">
      <div className="container">
        <SectionHeading
          eyebrow="Member notes"
          title="Grounded proof, not transformation theater."
          body="The most meaningful outcomes are often practical: consistency, clarity, and a training environment people respect."
        />
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure className="testimonial" key={testimonial.quote}>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                {testimonial.name}
                <span>{testimonial.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
