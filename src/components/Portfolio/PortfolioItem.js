import React from 'react';
import './PortfolioItem.css';

const PortfolioItem = props => {
    return(
        <div className={props.className}>
            <div className={props.portfolioType}>
                <img className={props.imageType} src={props.imgSrc} alt={props.alt}></img>
            </div>
            <div className="headers-container">
                <h3 className="portfolio-header">{props.header}</h3>
                <h4 className="portfolio-subtitle">{props.subtitle}</h4>
            </div>
            <div className="text-container">
                <p className="portfolio-text">{props.text}</p>
            </div>
            <div className="btn-container">
                <a className="btn-blue" href={props.itemUrl} target="_blank" rel="noopener noreferrer" type="button">{props.buttonText}</a>
            </div>
        </div> 
    );
}

export default PortfolioItem;