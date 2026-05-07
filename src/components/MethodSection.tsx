import { method } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function MethodSection() {
  return (
    <section className="section section-light" id="method">
      <div className="container">
        <SectionHeading
          eyebrow="Method"
          title="A training system built around the hours you actually have."
          body="Assessment, programming, coaching, and recovery work together so training feels deliberate rather than improvised."
        />
        <div className="method-grid">
          {method.map((item, index) => (
            <article className="editorial-card" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
