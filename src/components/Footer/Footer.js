import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="box-column">
                <div className="social-container">
                    <a className ="social" href="https://www.linkedin.com/in/derek-redmond/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div>
                    <p className="madeWith">Made with <span className="heart">&#10084;</span> by <a className="name" href="#header" rel="noopener noreferrer">Derek Redmond</a>.</p>
                </div>
            </div>
           
        </footer>
    );
}

export default Footer;