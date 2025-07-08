import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
      <div><Link to="/"><img src="/images/logo.svg" alt="Logo" /></Link></div>
      <div className="d-f align-center">
        <nav>
          <ul className="header-nav d-f">
            <li className="header-nav-item"><a href="">About</a></li>
            <li className="header-nav-item"><a href="">Pricing</a></li>
            <li className="header-nav-item"><a href="">Blog</a></li>
            <li className="header-nav-item"><a href="">Contact</a></li>
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