import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
      <div><Link to="/"><img src="/images/logo.svg" alt="Logo" /></Link></div>
      <div className="d-f align-center">
        <nav>
          <ul className="header-nav d-f">
            <li className="header-nav-item"><Link to="/about">About</Link></li>
            <li className="header-nav-item"><Link to="/pricing">Pricing</Link></li>
            <li className="header-nav-item"><Link to="/blog">Blog</Link></li>
            <li className="header-nav-item"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="header-actions d-f">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </header>
  )
}

export default Header