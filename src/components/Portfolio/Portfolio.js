import React from 'react';
import './Portfolio.css';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {    
    const portfolioItems = {
        privacy: {
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
        map: {
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
        jl: {
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
        dataExcellence: {
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
        wpv: {
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
        ip: {
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
        website: {
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
        paper: {
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
        pumpkin: {
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
    }
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
                <PortfolioItem className={portfolioItems.privacy.className} portfolioType={portfolioItems.privacy.portfolioType} imageType={portfolioItems.privacy.imageType} imgSrc={portfolioItems.privacy.imgSrc} alt={portfolioItems.privacy.alt} header={portfolioItems.privacy.header} subtitle={portfolioItems.privacy.subtitle} text={portfolioItems.privacy.text} itemUrl={portfolioItems.privacy.itemUrl} buttonText={portfolioItems.privacy.buttonText}/>
                <PortfolioItem className={portfolioItems.map.className} portfolioType={portfolioItems.map.portfolioType} imageType={portfolioItems.map.imageType} imgSrc={portfolioItems.map.imgSrc} alt={portfolioItems.map.alt} header={portfolioItems.map.header} subtitle={portfolioItems.map.subtitle} text={portfolioItems.map.text} itemUrl={portfolioItems.map.itemUrl} buttonText={portfolioItems.map.buttonText}/>
                <PortfolioItem className={portfolioItems.jl.className} portfolioType={portfolioItems.jl.portfolioType} imageType={portfolioItems.jl.imageType} imgSrc={portfolioItems.jl.imgSrc} alt={portfolioItems.jl.alt} header={portfolioItems.jl.header} subtitle={portfolioItems.jl.subtitle} text={portfolioItems.jl.text} itemUrl={portfolioItems.jl.itemUrl} buttonText={portfolioItems.jl.buttonText}/>
                <PortfolioItem className={portfolioItems.dataExcellence.className} portfolioType={portfolioItems.dataExcellence.portfolioType} imageType={portfolioItems.dataExcellence.imageType} imgSrc={portfolioItems.dataExcellence.imgSrc} alt={portfolioItems.dataExcellence.alt} header={portfolioItems.dataExcellence.header} subtitle={portfolioItems.dataExcellence.subtitle} text={portfolioItems.dataExcellence.text} itemUrl={portfolioItems.dataExcellence.itemUrl} buttonText={portfolioItems.dataExcellence.buttonText}/>
                <PortfolioItem className={portfolioItems.wpv.className} portfolioType={portfolioItems.wpv.portfolioType} imageType={portfolioItems.wpv.imageType} imgSrc={portfolioItems.wpv.imgSrc} alt={portfolioItems.wpv.alt} header={portfolioItems.wpv.header} subtitle={portfolioItems.wpv.subtitle} text={portfolioItems.wpv.text} itemUrl={portfolioItems.wpv.itemUrl} buttonText={portfolioItems.wpv.buttonText}/>
                <PortfolioItem className={portfolioItems.ip.className} portfolioType={portfolioItems.ip.portfolioType} imageType={portfolioItems.ip.imageType} imgSrc={portfolioItems.ip.imgSrc} alt={portfolioItems.ip.alt} header={portfolioItems.ip.header} subtitle={portfolioItems.ip.subtitle} text={portfolioItems.ip.text} itemUrl={portfolioItems.ip.itemUrl} buttonText={portfolioItems.ip.buttonText}/>
                <PortfolioItem className={portfolioItems.website.className} portfolioType={portfolioItems.website.portfolioType} imageType={portfolioItems.website.imageType} imgSrc={portfolioItems.website.imgSrc} alt={portfolioItems.website.alt} header={portfolioItems.website.header} subtitle={portfolioItems.website.subtitle} text={portfolioItems.website.text} itemUrl={portfolioItems.website.itemUrl} buttonText={portfolioItems.website.buttonText}/>
                <PortfolioItem className={portfolioItems.paper.className} portfolioType={portfolioItems.paper.portfolioType} imageType={portfolioItems.paper.imageType} imgSrc={portfolioItems.paper.imgSrc} alt={portfolioItems.paper.alt} header={portfolioItems.paper.header} subtitle={portfolioItems.paper.subtitle} text={portfolioItems.paper.text} itemUrl={portfolioItems.paper.itemUrl} buttonText={portfolioItems.paper.buttonText}/>
                <PortfolioItem className={portfolioItems.pumpkin.className} portfolioType={portfolioItems.pumpkin.portfolioType} imageType={portfolioItems.pumpkin.imageType} imgSrc={portfolioItems.pumpkin.imgSrc} alt={portfolioItems.pumpkin.alt} header={portfolioItems.pumpkin.header} subtitle={portfolioItems.pumpkin.subtitle} text={portfolioItems.pumpkin.text} itemUrl={portfolioItems.pumpkin.itemUrl} buttonText={portfolioItems.pumpkin.buttonText}/>
            </div>
            <hr></hr>
        </section>
    );
}

export default Portfolio;