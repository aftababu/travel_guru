import logo from '../../assets/logo.png';
import blacklogo from '../../assets/blacklogo.png';
import { FaSearch } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { navLinks } from '../../assets/navLinks';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/login');
  };
  const handleClick = () => {
    setMobile(!mobile);
  };
  return (
    <nav className='navbar'>
      <div className='navLogo'>
        <img
          src={`${location.pathname == '/' ? logo : blacklogo}`}
          alt='travel guru logo'
          style={{ maxWidth: '100px' }}
        />
      </div>
      <div className={`navText ${mobile && 'activeParent'}`}>
        <ul className={`navItems ${mobile && 'active'}`}>
          <li
            className={`${location.pathname == '/' ? 'nav-item' : 'InwhiteBg'}`}
          >
            <div className='searchBar'>
              <FaSearch className='icon' />
              <input
                type='search'
                className='input-field'
                placeholder='search your destination...'
              />
            </div>
          </li>
          {navLinks.map((item, key) => (
            <li
              key={key}
              className={`${
                location.pathname == '/' ? 'nav-item' : 'InwhiteBg'
              }`}
            >
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
          <li className='nav-item'>
            <button className=' loginBtn' onClick={() => handleNavigate()}>
              Login
            </button>
          </li>
        </ul>
        <div
          className={`${
            location.pathname == '/'
              ? 'nav__icon'
              : 'nav__icon InwhiteBg-nav__icon'
          }`}
          onClick={handleClick}
        >
          {mobile ? <HiX /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
