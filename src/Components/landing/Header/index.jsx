import logo from '../../../assets/logo.svg';
import iconSearch from '../../../assets/icon-search.svg';
import './style.css';

const Header = () => {
  return (
    <header id="#home">
      <div className='links'>
        <img src={logo} alt="logo" className='logo' />
        <nav>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#special">Special</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          </ul>
          <img src={iconSearch} alt="icon search" />
        </nav>
      </div>
      <div className="btn">
        <button>
          <span></span>Book Now!<span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
