import './PortfolioItem.css';

const PortfolioItem = props => {
  return (
    <article className="portfolioArticle">
      <a
        className="portfolioItem"
        href={props.itemUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="portfolioImageWrap">
          <img
            className="portfolioImage"
            src={props.imgSrc}
            loading="lazy"
            decoding="async"
            alt={props.alt}
          />
        </div>
        <span className="clientName">{props.client}</span>
        <h3 className="moduleTitle">{props.header}</h3>
        <p className="moduleText">{props.moduleText}</p>
        <div className="portfolioToolContainer">
          {props.tools?.map((src, index) => (
            <img
              key={`${props.itemUrl}-tool-${index}`}
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
};

export default PortfolioItem;
