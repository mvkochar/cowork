import './css/Contact.css'

const Contact = () => {
    return (
        <main className='contact-main'>
            <div className="d-f jc-sb">
                <h1 className="h1-title">Contact Us</h1>
                <p className="contact-desc">
                    Have questions about our coworking space and membership plans?
                    Drop us a line using the form below or give us a call.
                </p>
            </div>
            <div className="contact-box d-f jc-sb">
                <div className="contact-info d-f">
                    <dl>
                        <dt className="h3-title">Call Us At</dt>
                        <dd>
                            (555) 555-5555
                        </dd>
                    </dl>
                    <dl>
                        <dt className="h3-title">Office Hours</dt>
                        <dd>
                            Monday-Friday: 9am - 6pm <br />
                            Saturday: 9am - 3pm <br />
                            Closed Sundays
                        </dd>
                    </dl>
                    <dl>
                        <dt className="h3-title">Location</dt>
                        <dd>
                            123 Coworking Street
                            Anycity, State 12345
                        </dd>
                    </dl>
                </div>
                <form action="" className='contact-fm'>
                    <div className="input-box d-f">
                        <div className="input-bl d-f">
                            <input type="text" name='contactFName' placeholder='First Name*' />
                            <input type="text" name='contactLName' placeholder='Last Name*' />
                        </div>
                        <input type="email" name="contactEmail" placeholder='Email Address*' />
                        <input type="tel" name="contactPhone" placeholder='Phone' />
                        <select name="contactPlan">
                            <option value="0">Select a plan</option>
                        </select>
                        <textarea name="contactMsg" placeholder='Message*'></textarea>
                        <button type="button">Submit</button>
                        <p className="contact-fm-note">
                            We aim to respond to all inquiries within 24 business hours. 
                            For the fastest response, please include your preferred membership 
                            plan of interest and any specific questions you may have. One of our 
                            workspace specialists will be happy to assist you further.
                        </p>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Contact