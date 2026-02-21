import React from 'react';
import ServicesItems from './ServicesItem.jsx';
import ToolItems from './ToolItem.jsx';
import ID from './images/ID.webp';
import eLearning from './images/eLearning.webp';
import LMS from './images/LMS.webp';
import LearningAnalytics from './images/Learning Analytics.webp';
import Flow from './images/Flow.webp';
import Storyline from './images/Storyline.webp';
import Rise from './images/Rise.webp';
import VYOND from './images/VYOND.webp';
import CreativeCloud from './images/CreativeCloud.webp';
import Camtasia from './images/Camtasia.webp';
import Audacity from './images/Audacity.webp';
import DVista from './images/3DVista.webp';
import CenarioVR from './images/CenarioVR.webp';
import Viar from './images/Viar.webp';
import HTML_CSS from './images/HTML_CSS.webp';
import ReactJS from './images/ReactJS.webp';
import xAPI from './images/xAPI.webp';
import SCORM from './images/SCORM.webp';
import WordPress from './images/WordPress.webp';
import LearnDash from './images/LearnDash.webp';
import BuddyBoss from './images/BuddyBoss.webp';
import LMSs from './images/LMSs.webp'; 


const Services = () => {
    const servicesItems = [
        {
            imgSrc: ID,
            alt: "pen and ruler",
            header: "Instructional Design",
            id: "instructionalDesign"
        },
        {
            imgSrc: eLearning,
            alt: "start and finish line",
            header: "eLearning Development",
            id: "learningExperience"
        },
        {
            imgSrc: LMS,
            alt: "tablet and smartphone",
            header: "LMS & edTech Consulting",
            id: "lmsconsulting"
        },
        {
            imgSrc: LearningAnalytics,
            alt: "Learning analytics",
            header: "Learning Analytics",
            id: "Learning Analytics"
        }
    ]
    const toolItems = [
        {
            imgSrc: Flow,
            alt: "dominKnow Flow Logo",
            header: "dominKnow Flow",
            id: "Flow"
        },
        {
            imgSrc: Storyline,
            alt: "Storyline 360 Logo",
            header: "Storyline 360",
            id: "Storyline"
        },
        {
            imgSrc: Rise,
            alt: "Rise 360 Logo",
            header: "Rise 360",
            id: "Rise"
        },
        {
            imgSrc: VYOND,
            alt: "VYOND Logo",
            header: "VYOND",
            id: "VYOND"
        },
        {
            imgSrc: CreativeCloud,
            alt: "Adobe Creative Cloud Logo",
            header: "Adobe Creative Cloud",
            id: "CreativeCloud"
        },
        {
            imgSrc: Camtasia,
            alt: "Camtasia Logo",
            header: "Camtasia",
            id: "Camtasia"
        },
        {
            imgSrc: Audacity,
            alt: "Audacity Logo",
            header: "Audacity",
            id: "Audacity"
        },
        {
            imgSrc: DVista,
            alt: "3DVista Logo",
            header: "3DVista",
            id: "3DVista"
        },
        {
            imgSrc: CenarioVR,
            alt: "CenarioVR Logo",
            header: "CenarioVR",
            id: "CenarioVR"
        },
        {
            imgSrc: Viar,
            alt: "Viar 360 Logo",
            header: "Viar 360",
            id: "Viar 360"
        },
        {
            imgSrc: HTML_CSS,
            alt: "LXPs Logo",
            header: "HTML & CSS",
            id: "HTMLs"
        },
        {
            imgSrc: ReactJS,
            alt: "ReactJS Logo",
            header: "ReactJS",
            id: "ReactJS"
        },
        {
            imgSrc: xAPI,
            alt: "xAPI Logo",
            header: "xAPI",
            id: "xAPI"
        },
        {
            imgSrc: SCORM,
            alt: "SCORM Logo",
            header: "SCORM",
            id: "SCORM"
        },
        {
            imgSrc: WordPress,
            alt: "WordPress Logo",
            header: "WordPress",
            id: "WordPress"
        },
        {
            imgSrc: LearnDash,
            alt: "LearnDash Logo",
            header: "LearnDash",
            id: "LearnDash"
        },
        {
            imgSrc: BuddyBoss,
            alt: "BuddyBoss Logo",
            header: "BuddyBoss",
            id: "BuddyBoss"
        },
        {
            imgSrc: LMSs,
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