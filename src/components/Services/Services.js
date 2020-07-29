import React from 'react';
import './Services.css';
import ServicesItems from './ServicesItem';

const Services = () => {
    const servicesItems = [
        {
            imgType: "",
            imgSrc: require('./images/instructional_design.svg'),
            alt: "pen",
            descriptionType: "services-description-1",
            header: "Instructional Design",
            description: "We don't deliver content for the sake of delivering content, we deliver content so a learner can do something with that content. Let's design education around what the learner is expected to do in a realistic setting."
        },
        {
            imgType: "services-image-2",
            imgSrc: require('./images/learning_experience.svg'),
            alt: "start and finish line",
            descriptionType: "services-description-2",
            header: "Learning Experience",
            description: "When creating learning, we don't just think about the content the learner will engage with. The learning experience spans from registration through to putting content into action in the real world. We must consider the entire learning experience, from start to finish."
        },
        {
            imgType: "",
            imgSrc: require('./images/learning_environment.svg'),
            alt: "tablet and smartphone",
            descriptionType: "services-description-1",
            header: "Learning Environment",
            description: "The needs of the learner and the needs of the content must be considered when creating a learning environment. From readily available online environments or custom built online environments to in-person classrooms, let's build a learning environment that meets the needs of your learners and content."
        }
    ]
    
    return(
        <section>
            <div className="box-column">
                <h1 className="services-main-header">What I Can Do</h1>
            </div>
   
                {servicesItems.map (item => {
                    return <ServicesItems
                        imgType={item.imgType}
                        imgSrc={item.imgSrc} 
                        alt={item.alt} 
                        descriptionType={item.descriptionType} 
                        header={item.header} 
                        description={item.description} 
                        />
                })}

            <hr id="portfolio"></hr>
        </section>
    ) 
}

export default Services;