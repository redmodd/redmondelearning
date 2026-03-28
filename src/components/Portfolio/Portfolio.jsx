import PortfolioItem from './PortfolioItem.jsx';

import Privacy from './images/Privacy.webp';
import Bystander from './images/bystander.webp';
import Map from './images/map.webp';
import Engaging from './images/engaging.webp';
import SportParticipation from './images/SportParticipation.webp';
import IP from './images/IP.webp';
import AirCadets from './images/856.webp';
import AcademicPaper from './images/paper.webp';
import Pumpkin from './images/pumpkin.webp';
import StorylineLogo from './images/Storyline.webp';
import AudacityLogo from './images/Audacity.webp';
import FlowLogo from './images/Flow.webp';
import VYONDLogo from './images/VYOND.webp';
import RiseLogo from './images/Rise.webp';
import WordPressLogo from './images/WordPress.webp';
import BuddyBossLogo from './images/BuddyBoss.webp';
import LearnDashLogo from './images/LearnDash.webp';
import CamtasiaLogo from './images/Camtasia.webp';

const Portfolio = () => {
  const portfolioItems = [
    {
      imgSrc: Privacy,
      alt: 'Privacy and Information Security Module Screenshot',
      client: 'Ontario Shores Centre for Mental Health',
      header: 'Privacy and Information Security',
      moduleText:
        'This eLearning module spices it up with some gamification. Inspired by Jeopardy, learners face off against two characters, wager points, and earn achievements.',
      itemUrl: 'https://www.redmondelearning.ca/portfolio/Privacy/story.html',
      tools: [StorylineLogo, AudacityLogo],
      id: 'privacy',
    },
    {
      imgSrc: Bystander,
      alt: 'Bystander Empowerment Screenshot',
      client: 'Coaching Association of Canada',
      header: 'Bystander Empowerment',
      moduleText:
        'This eLearning module has a modern design. Learners are challenged make decisions in realistic settings.',
      itemUrl:
        'https://www.redmondelearning.ca/portfolio/Bystander Empowerment Demo/index.html',
      tools: [FlowLogo, VYONDLogo, AudacityLogo, CamtasiaLogo],
      id: 'bystander',
    },
    {
      imgSrc: Map,
      alt: 'Memory and Aging Program Screenshot',
      client: 'Baycrest Health Sciences',
      header: 'Memory and Aging Program',
      moduleText:
        'Designed for the 50+ age group, this eLearning module reviews the 10 week long course. The module combines gamification and soothing music and colours to add a bit of fun.',
      itemUrl: 'https://www.redmondelearning.ca/portfolio/MAP/story.html',
      tools: [StorylineLogo, AudacityLogo],
      id: 'map',
    },
    {
      imgSrc: Engaging,
      alt: 'Engaging Families in Distress Screenshot',
      client: 'CLRI',
      header: 'Engaging Families in Distress',
      moduleText:
        'This eLearning module helps prepare healthcare workers for engaging with family members who are in distress. This module contains several practice activities to apply the content.',
      itemUrl: 'https://www.redmondelearning.ca/portfolio/Engaging Families in Distress/index.html',
      tools: [RiseLogo, VYONDLogo, StorylineLogo, AudacityLogo, CamtasiaLogo],
      id: 'engaging',
    },
    {
      imgSrc: SportParticipation,
      alt: 'Leading a Return to Sport Participation Screenshot',
      client: 'Coaching Association of Canada',
      header: 'Leading a Return to Sport Participation',
      moduleText:
        'This eLearning module prepares youth sport coaches to lead their teams in a COVID-19 environment. This module is activity heavy - having learners apply resources in realistic settings.',
      itemUrl:
        'https://www.redmondelearning.ca/portfolio/Leading a Return to sport Participation/index.html',
      tools: [FlowLogo, VYONDLogo, AudacityLogo, CamtasiaLogo],
      id: 'SportParticipation',
    },
    {
      imgSrc: IP,
      alt: 'Introduction to Intellectual Property Rights Screenshot',
      client: 'Baycrest Health Sciences',
      header: 'Introduction to IP Rights',
      moduleText:
        'This eLearning module has a modern design with complex user tracking through the dashboard and gamified knowledge checks.',
      itemUrl: 'https://www.redmondelearning.ca/portfolio/IP/story.html',
      tools: [StorylineLogo],
      id: 'ip',
    },
    {
      imgSrc: AirCadets,
      alt: '856 Air Cadets screenshot',
      client: '856 Air Cadets',
      header: '856 Air Cadets Website',
      moduleText: 'A website for a youth organization that includes an online community and an LMS.',
      itemUrl: 'https://856aircadets.com/',
      tools: [WordPressLogo, BuddyBossLogo, LearnDashLogo],
      id: 'website',
    },
    {
      imgSrc: AcademicPaper,
      alt: 'Academic Paper screenshot',
      client: 'Academic Paper',
      header: 'A Framework to Leverage & Mature Learning Ecosystems',
      moduleText:
        'Check out my recent publication published in the International Journal of Emerging Technologies in Learning.',
      itemUrl: 'https://online-journals.org/index.php/i-jet/article/view/11898',
      id: 'paper',
    },
    {
      imgSrc: Pumpkin,
      alt: 'Pumpkin Game demo screenshot',
      client: 'Proof of Concept',
      header: 'Pumpkin Game',
      moduleText:
        'This proof of concept is a fun game for kids to learn about gardening through growing a pumpkin. This is a proof of concept and is not fully functional.',
      itemUrl: 'https://www.redmondelearning.ca/portfolio/PumpkinGame/story.html',
      tools: [StorylineLogo, AudacityLogo],
      id: 'pumpkin',
    },
  ];
  return (
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
};

export default Portfolio;
