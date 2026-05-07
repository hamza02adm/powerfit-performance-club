import { coaches } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function CoachesSection() {
  return (
    <section className="section section-dark" id="coaches">
      <div className="container">
        <SectionHeading
          eyebrow="Coaches"
          title="Direct coaching. No performance theater."
          body="The coaching standard is calm, technical, and present. The point is not to be loud. The point is to make each session useful."
        />
        <div className="coach-grid">
          {coaches.map((coach, index) => (
            <article className="coach-card" key={coach.name}>
              <div className="coach-photo image-frame">
                <img
                  src={`/images/coach-${index + 1}.webp`}
                  alt={`${coach.name}, ${coach.role}`}
                  width="520"
                  height="620"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <p className="eyebrow">{coach.role}</p>
                <h3>{coach.name}</h3>
                <p>{coach.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
