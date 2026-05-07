import { SectionHeading } from './SectionHeading';

const points = [
  'A crowded room of equipment does not create consistency.',
  'Busy schedules need a plan that survives travel, meetings, and fatigue.',
  'Progress improves when every session has a reason.'
];

export function ProblemSection() {
  return (
    <section className="section section-surface">
      <div className="container problem-grid">
        <SectionHeading
          eyebrow="The real problem"
          title="Access is not the same as progress."
          body="PowerFit is built for people who do not need more options. They need a serious structure that makes the next session obvious."
        />
        <div className="quiet-list">
          {points.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
