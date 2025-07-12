import './css/Pricing.css'

const Pricing = () => {
    return (
        <>
            <main className='pricing-main'>
                <div className="d-f jc-sb">
                    <h1 className="h1-title">Membership Pricing</h1>
                    <p className="pricing-main-desc">
                        Invest in spaces that drives your business.
                        Clear, straightforward and tailored to your needs.
                    </p>
                </div>
                <div className="pricing-main-content d-f">
                    <div className="pricing-item">
                        <div>
                            <h3 className="h3-title">Hot Desk</h3>
                            <p className="pricing-item-desc">
                                For the ultimate in flexibility, go with a hot desk.
                            </p>
                        </div>
                        <div>
                            <h4 className="pricing-item-price">$29<span>/month</span></h4>
                            <p className="pricing-item-note">Pause or cancel anytime</p>
                        </div>
                        <ul className="pricing-item-features">
                            <li>&#10004; Access to any available hot desk</li>
                            <li>&#10004; Fast Wi-Fi and utilities included</li>
                            <li>&#10004; 24/7 entry with keycard access</li>
                            <li>&#10004; Use of common areas and amenities</li>
                        </ul>
                        <div>
                            <h5 className="bonus-title">Bonus</h5>
                            <div className="bonus-box d-f">
                                <p className="bonus-item">Coffee</p>
                                <p className="bonus-item">Tea</p>
                                <p className="bonus-item">Water</p>
                            </div>
                        </div>
                        <a href="" className="pricing-item-subscribe">Subscribe Now</a>
                    </div>
                    <div className="pricing-item">
                        <div>
                            <div className="pricing-item-heading d-f align-center">
                                <h3 className="h3-title">Dedicated Desk</h3>
                                <p className="pricing-item-popular">Popular</p>
                            </div>
                            <p className="pricing-item-desc">
                                Claim your own dedicated workspace with this plan.
                            </p>
                        </div>
                        <div>
                            <h4 className="pricing-item-price">$199<span>/month</span></h4>
                            <p className="pricing-item-note">Pause or cancel anytime</p>
                        </div>
                        <ul className="pricing-item-features">
                            <li>&#10004; Your own reserved desk</li>
                            <li>&#10004; Lockable file cabinet</li>
                            <li>&#10004; 2 Day Office credits per month</li>
                            <li>&#10004; All Hot Desk plan benefits and freebies</li>
                        </ul>
                      <div>
                            <h5 className="bonus-title">Bonus</h5>
                            <div className="bonus-box d-f">
                                <p className="bonus-item">Printing</p>
                                <p className="bonus-item">Copying</p>
                                <p className="bonus-item">Weekly Cleaning</p>
                            </div>
                        </div>
                        <a href="" className="pricing-item-subscribe">Subscribe Now</a>
                    </div>
                    <div className="pricing-item">
                        <div>
                            <h3 className="h3-title">Private Office</h3>
                            <p className="pricing-item-desc">
                                Professional private offices for maximum privacy and quiet.
                            </p>
                        </div>
                        <div>
                            <p className="pricing-item-starting">Starting at</p>
                            <h4 className="pricing-item-price">$499<span> /month</span></h4>
                            <p className="pricing-item-note">Pause or cancel anytime</p>
                        </div>
                        <ul className="pricing-item-features">
                            <li>&#10004; Private furnished office with standing desk</li>
                            <li>&#10004; 24/7 access</li>
                            <li>&#10004; 4 Day Office credits per month</li>
                            <li>&#10004; Mail and package service</li>
                            <li>&#10004; All Dedicated Desk plan benefits and freebies</li>
                        </ul>
                        <div>
                            <h5 className="bonus-title">Bonus</h5>
                            <div className="bonus-box d-f">
                                <p className="bonus-item">Monthly Parking Pass</p>
                            </div>
                        </div>
                        <a href="" className="pricing-item-subscribe">Subscribe Now</a>
                    </div>
                </div>
                 <p className="pricing-main-agreement">All plans require a 12-month agreement. Prices are per person.</p>   
            </main>
            <section className='pricing-services'>
                <h2 className="h2-title">Add-ons <span>Services</span></h2>
                <div className="pricing-services-box d-f">
                    <div className="pricing-services-item">
                        <div>
                            <h3 className="h3-title">Day Office</h3>
                            <p className="services-item-desc">Rent a private office for just the day</p>
                        </div>
                        <div>
                            <h4 className="h2-title">$25</h4>
                            <p className="services-item-note">maximum 15 days/month</p>
                        </div>
                        <div>
                            <a href="" className="services-item-add">Add to Your Subscription</a>
                            <p className="services-item-note">Require minimum Hot Desk subscription</p>
                        </div>
                    </div>
                     <div className="pricing-services-item">
                        <div>
                            <h3 className="h3-title">Conference Room</h3>
                            <p className="services-item-desc">Book rooms for meetings or presentationsy</p>
                        </div>
                        <div>
                            <h4 className="h2-title">$35/hr</h4>
                            <p className="services-item-note">24-hour cancellation required</p>
                        </div>
                        <div>
                            <a href="" className="services-item-add">Add to Your Subscription</a>
                            <p className="services-item-note">Require minimum Hot Desk subscription</p>
                        </div>
                    </div>
                     <div className="pricing-services-item">
                        <div>
                            <h3 className="h3-title">Dedicated Desk Assistant</h3>
                            <p className="services-item-desc">Get support from a dedicated assistant</p>
                        </div>
                        <div>
                            <h4 className="h2-title">$99/mo</h4>
                            <p className="services-item-note">Pause or cancel anytime</p>
                        </div>
                        <div>
                            <a href="" className="services-item-add">Add to Your Subscription</a>
                            <p className="services-item-note">Require minimum Dedicated Desk subscription</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing