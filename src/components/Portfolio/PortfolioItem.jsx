import PropTypes from 'prop-types';
import './PortfolioItem.css';

/**
 * Portfolio item card component
 * @component
 * @param {string} imgSrc - Main portfolio image source
 * @param {string} alt - Alt text for the main image
 * @param {string} client - Client/organization name
 * @param {string} header - Project title
 * @param {string} moduleText - Project description
 * @param {string} itemUrl - External project URL
 * @param {Array<string>} [tools=[]] - Tool/technology logo image sources
 * @returns {JSX.Element}
 */
const PortfolioItem = ({
  imgSrc,
  alt,
  client,
  header,
  moduleText,
  itemUrl,
  tools = [],
}) => {
  return (
    <article className="portfolioArticle">
      <a
        className="portfolioItem"
        href={itemUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="portfolioImageWrap">
          <img
            className="portfolioImage"
            src={imgSrc}
            loading="lazy"
            decoding="async"
            alt={alt}
          />
        </div>
        <span className="clientName">{client}</span>
        <h3 className="moduleTitle">{header}</h3>
        <p className="moduleText">{moduleText}</p>
        {tools.length > 0 && (
          <div className="portfolioToolContainer">
            {tools.map((src, index) => (
              <img
                key={`${itemUrl}-tool-${index}`}
                src={src}
                alt=""
                className="portfolioTool"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        )}
      </a>
    </article>
  );
};

PortfolioItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  moduleText: PropTypes.string.isRequired,
  itemUrl: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string),
};

export default PortfolioItem;
