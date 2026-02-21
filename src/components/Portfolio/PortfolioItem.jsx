;
import './PortfolioItem.css';

const PortfolioItem = props => {
    return(
        <article>
            <a className="portfolioItem" href={props.itemUrl} target="_blank" rel="noopener noreferrer" type="button">
                <img className="portfolioImage" src={props.imgSrc} loading="lazy" decoding="async" alt={props.alt}></img>
                <span className = "clientName">{props.client}</span>
                <h3 className = "moduleTitle">{props.header}</h3>
                <p className = "moduleText">{props.moduleText}</p>
                <div className="portfolioToolContainer">
                    {props.tools?.map(src => (
                        <img
                        key={src}
                        src={src}
                        alt=""
                        className="portfolioTool"
                        loading="lazy"
                        decoding="async"
                        />
                    ))}
                </div>
            </a> 
        </article>
    );
}

export default PortfolioItem;