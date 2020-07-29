import React from 'react';
import './DrawerOpenButton.css';

const drawerOpenButton = props => {
    return(
        <button className="toggle-button" onClick={props.onClick}>
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
        </button>
    );
}

export default drawerOpenButton;