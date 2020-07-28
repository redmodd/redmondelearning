import React from 'react';
import './DrawerCloseButton.css';

const drawerCloseButton = props => {
    return(
        <button className="material-icons close-icon" onClick={props.onClick}>clear</button>
    );
}

export default drawerCloseButton;

