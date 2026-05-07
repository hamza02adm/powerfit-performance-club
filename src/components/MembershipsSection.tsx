import { memberships } from '../data/content';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';

export function MembershipsSection() {
  return (
    <section className="section section-light" id="memberships">
      <div className="container">
        <SectionHeading
          eyebrow="Memberships"
          title="Limited capacity. Higher attention."
          body="From-pricing gives a clear sense of commitment while keeping the private tour as the right place to choose a path."
        />
        <div className="membership-grid">
          {memberships.map((membership) => (
            <article
              className={`membership-card ${membership.featured ? 'membership-featured' : ''}`}
              key={membership.name}
            >
              {membership.featured ? <p className="eyebrow">Most requested</p> : null}
              <h3>{membership.name}</h3>
              <strong>{membership.price}</strong>
              <p>{membership.body}</p>
              <ul>
                {membership.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <Button href="#booking" variant={membership.featured ? 'primary' : 'dark'}>
                Request a tour time
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
