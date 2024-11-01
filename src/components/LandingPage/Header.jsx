import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';
import Logo from '../../assets/q-715f17d1.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust scroll distance if needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} bg-transparent`}>
      <div className='header-inner'>
        <Link to='/' className='header-brand flex items-center'>
          <img alt='Zenith logo' decoding='async' src={Logo} className='header-brand-logo' />
          <span className='header-brand-name'>Zenith</span>
        </Link>
        <nav className='header-nav rounded-full'>
          <ul className='ul'>
            <li className='li'>
              <Link
                to='/'
                className='header-nav-item text-gray-500 hover:text-white transition-colors'
              >
                Home
              </Link>
            </li>
            <li className='li'>
              <Link
                to='/dashboard'
                className='header-nav-item text-gray-500 hover:text-white transition-colors'
              >
                Dashboard
              </Link>
            </li>
            <li className='li'>
              <Link
                to='/about'
                className='header-nav-item text-gray-500 hover:text-white transition-colors'
              >
                About
              </Link>
            </li>
            <li className='li'>
              <Link
                to='/contact'
                className='header-nav-item text-gray-500 hover:text-white transition-colors'
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button aria-label='Join waitlist' className='button header-action'>
          <span className='header-action-text'>Get Started</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
