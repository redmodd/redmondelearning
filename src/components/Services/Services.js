import React from 'react';
import ServicesItems from './ServicesItem';
import ToolItems from './ToolItem';

const Services = () => {
    const servicesItems = [
        {
            imgSrc: require('./images/ID.webp'),
            alt: "pen and ruler",
            header: "Instructional Design",
            id: "instructionalDesign"
        },
        {
            imgSrc: require('./images/eLearning.webp'),
            alt: "start and finish line",
            header: "eLearning Development",
            id: "learningExperience"
        },
        {
            imgSrc: require('./images/LMS.webp'),
            alt: "tablet and smartphone",
            header: "LMS & edTech Consulting",
            id: "lmsconsulting"
        },
        {
            imgSrc: require('./images/Learning Analytics.webp'),
            alt: "Learning analytics",
            header: "Learning Analytics",
            id: "Learning Analytics"
        }
    ]
    const toolItems = [
        {
            imgSrc: require('./images/Flow.webp'),
            alt: "dominKnow Flow Logo",
            header: "dominKnow Flow",
            id: "Flow"
        },
        {
            imgSrc: require('./images/Storyline.webp'),
            alt: "Storyline 360 Logo",
            header: "Storyline 360",
            id: "Storyline"
        },
        {
            imgSrc: require('./images/Rise.webp'),
            alt: "Rise 360 Logo",
            header: "Rise 360",
            id: "Rise"
        },
        {
            imgSrc: require('./images/VYOND.webp'),
            alt: "VYOND Logo",
            header: "VYOND",
            id: "VYOND"
        },
        {
            imgSrc: require('./images/CreativeCloud.webp'),
            alt: "Adobe Creative Cloud Logo",
            header: "Adobe Creative Cloud",
            id: "CreativeCloud"
        },
        {
            imgSrc: require('./images/Camtasia.webp'),
            alt: "Camtasia Logo",
            header: "Camtasia",
            id: "Camtasia"
        },
        {
            imgSrc: require('./images/Audacity.webp'),
            alt: "Audacity Logo",
            header: "Audacity",
            id: "Audacity"
        },
        {
            imgSrc: require('./images/3dvista.webp'),
            alt: "3DVista Logo",
            header: "3DVista",
            id: "3DVista"
        },
        {
            imgSrc: require('./images/CenarioVR.webp'),
            alt: "CenarioVR Logo",
            header: "CenarioVR",
            id: "CenarioVR"
        },
        {
            imgSrc: require('./images/VIAR.webp'),
            alt: "Viar 360 Logo",
            header: "Viar 360",
            id: "Viar 360"
        },
        {
            imgSrc: require('./images/HTML_CSS.webp'),
            alt: "LXPs Logo",
            header: "HTML & CSS",
            id: "HTMLs"
        },
        {
            imgSrc: require('./images/ReactJS.webp'),
            alt: "ReactJS Logo",
            header: "ReactJS",
            id: "ReactJS"
        },
        {
            imgSrc: require('./images/xAPI.webp'),
            alt: "xAPI Logo",
            header: "xAPI",
            id: "xAPI"
        },
        {
            imgSrc: require('./images/SCORM.webp'),
            alt: "SCORM Logo",
            header: "SCORM",
            id: "SCORM"
        },
        {
            imgSrc: require('./images/WordPress.webp'),
            alt: "WordPress Logo",
            header: "WordPress",
            id: "WordPress"
        },
        {
            imgSrc: require('./images/LearnDash.webp'),
            alt: "LearnDash Logo",
            header: "LearnDash",
            id: "LearnDash"
        },
        {
            imgSrc: require('./images/BuddyBoss.webp'),
            alt: "BuddyBoss Logo",
            header: "BuddyBoss",
            id: "BuddyBoss"
        },
        {
            imgSrc: require('./images/LMSs.webp'),
            alt: "Computer Logo",
            header: "Various LMSs & LXPs",
            id: "LMSs"
        }
    ]

    return(
        <section id="services">
            <div className="spacer"></div>
            <div className = "column">
                <h2 className ="textCenter">What I Can Do</h2>
                <p className ="textCenter">Here's what I can help you with.</p>
            </div>
            <div className="row">
                {servicesItems.map (item => {
                    return <ServicesItems
                        imgSrc={item.imgSrc} 
                        alt={item.alt} 
                        header={item.header}  
                        key={item.id}
                        />
                })}
            </div>
                <div className="spacer"></div>
                <div className = "column">
                    <h2>Tools and Systems</h2>
                    <p className ="textCenter">Here's some of the common tools and systems I use.</p>
                </div>
                <div className="row">
                {toolItems.map (item => {
                    return <ToolItems
                        imgSrc={item.imgSrc} 
                        alt={item.alt} 
                        header={item.header}  
                        key={item.id}
                        />
                })}
            </div>
            <div className="spacer"></div>
        </section>
    ) 
}

export default Services;