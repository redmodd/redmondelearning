import React from 'react';
import './SideDrawer.css';
import DrawerCloseButton from './DrawerCloseButton';

const sideDrawer = props => {
    let drawerClasses = 'sideDrawer';
    if (props.show) {
        drawerClasses = 'sideDrawer open';
    }
    return(
        <nav className={drawerClasses}>
            <div className="sideDrawer-header">
                <div className="sideDrawer-nav">
                    <div>
                        <a href="redmondelearning.ca" className="toolbar-logo">Redmond eLearning</a>
                    </div>
                    <div className="spacer"></div>
                    <div>
                        <DrawerCloseButton onClick={props.drawerClose}/>
                    </div>
                </div>
            </div>       
            <div> 
                <ul>
                    <li><a className="sideDrawer-list" href="#about" onClick={props.drawerClose}>About</a></li>
                    <li><a className="sideDrawer-list" href="#portfolio" onClick={props.drawerClose}>Portfolio</a></li>
                    <li><a className="sideDrawer-list" href="#contact" onClick={props.drawerClose}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default sideDrawer;