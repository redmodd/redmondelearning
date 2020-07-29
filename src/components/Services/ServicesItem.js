import React from 'react';
import './ServicesItem.css';

const ServicesItem = (props) => {    
    return(
        <div className="box">
            <div className={props.imgType}>
            <img className='services-icon' src={props.imgSrc} alt={props.alt} ></img>
            </div>
            <div className={props.descriptionType}>
                <h2 className='services-header'>{props.header}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    ) 
        

}

export default ServicesItem;