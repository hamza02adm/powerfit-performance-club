import { programs } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function ProgramsSection() {
  return (
    <section className="section section-surface">
      <div className="container">
        <SectionHeading
          eyebrow="Programs"
          title="Training paths without noise."
          body="Each path is specific enough to guide progress and simple enough to fit a demanding week."
        />
        <div className="three-grid">
          {programs.map((program) => (
            <article className="editorial-card program-card" key={program.title}>
              <p className="eyebrow">{program.meta}</p>
              <h3>{program.title}</h3>
              <p>{program.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
