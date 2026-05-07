import { navLinks } from '../data/content';
import { Button } from './Button';

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="PowerFit home">
          PowerFit
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <Button href="#booking" variant="primary" className="nav-cta">
          Book a private tour
        </Button>
      </nav>
    </header>
  );
}
