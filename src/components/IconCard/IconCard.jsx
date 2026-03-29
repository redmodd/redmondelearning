import PropTypes from 'prop-types';
import './IconCard.css';

/**
 * Reusable card component for displaying an icon with a label
 * @component
 * @param {string} imgSrc - Image source URL
 * @param {string} alt - Alt text for the image
 * @param {string} header - Text label for the card
 * @param {string} [variant='services'] - Card style variant: 'services' or 'tools'
 * @param {boolean} [lazy=true] - Whether to use lazy loading
 * @returns {JSX.Element}
 */
const IconCard = ({ imgSrc, alt, header, variant = 'services', lazy = true }) => {
  const cardClass = `icon-card icon-card--${variant}`;
  const imgClass = `icon-card__image icon-card__image--${variant}`;

  return (
    <div className={cardClass}>
      <img
        className={imgClass}
        src={imgSrc}
        alt={alt}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
      />
      <p className={`icon-card__label icon-card__label--${variant}`}>{header}</p>
    </div>
  );
};

IconCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['services', 'tools']),
  lazy: PropTypes.bool,
};

export default IconCard;
