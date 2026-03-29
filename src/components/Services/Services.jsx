import IconCard from '../IconCard/IconCard.jsx';
import { servicesItems } from '../../data/servicesData.js';
import { toolItems } from '../../data/toolsData.js';

const Services = () => {
  return (
    <section id="services">
      <div className="spacer" />
      <div className="pageContent">
        <div className="sectionIntro">
          <h2>What I Can Do</h2>
          <p className="sectionIntro__lede">Here's what I can help you with.</p>
        </div>
        <div className="row--services">
          {servicesItems.map(item => (
            <IconCard
              key={item.id}
              imgSrc={item.imgSrc}
              alt={item.alt}
              header={item.header}
              variant="services"
            />
          ))}
        </div>
      </div>
      <div className="spacer" />
      <div className="pageContent">
        <div className="sectionIntro">
          <h2>Tools and Systems</h2>
          <p className="sectionIntro__lede">
            Here's some of the common tools and systems I use.
          </p>
        </div>
        <div className="row--tools">
          {toolItems.map(item => (
            <IconCard
              key={item.id}
              imgSrc={item.imgSrc}
              alt={item.alt}
              header={item.header}
              variant="tools"
            />
          ))}
        </div>
      </div>
      <div className="spacer spacer--lg" />
    </section>
  );
};

export default Services;
