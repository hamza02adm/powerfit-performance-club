import { standardMoments } from '../data/content';

export function StandardSection() {
  return (
    <section className="standard-section section-dark" aria-labelledby="standard-title">
      <div className="container standard-grid">
        <div className="standard-copy">
          <p className="eyebrow">Signature standard</p>
          <h2 className="display" id="standard-title">
            The 45-minute standard.
          </h2>
          <p className="lead">
            PowerFit turns a session into a contained ritual: arrive with friction, train with
            intent, leave with the next decision already made.
          </p>
        </div>
        <div className="standard-board" aria-label="45-minute session rhythm">
          {standardMoments.map((moment) => (
            <article className="standard-row" key={moment.time}>
              <span>{moment.time}</span>
              <div>
                <h3>{moment.title}</h3>
                <p>{moment.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
