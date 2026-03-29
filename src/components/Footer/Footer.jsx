import './Footer.css';

/**
 * Site footer with attribution
 * @component
 * @returns {JSX.Element}
 */
const Footer = () => (
  <footer className="siteFooterWrap">
    <div className="pageContent">
      <div className="siteFooter">
        <div className="column">
          <a
            className="madeWith"
            href="https://www.linkedin.com/in/derek-redmond/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with <span className="heart">&#10084;</span> by Derek Redmond.
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
