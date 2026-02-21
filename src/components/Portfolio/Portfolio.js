import React from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {   
    const StorylineLogo = <img className = "portfolioTool" alt="Storyline Logo" src={require('./images/Storyline.webp')} loading="lazy"></img>
    const AudacityLogo = <img className = "portfolioTool" alt="Audacity Logo" src={require('./images/Audacity.webp')} loading="lazy"></img>
    const FlowLogo = <img className = "portfolioTool" alt="dominKnow Flow Logo" src={require('./images/Flow.webp')} loading="lazy"></img>
    const VYONDLogo = <img className = "portfolioTool" alt="VYOND Logo" src={require('./images/VYOND.webp')} loading="lazy"></img>
    const RiseLogo = <img className = "portfolioTool" alt="Articulate Rise Logo" src={require('./images/Rise.webp')} loading="lazy"></img>
    const WordPressLogo = <img className = "portfolioTool" alt="WordPress Logo" src={require('./images/WordPress.webp')} loading="lazy"></img>
    const BuddyBossLogo = <img className = "portfolioTool" alt="BuddyBoss Logo" src={require('./images/BuddyBoss.webp')} loading="lazy"></img>
    const LearnDashLogo = <img className = "portfolioTool" alt="LearnDash Logo" src={require('./images/LearnDash.webp')} loading="lazy"></img>
    const CamtasiaLogo = <img className = "portfolioTool" alt="Camtasia Logo" src={require('./images/Camtasia.webp')} loading="lazy"></img> 
    
    const portfolioItems = [
       {
            imgSrc: require('./images/Privacy.webp'),
            alt: "Privacy and Information Security Module Screenshot",
            client: "Ontario Shores Centre for Mental Health",
            header: "Privacy and Information Security",
            moduleText:"This eLearning module spices it up with some gamification. Inspired by Jeopardy, learners face off against two characters, wager points, and earn achievements.",
            itemUrl: "https://www.redmondelearning.ca/portfolio/Privacy/story.html",
            tools: <>{StorylineLogo}{AudacityLogo}</>,
            id: "privacy"
        },
        {
            imgSrc: require('./images/bystander.webp'),
            alt: "Bystander Empowerment Screenshot",
            client: "Coaching Association of Canada",
            header: "Bystander Empowerment",
            moduleText:"This eLearning module has a modern design. Learners are challenged make decisions in realistic settings.",
            itemUrl: "https://www.redmondelearning.ca/portfolio/Bystander Empowerment Demo/index.html",
            tools: <>{FlowLogo}{VYONDLogo}{AudacityLogo}{CamtasiaLogo}</>,
            id: "bystander"
        },
       {
            imgSrc: require('./images/map.webp'),
            alt: "Memory and Aging Program Screenshot",
            client: "Baycrest Health Sciences",
            header: "Memory and Aging Program",
            moduleText:"Designed for the 50+ age group, this eLearning module reviews the 10 week long course. The module combines gamification and soothing music and colours to add a bit of fun.",
            itemUrl: "https://www.redmondelearning.ca/portfolio/MAP/story.html",
            tools: <>{StorylineLogo}{AudacityLogo}</>,
            id: "map"
        },
        {
            imgSrc: require('./images/engaging.webp'),
            alt: "Engaging Families in Distress Screenshot",
            client: "CLRI",
            header: "Engaging Families in Distress",
            moduleText:"This eLearning module helps prepare healthcare workers for engagine with family members who are in distress. This module contains several practice activities to apply the content.",
            itemUrl: "https://www.redmondelearning.ca/portfolio/Engaging Families in Distress/index.html",
            tools: <>{RiseLogo}{VYONDLogo}{StorylineLogo}{AudacityLogo}{CamtasiaLogo}</>,
            id: "engaging"
        },
        {
            imgSrc: require('./images/SportParticipation.webp'),
            alt: "Leading a Return to Sport Participation Screenshot",
            client: "Coaching Association of Canada",
            header: "Leading a Return to Sport Participation",
            moduleText:"This eLearning module prepares youth sport coaches to lead their teams in a COVID-19 environment. This module is activity heavy - having learners apply resources in realistic settings.",
            itemUrl: "https://www.redmondelearning.ca/portfolio/Leading a Return to sport Participation/index.html",
            tools: <>{FlowLogo}{VYONDLogo}{AudacityLogo}{CamtasiaLogo}</>,
            id: "SportParticipation"
        },
        {
            imgSrc: require('./images/IP.webp'),
            alt: "Introduction to Intellectual Property Rights Screenshot",
            client: "Baycrest Health Sciences",
            header: "Introduction to IP Rights",
            moduleText:"This eLearning module has a modern design with complex user tracking through the dashboard and gamified knowledge checks.",
            itemUrl: "https://www.redmondelearning.ca/portfolio/IP/story.html",
            tools: <>{StorylineLogo}</>,
            id: "ip"
        },
        {
            imgSrc: require('./images/856.webp'),
            alt: "856 Air Cadets screenshot",
            client: "856 Air Cadets",
            header: "856 Air Cadets Website",
            moduleText:"A website for a youth organization that includes an online community and an LMS.",
            itemUrl: "https://856aircadets.com/",
            tools: <>{WordPressLogo}{BuddyBossLogo}{LearnDashLogo}</>,
            id: "website"
        },
        {
            imgSrc: require('./images/paper.webp'),
            alt: "Academic Paper screenshot",
            client: "Academic Paper",
            header: "A Framework to Leverage & Mature Learning Ecosystems",
            moduleText:"Check out my recent publication published in the International Journal of Emerging Technologies in Learning.",
            itemUrl: "https://online-journals.org/index.php/i-jet/article/view/11898",
            id: "paper"
        },
        {
            imgSrc: require('./images/pumpkin.webp'),
            alt: "Pumpkin Game demo screenshot",
            client: "Proof of Concept",
            header: "Pumpkin Game",
            moduleText:"This proof of concept is a fun game for kids to learn about gardening through growing a pumpkin. This is a proof of concept and is not fully functional.",
            itemUrl: "https://www.redmondelearning.ca/portfolio/PumpkinGame/story.html",
            tools: <>{StorylineLogo}{AudacityLogo}</>,
            id: "pumpkin"
        }
    ]
    return(
        <section id="portfolio">
            <div className="column">
                <h2 className ="textCenter">Portfolio</h2>
                <p className ="textCenter">Here's a selection of my recent work.</p>
            </div>          
            <div className="row">
                {portfolioItems.map (item => {
                    return <PortfolioItem 
                        imgSrc={item.imgSrc} 
                        alt={item.alt} 
                        client={item.client}
                        header={item.header} 
                        moduleText={item.moduleText} 
                        itemUrl={item.itemUrl} 
                        tools={item.tools}
                        key={item.id}
                        />
                })}
            </div>
            <div className="spacer"></div>
        </section>
    );
}

export default Portfolio;