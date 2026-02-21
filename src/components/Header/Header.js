import React from 'react';
import './Header.css';
import avatarImage from './images/avatar.svg'

const Header = () => {
    return(
        <header className ="column headerSection" id="header">
            <div>
                <img className ="avatarImage" src={avatarImage} alt="Avatar" decoding="async"></img>
            </div>
            <div>
                <h1 className = "headerTitle textCenter">Hi, I'm Derek!</h1>
                <p className = "headerParagraph textCenter">Let's create learning experiences and environments your learners will love.</p>
            </div>
            
        </header>
        
    );
}

export default Header;