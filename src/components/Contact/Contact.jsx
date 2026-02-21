import './Contact.css';

const Contact = () => {
    return(
        <section id="contact">
            <div className="column contactCard">
                <div>
                    <h2 className ="textCenter">Contact Me</h2>
                </div>
                <div>
                    <h3 className ="textCenter">Think I can help?</h3>
                </div>
                <div>
                    <p className ="textCenter">If you have a project you think I can help you with, I'm happy to chat. I am available for freelance or contract work.</p>
                </div>
                <div>
                    <a className="btn-green" href="mailto:derek.redmond@redmondelearning.ca" type="button">Contact Me</a>
                </div>
            </div>
        </section>
    )
}

export default Contact;