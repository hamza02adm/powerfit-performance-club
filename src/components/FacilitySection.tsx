import { Button } from './Button';
import { SectionHeading } from './SectionHeading';

export function FacilitySection() {
  return (
    <section className="section section-dark facility">
      <div className="container facility-grid">
        <div className="image-frame facility-image">
          <img
            className="image-coach"
            src="/images/facility-floor.jpg"
            alt="Coach guiding focused strength training on the PowerFit floor"
            width="920"
            height="680"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Environment"
            title="A floor that protects focus."
            body="The space is designed to feel serious and usable: coached zones, clean equipment flow, and enough capacity control for the room to stay calm."
          />
          <div className="facility-markers">
            <span>One flagship urban location</span>
            <span>5:30 starts for before-work sessions</span>
            <span>Capacity capped for coaching quality</span>
          </div>
          <Button href="#booking">Book a private tour</Button>
        </div>
      </div>
    </section>
  );
}
