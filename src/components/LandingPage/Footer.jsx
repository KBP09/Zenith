import React from 'react';

import Logo from '../../assets/q-715f17d1.png';
function Footer() {
  return (
    <footer className='mx-48 mt-52 mb-0 border-slate-400 border-t border-opacity-30'>
      <div className='flex m-5 justify-between text-gray-300'>
        <div className='mr-80 flex-col'>
          <img alt='Zenith logo' decoding='async' src={Logo} className='header-brand-logo' />
          <div className='header-brand-name'>Zenith</div>
        </div>
        <div className='ml-40 mr-10 flex-col'>
          Product
          <div className='m-5 text-sm ml-0 text-gray-400 hover:text-gray-200'>Contact</div>
          <div className='m-5 text-sm ml-0 text-gray-400 hover:text-gray-200'>Documentation</div>
        </div>
        <div className='mx-10 flex-col'>
          Company
          <div className='m-5 text-sm ml-0 text-gray-400 hover:text-gray-200'>Home</div>
          <div className='m-5 text-sm ml-0 text-gray-400 hover:text-gray-200'>Analytics</div>
          <div className='m-5 text-sm ml-0 text-gray-400 hover:text-gray-200'>About</div>
        </div>
        <div className='mx-10 flex-col'>
          Contact
          <div className='m-5 text-sm ml-0  text-gray-400 hover:text-gray-200'>Facebook</div>
          <div className='m-5 text-sm ml-0 text-gray-400 hover:text-gray-200'>Linkedin</div>
          <div className='m-5 text-sm ml-0 text-gray-400 hover:text-gray-200'>Email</div>
          <div className='m-5 text-sm ml-0 text-gray-400 hover:text-gray-200'>Twitter</div>
        </div>
      </div>
      <div className='flex m-5 justify-between text-sm text-gray-600'>
        <div>Copyright © 2024 Da Vinci Inc. All rights reserved.</div>
        <div>
          Privacy Policy <span className='ml-10'>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
