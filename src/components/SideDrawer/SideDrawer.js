import React from 'react';
import './SideDrawer.css';
import DrawerCloseButton from './DrawerCloseButton';

const sideDrawer = props => {
    return(
        <nav className={`sideDrawer ${props.open ? 'open' : ''}`}>
            <div className="sideDrawer-header">
                <div className="sideDrawer-nav">
                    <div>
                        <a href="redmondelearning.ca" className="toolbar-logo">Redmond eLearning</a>
                    </div>
                    <div className="spacer"></div>
                    <div>
                        <DrawerCloseButton onClick={props.close}/>
                    </div>
                </div>
            </div>       
            <div> 
                <ul>
                    <li><a className="sideDrawer-list" href="#about" onClick={props.close}>About</a></li>
                    <li><a className="sideDrawer-list" href="#portfolio" onClick={props.close}>Portfolio</a></li>
                    <li><a className="sideDrawer-list" href="#contact" onClick={props.close}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default sideDrawer;