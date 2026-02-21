import React from 'react';
import './ToolItem.css';

const ToolItem = (props) => {    
    return(
        <div className = "toolItem">
            <img className='toolIcon' src={props.imgSrc} loading="lazy" decoding="async" alt={props.alt} ></img>
            <p className='toolName'>{props.header}</p>  
        </div>
    ) 
}

export default ToolItem;