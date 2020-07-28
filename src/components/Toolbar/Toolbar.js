import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

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
                    <DrawerToggleButton onClick={props.drawerClickHandler}/>
                </div>
            </nav>
        </header>
    );
}

export default Toolbar;