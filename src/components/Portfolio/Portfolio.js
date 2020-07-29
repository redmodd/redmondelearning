import React from 'react';
import './Portfolio.css';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {    
    const portfolioItems = [
       {
            className: "card privacy",
            portfolioType: "images-landscape-container",
            imageType: "image-landscape",
            imgSrc: require('./images/privacy.webp'),
            alt: "Privacy and Information Security Module Screenshot",
            header: "Privacy and Information Security",
            subtitle: "Storyline 360",
            text: "This eLearning module spices it up with some gamification. Inspired by Jeopardy, learners face off against two characters, wager points, and earn achievements.",
            itemUrl: "https://www.redmondelearning.ca/portfolio/Privacy/story.html",
            buttonText: "Live Demo"
        },
       {
            className: "card map",
            portfolioType: "images-landscape-container",
            imageType: "image-landscape",
            imgSrc: require('./images/map.webp'),
            alt: "Memory and Aging Program Screenshot",
            header: "Memory and Aging Program Review",
            subtitle: "Storyline 360",
            text: "Designed for the 50+ age group, this eLearning module reviews the 10 week long course. The module combines gamification and soothing music and colours to add a bit of fun.",
            itemUrl: "https://www.redmondelearning.ca/portfolio/MAP/story.html",
            buttonText: "Live Demo"
        },
       {
            className: "card jl",
            portfolioType: "images-portrait-container",
            imageType: "image-portrait",
            imgSrc: require('./images/jl.webp'),
            alt: "Cultural Competency: Judaism Module Screenshot",
            header: "Cultural Competency: Judaism",
            subtitle: "Rise 360",
            text: "This eLearning module combines a modern design and realistic activities. The content has been removed and replaced with demo text.",
            itemUrl: "https://www.redmondelearning.ca/portfolio/JL/index.html",
            buttonText: "Live Demo"
        },
        {
            className: "card dataExcellence",
            portfolioType: "images-portrait-container",
            imageType: "image-portrait",
            imgSrc: require('./images/dataexcellence.webp'),
            alt: "Data Excellence Module Screenshot",
            header: "Data Excellence",
            subtitle: "dominKnow Flow",
            text: "This demo eLearning module shows a modern design with pleasing graphics. Only Chapter 2 contains content in this demo.",
            itemUrl: "https://www.redmondelearning.ca/portfolio/DE/index.html",
            buttonText: "Live Demo"
        },
        {
            className: "card wpv",
            portfolioType: "images-landscape-container",
            imageType: "image-landscape",
            imgSrc: require('./images/wpv.webp'),
            alt: "Workplace Violence, Harassment, and Domestic Violence Module Screenshot",
            header: "Workplace Violence, Harassment, and Domestic Violence",
            subtitle: "Storyline 360 & VYOND",
            text: "This eLearning module has a fun design combined with realistic activities and animated scenarios. Learners are challenged make critical decisions in a realistic but safe setting.",
            itemUrl: "https://www.redmondelearning.ca/portfolio/WPV/story.html",
            buttonText: "Live Demo"
        },
        {
            className: "card ip",
            portfolioType: "images-landscape-container",
            imageType: "image-landscape",
            imgSrc: require('./images/ip.webp'),
            alt: "Introduction to Intellectual Property Rights Screenshot",
            header: "Introduction to Intellectual Property Rights",
            subtitle: "Storyline 360",
            text: "This eLearning module has a modern design with complex user tracking through the dashboard and gamified knowledge checks.",
            itemUrl: "https://www.redmondelearning.ca/portfolio/IP/story.html",
            buttonText: "Live Demo"
        },
        {
            className: "card website",
            portfolioType: "images-landscape-container",
            imageType: "image-landscape",
            imgSrc: require('./images/website.webp'),
            alt: "Redmond eLearning website screenshot",
            header: "Redmond eLearning Website",
            subtitle: "React.js",
            text: "The website you are currently on! A clean, modern and mobile website made with React.js.",
            itemUrl: "https://www.redmondelearning.ca/",
            buttonText: "Live Demo"
        },
        {
            className: "card paper",
            portfolioType: "images-landscape-container",
            imageType: "image-landscape",
            imgSrc: require('./images/paper.webp'),
            alt: "Paper screenshot",
            header: "A Framework to Leverage & Mature Learning Ecosystems",
            subtitle: "Academic paper",
            text: "Check out my recent publication published in the International Journal of Emerging Technologies in Learning.",
            itemUrl: "https://online-journals.org/index.php/i-jet/article/view/11898",
            buttonText: "Read Paper"
        },
        {
            className: "card pumpkin",
            portfolioType: "images-landscape-container",
            imageType: "image-landscape",
            imgSrc: require('./images/pumpkin.webp'),
            alt: "Pumpkin Game demo screenshot ",
            header: "Pumpkin Game",
            subtitle: "Storyline 360",
            text: "This proof of concept is a fun game for kids to learn about gardening through growing a pumpkin. This is a proof of concept and is not fully functional.",
            itemUrl: "https://www.redmondelearning.ca/portfolio/PumpkinGame/story.html",
            buttonText: "Live Demo"
        }
    ]
    return(
        <section>
            <div className="box-column">
                <div>
                    <h1>Portfolio</h1>
                </div>
                <div className="portfolio-description">
                    <p>Here's a selection of my recent work.</p>
                </div>
            </div>          
            <div className="box-card">
                {portfolioItems.map (item => {
                    return <PortfolioItem 
                        className={item.className}
                        portfolioType={item.portfolioType} 
                        imageType={item.imageType} 
                        imgSrc={item.imgSrc} 
                        alt={item.alt} 
                        header={item.header} 
                        subtitle={item.subtitle} 
                        text={item.text} 
                        itemUrl={item.itemUrl} 
                        buttonText={item.buttonText}
                        />
                })}
            </div>
            <hr></hr>
        </section>
    );
}

export default Portfolio;