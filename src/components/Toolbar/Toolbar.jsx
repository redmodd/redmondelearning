import { useEffect, useState } from 'react';
import './Toolbar.css';

const SCROLL_THRESHOLD = 12;

/**
 * Navigation toolbar with scroll detection
 * @component
 * @returns {JSX.Element}
 */
const Toolbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Set initial state without triggering render
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={scrolled ? 'toolbar toolbar--scrolled' : 'toolbar'}
      aria-label="Page sections"
    >
      <ul>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Toolbar;
