import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="column">
                <div className="social-container">
                    <a className ="social" href="https://www.linkedin.com/in/derek-redmond/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div>
                    <a className="madeWith" href="#header" rel="noopener noreferrer">Made with <span className="heart">&#10084;</span> by Derek Redmond.</a>
                </div>
            </div>
           
        </footer>
    );
}

export default Footer;