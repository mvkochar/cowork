import { Cta, FaqBlock } from '../components'
import './css/About.css'

const About = () => {
    return (
        <>
            <main className='about-main'>
                <div className="d-f jc-sb">
                    <h1 className="h1-title">About Our Coworking Space</h1>
                    <p className="about-main-desc">
                        We're on a mission to reshape how people
                        work and create by providing elevated coworking experiences.
                    </p>
                </div>
                <div className="about-main-content d-f">
                    <div className="testimonial-card">
                        <div><img src="/images/testimonial-card.png" alt="testimonial-card" /></div>
                        <h3 className="h3-title">Our Story</h3>
                        <div className="d-f jc-sb">
                            <p className="testimonial-card-desc">
                                Cowork was founded in 2023 by Jensen Turner who saw an unmet need
                                for dynamic, design-focused coworking spaces that foster connection
                                and productivity. What started as a modest shared office has grown
                                into Delaware premier coworking destination serving freelancers, startups,
                                remote teams and more.
                            </p>
                            <p className="testimonial-card-num">1</p>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div><img src="/images/spaces-card.png" alt="spaces-card" /></div>
                        <h3 className="h3-title">Our Spaces</h3>
                        <div className="d-f jc-sb">
                            <p className="testimonial-card-desc">
                                Tap to expand
                            </p>
                            <p className="testimonial-card-num">2</p>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div><img src="/images/community-card.png" alt="community-card" /></div>
                        <h3 className="h3-title">Our Community</h3>
                        <div className="d-f jc-sb">
                            <p className="testimonial-card-desc">
                                Tap to expand
                            </p>
                            <p className="testimonial-card-num">3</p>
                        </div>
                    </div>
                </div>
            </main>
            <FaqBlock/>
            <div className="about-cta">
                <Cta/>
            </div>
        </>
    )
}

export default About