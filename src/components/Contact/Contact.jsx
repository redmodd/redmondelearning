import './Contact.css';

/**
 * Contact section with call-to-action buttons
 * @component
 * @returns {JSX.Element}
 */
const Contact = () => (
  <section id="contact">
    <div className="pageContent">
      <div className="column contactSection">
        <h2 className="contactSection__title">Contact Me</h2>
        <h3 className="contactSection__subtitle">Think I can help?</h3>
        <p className="contactSection__copy">
          If you have a project you think I can help you with, I'm happy to chat. I am
          available for freelance or contract work.
        </p>
        <div className="btn-row">
          <a className="btn-green" href="mailto:derek.redmond@redmondelearning.ca">
            Contact Me
          </a>
          <a
            className="btn-outline"
            href="https://www.linkedin.com/in/derek-redmond/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
