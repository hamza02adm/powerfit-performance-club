import { hero, trustMarkers } from '../data/content';
import { Button } from './Button';

export function Hero() {
  return (
    <section className="hero section-dark" id="top">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{hero.label}</p>
          <h1 className="display">{hero.headline}</h1>
          <p className="lead">{hero.body}</p>
          <div className="hero-actions">
            <Button href="#booking">{hero.primaryCta}</Button>
            <Button href="#memberships" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
        <div className="hero-panel image-frame">
          <img
            className="image-hero"
            src="/images/hero-training.webp"
            alt="Focused athlete training under dramatic light"
            width="720"
            height="900"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero-panel-note">Serious training. Controlled environment.</div>
        </div>
        <div className="hero-stats" aria-label="PowerFit training standards">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="trust-row" aria-label="PowerFit trust markers">
          {trustMarkers.map((marker) => (
            <span key={marker}>{marker}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
