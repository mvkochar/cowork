import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-bar d-f jc-sb">
        <div>
          <div><img src="/images/footer-logo.svg" alt="footer-logo" /></div>
          <p className="footer-note">Join our newsletter to stay up to date on features and releases.</p>
          <form action="" className='footer-subscribe'>
            <input type="email" name="subscribeEmail" placeholder='Enter your email' />
            <button type="button">Subscribe</button>
          </form>
          <p className="footer-note">
            By subscribing you agree to with our Privacy Policy
            and provide consent to receive updates from our company.
          </p>
        </div>
        <div>
          <h3 className="footer-bl-title">Explore More</h3>
          <nav>
            <ul className="footer-bl-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><a href="">Events</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <h3 className="footer-bl-title">Stay Connected</h3>
          <nav>
            <ul className="footer-bl-list">
              <li><a href="">Subscribe</a></li>
              <li><a href="">Member Stories</a></li>
              <li><a href="">Locations</a></li>
              <li><a href="">Write for Us</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <h3 className="footer-bl-title">Follow Us</h3>
          <nav>
            <ul className="footer-bl-list">
              <li><a href="">Facebook</a></li>
              <li><a href="">Instagram</a></li>
              <li><a href="">X</a></li>
              <li><a href="">LinkedIn</a></li>
              <li><a href="">Youtube</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-info d-f jc-sb">
        <p className="footer-note">&copy; 2024 Cowork. All rights reserved.</p>
        <div className="footer-info-links d-f">
          <a href="" className="footer-note">Privacy Policy</a>
          <a href="" className="footer-note">Terms of Service</a>
          <a href="" className="footer-note">Cookies Settings</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer