import React from 'react';
import './Services.css';

const Services = () => {
    const IDImage = require('./images/instructional_design.svg');
    const LXPImage = require('./images/learning_experience.svg');
    const LEImage = require('./images/learning_environment.svg');
    return(
        <section>
            <div className="box-column">
                <h1 className="services-main-header">What I Can Do</h1>
            </div>
            <div className="box">
                <div className="services-image-1">
                    <img className='services-icon' src={IDImage} alt="#" ></img>
                </div>
                <div className="services-description-1">
                    <h2 className='services-header'>Instructional Design</h2>
                    <p>We don't deliver content for the sake of delivering content, we deliver content so a learner can do something with that content. Let's design education around what the learner is expected to do in a realistic setting.</p>
                </div>
            </div>
            <div className="box">
                <div className="services-image-2">
                    <img className='services-icon' src={LXPImage} alt="#"></img>
                </div>
                <div className="services-description-2">
                    <h2 className='services-header'>Learning Experience</h2>
                    <p>When creating learning, we don't just think about the content the learner will engage with. The learning experience spans from registration through to putting content into action in the real world. We must consider the entire learning experience, from start to finish.</p>
                </div>
            </div>
            <div className="box">
                <div className="services-image-1">
                    <img className='services-icon' src={LEImage} alt="#"></img>
                </div>
                <div className="services-description-1">
                    <h2 className='services-header'>Learning Environment</h2>
                    <p>The needs of the learner and the needs of the content must be considered when creating a learning environment. From readily available online environments or custom built online environments to in-person classrooms, let's build a learning environment that meets the needs of your learners and content.</p>
                </div>
            </div>
            <hr id="portfolio"></hr>
        </section>
    ) 
        

}

export default Services;