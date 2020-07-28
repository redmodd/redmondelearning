import React from 'react';
import './Header.css';

const Header = () => {
    const avatarImage = require('./images/avatar.svg');
    return(
        <section className='hero-section'>
            <div className='box avatar'>
                <div className="avatar-container">
                    <img src={avatarImage} alt="Avatar"></img>
                </div>
                <div>
                    <h1 className='hero-heading'>Hi, I'm Derek!</h1>
                    <p className='hero-paragraph' id="about">I design learning experiences and environments.</p>
                </div>
            </div>
            
        </section>
        
    );
}

export default Header;