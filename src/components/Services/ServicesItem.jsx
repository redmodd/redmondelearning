import './ServicesItem.css';

const ServicesItem = (props) => {    
    return(
        <div className = "servicesItem">
            <img className='servicesIcon' src={props.imgSrc} decoding="async" alt={props.alt} ></img>
            <p className= 'servicesName'>{props.header}</p>
        </div>
    ) 
}

export default ServicesItem;