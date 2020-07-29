import React from 'react';
import './Toolbar.css';
import DrawerOpenButton from '../SideDrawer/DrawerOpenButton';

const Toolbar = props => {
    return(
        <header className="toolbar">
            <nav className="toolbar-nav">
                <div>
                    <a href="redmondelearning.ca" className="toolbar-logo">Redmond eLearning</a>
                </div>
                <div className="spacer"></div>
                <div className="navbar-items">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="toolbar-toggle-button">
                    <DrawerOpenButton onClick={props.open}/>
                </div>
            </nav>
        </header>
    );
}

export default Toolbar;