import PortfolioItem from './PortfolioItem.jsx';
import { portfolioItems } from '../../data/portfolioData.js';

/**
 * Portfolio section displaying past projects
 * @component
 * @returns {JSX.Element}
 */
const Portfolio = () => (
    <section id="portfolio">
      <div className="pageContent">
        <div className="sectionIntro">
          <h2>Portfolio</h2>
          <p className="sectionIntro__lede">Here's a selection of my recent work.</p>
        </div>
        <div className="row--portfolio">
          {portfolioItems.map(item => (
            <PortfolioItem
              imgSrc={item.imgSrc}
              alt={item.alt}
              client={item.client}
              header={item.header}
              moduleText={item.moduleText}
              itemUrl={item.itemUrl}
              tools={item.tools}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <div className="spacer" />
    </section>
);

export default Portfolio;
